# `ecrRepositoryCreationTemplate` Submodule <a name="`ecrRepositoryCreationTemplate` Submodule" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRepositoryCreationTemplate <a name="EcrRepositoryCreationTemplate" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template awscc_ecr_repository_creation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

ecrrepositorycreationtemplate.NewEcrRepositoryCreationTemplate(scope Construct, id *string, config EcrRepositoryCreationTemplateConfig) EcrRepositoryCreationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig">EcrRepositoryCreationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig">EcrRepositoryCreationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putImageTagMutabilityExclusionFilters">PutImageTagMutabilityExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetCustomRoleArn">ResetCustomRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutability">ResetImageTagMutability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutabilityExclusionFilters">ResetImageTagMutabilityExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetLifecyclePolicy">ResetLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetRepositoryPolicy">ResetRepositoryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetResourceTags">ResetResourceTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value EcrRepositoryCreationTemplateEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

---

##### `PutImageTagMutabilityExclusionFilters` <a name="PutImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putImageTagMutabilityExclusionFilters"></a>

```go
func PutImageTagMutabilityExclusionFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putImageTagMutabilityExclusionFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResourceTags` <a name="PutResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putResourceTags"></a>

```go
func PutResourceTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.putResourceTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomRoleArn` <a name="ResetCustomRoleArn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetCustomRoleArn"></a>

```go
func ResetCustomRoleArn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetImageTagMutability` <a name="ResetImageTagMutability" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutability"></a>

```go
func ResetImageTagMutability()
```

##### `ResetImageTagMutabilityExclusionFilters` <a name="ResetImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetImageTagMutabilityExclusionFilters"></a>

```go
func ResetImageTagMutabilityExclusionFilters()
```

##### `ResetLifecyclePolicy` <a name="ResetLifecyclePolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetLifecyclePolicy"></a>

```go
func ResetLifecyclePolicy()
```

##### `ResetRepositoryPolicy` <a name="ResetRepositoryPolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetRepositoryPolicy"></a>

```go
func ResetRepositoryPolicy()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.resetResourceTags"></a>

```go
func ResetResourceTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

ecrrepositorycreationtemplate.EcrRepositoryCreationTemplate_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

ecrrepositorycreationtemplate.EcrRepositoryCreationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

ecrrepositorycreationtemplate.EcrRepositoryCreationTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

ecrrepositorycreationtemplate.EcrRepositoryCreationTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EcrRepositoryCreationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EcrRepositoryCreationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EcrRepositoryCreationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EcrRepositoryCreationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference">EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilters">ImageTagMutabilityExclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTags">ResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList">EcrRepositoryCreationTemplateResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedForInput">AppliedForInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArnInput">CustomRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFiltersInput">ImageTagMutabilityExclusionFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityInput">ImageTagMutabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicyInput">LifecyclePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicyInput">RepositoryPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedFor">AppliedFor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArn">CustomRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutability">ImageTagMutability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicy">RepositoryPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference">EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageTagMutabilityExclusionFilters`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFilters"></a>

```go
func ImageTagMutabilityExclusionFilters() EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList">EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList</a>

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTags"></a>

```go
func ResourceTags() EcrRepositoryCreationTemplateResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList">EcrRepositoryCreationTemplateResourceTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AppliedForInput`<sup>Optional</sup> <a name="AppliedForInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedForInput"></a>

```go
func AppliedForInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomRoleArnInput`<sup>Optional</sup> <a name="CustomRoleArnInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArnInput"></a>

```go
func CustomRoleArnInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ImageTagMutabilityExclusionFiltersInput`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFiltersInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityExclusionFiltersInput"></a>

```go
func ImageTagMutabilityExclusionFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `ImageTagMutabilityInput`<sup>Optional</sup> <a name="ImageTagMutabilityInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutabilityInput"></a>

```go
func ImageTagMutabilityInput() *string
```

- *Type:* *string

---

##### `LifecyclePolicyInput`<sup>Optional</sup> <a name="LifecyclePolicyInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicyInput"></a>

```go
func LifecyclePolicyInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `RepositoryPolicyInput`<sup>Optional</sup> <a name="RepositoryPolicyInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicyInput"></a>

```go
func RepositoryPolicyInput() *string
```

- *Type:* *string

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.resourceTagsInput"></a>

```go
func ResourceTagsInput() interface{}
```

- *Type:* interface{}

---

##### `AppliedFor`<sup>Required</sup> <a name="AppliedFor" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.appliedFor"></a>

```go
func AppliedFor() *[]*string
```

- *Type:* *[]*string

---

##### `CustomRoleArn`<sup>Required</sup> <a name="CustomRoleArn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.customRoleArn"></a>

```go
func CustomRoleArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ImageTagMutability`<sup>Required</sup> <a name="ImageTagMutability" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.imageTagMutability"></a>

```go
func ImageTagMutability() *string
```

- *Type:* *string

---

##### `LifecyclePolicy`<sup>Required</sup> <a name="LifecyclePolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.lifecyclePolicy"></a>

```go
func LifecyclePolicy() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `RepositoryPolicy`<sup>Required</sup> <a name="RepositoryPolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.repositoryPolicy"></a>

```go
func RepositoryPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRepositoryCreationTemplateConfig <a name="EcrRepositoryCreationTemplateConfig" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

&ecrrepositorycreationtemplate.EcrRepositoryCreationTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AppliedFor: *[]*string,
	Prefix: *string,
	CustomRoleArn: *string,
	Description: *string,
	EncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration,
	ImageTagMutability: *string,
	ImageTagMutabilityExclusionFilters: interface{},
	LifecyclePolicy: *string,
	RepositoryPolicy: *string,
	ResourceTags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.appliedFor">AppliedFor</a></code> | <code>*[]*string</code> | A list of enumerable Strings representing the repository creation scenarios that this template will apply towards. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.prefix">Prefix</a></code> | <code>*string</code> | The repository namespace prefix associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.customRoleArn">CustomRoleArn</a></code> | <code>*string</code> | The ARN of the role to be assumed by Amazon ECR. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.description">Description</a></code> | <code>*string</code> | The description associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a></code> | The encryption configuration associated with the repository creation template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutability">ImageTagMutability</a></code> | <code>*string</code> | The tag mutability setting for the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutabilityExclusionFilters">ImageTagMutabilityExclusionFilters</a></code> | <code>interface{}</code> | A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code>*string</code> | The lifecycle policy to use for repositories created using the template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.repositoryPolicy">RepositoryPolicy</a></code> | <code>*string</code> | The repository policy to apply to repositories created using the template. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.resourceTags">ResourceTags</a></code> | <code>interface{}</code> | The metadata to apply to the repository to help you categorize and organize. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppliedFor`<sup>Required</sup> <a name="AppliedFor" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.appliedFor"></a>

```go
AppliedFor *[]*string
```

- *Type:* *[]*string

A list of enumerable Strings representing the repository creation scenarios that this template will apply towards.

The supported scenarios are PULL_THROUGH_CACHE, REPLICATION, and CREATE_ON_PUSH

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#applied_for EcrRepositoryCreationTemplate#applied_for}

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The repository namespace prefix associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#prefix EcrRepositoryCreationTemplate#prefix}

---

##### `CustomRoleArn`<sup>Optional</sup> <a name="CustomRoleArn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.customRoleArn"></a>

```go
CustomRoleArn *string
```

- *Type:* *string

The ARN of the role to be assumed by Amazon ECR.

Amazon ECR will assume your supplied role when the customRoleArn is specified. When this field isn't specified, Amazon ECR will use the service-linked role for the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#custom_role_arn EcrRepositoryCreationTemplate#custom_role_arn}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#description EcrRepositoryCreationTemplate#description}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration EcrRepositoryCreationTemplateEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration">EcrRepositoryCreationTemplateEncryptionConfiguration</a>

The encryption configuration associated with the repository creation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#encryption_configuration EcrRepositoryCreationTemplate#encryption_configuration}

---

##### `ImageTagMutability`<sup>Optional</sup> <a name="ImageTagMutability" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutability"></a>

```go
ImageTagMutability *string
```

- *Type:* *string

The tag mutability setting for the repository.

If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#image_tag_mutability EcrRepositoryCreationTemplate#image_tag_mutability}

---

##### `ImageTagMutabilityExclusionFilters`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.imageTagMutabilityExclusionFilters"></a>

```go
ImageTagMutabilityExclusionFilters interface{}
```

- *Type:* interface{}

A list of filters that specify which image tags are excluded from the repository creation template's image tag mutability setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filters EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filters}

---

##### `LifecyclePolicy`<sup>Optional</sup> <a name="LifecyclePolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.lifecyclePolicy"></a>

```go
LifecyclePolicy *string
```

- *Type:* *string

The lifecycle policy to use for repositories created using the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#lifecycle_policy EcrRepositoryCreationTemplate#lifecycle_policy}

---

##### `RepositoryPolicy`<sup>Optional</sup> <a name="RepositoryPolicy" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.repositoryPolicy"></a>

```go
RepositoryPolicy *string
```

- *Type:* *string

The repository policy to apply to repositories created using the template.

A repository policy is a permissions policy associated with a repository to control access permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#repository_policy EcrRepositoryCreationTemplate#repository_policy}

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateConfig.property.resourceTags"></a>

```go
ResourceTags interface{}
```

- *Type:* interface{}

The metadata to apply to the repository to help you categorize and organize.

Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#resource_tags EcrRepositoryCreationTemplate#resource_tags}

---

### EcrRepositoryCreationTemplateEncryptionConfiguration <a name="EcrRepositoryCreationTemplateEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

&ecrrepositorycreationtemplate.EcrRepositoryCreationTemplateEncryptionConfiguration {
	EncryptionType: *string,
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | The encryption type to use. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | If you use the ``KMS`` encryption type, specify the KMS key to use for encryption. |

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

The encryption type to use.

If you use the `KMS` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
If you use the `KMS_DSSE` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the `KMS` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created.
If you use the `AES256` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#encryption_type EcrRepositoryCreationTemplate#encryption_type}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfiguration.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

If you use the ``KMS`` encryption type, specify the KMS key to use for encryption.

The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#kms_key EcrRepositoryCreationTemplate#kms_key}

---

### EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters <a name="EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

&ecrrepositorycreationtemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters {
	ImageTagMutabilityExclusionFilterType: *string,
	ImageTagMutabilityExclusionFilterValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterType">ImageTagMutabilityExclusionFilterType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_type EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_type}. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterValue">ImageTagMutabilityExclusionFilterValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_value EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_value}. |

---

##### `ImageTagMutabilityExclusionFilterType`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterType"></a>

```go
ImageTagMutabilityExclusionFilterType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_type EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_type}.

---

##### `ImageTagMutabilityExclusionFilterValue`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterValue"></a>

```go
ImageTagMutabilityExclusionFilterValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#image_tag_mutability_exclusion_filter_value EcrRepositoryCreationTemplate#image_tag_mutability_exclusion_filter_value}.

---

### EcrRepositoryCreationTemplateResourceTags <a name="EcrRepositoryCreationTemplateResourceTags" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

&ecrrepositorycreationtemplate.EcrRepositoryCreationTemplateResourceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.key">Key</a></code> | <code>*string</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.value">Value</a></code> | <code>*string</code> | A ``value`` acts as a descriptor within a tag category (key). |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

One part of a key-value pair that make up a tag.

A `key` is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#key EcrRepositoryCreationTemplate#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

A ``value`` acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ecr_repository_creation_template#value EcrRepositoryCreationTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference <a name="EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

ecrrepositorycreationtemplate.NewEcrRepositoryCreationTemplateEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList <a name="EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

ecrrepositorycreationtemplate.NewEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get"></a>

```go
func Get(index *f64) EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference <a name="EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

ecrrepositorycreationtemplate.NewEcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterType">ResetImageTagMutabilityExclusionFilterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterValue">ResetImageTagMutabilityExclusionFilterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageTagMutabilityExclusionFilterType` <a name="ResetImageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterType"></a>

```go
func ResetImageTagMutabilityExclusionFilterType()
```

##### `ResetImageTagMutabilityExclusionFilterValue` <a name="ResetImageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterValue"></a>

```go
func ResetImageTagMutabilityExclusionFilterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterTypeInput">ImageTagMutabilityExclusionFilterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValueInput">ImageTagMutabilityExclusionFilterValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType">ImageTagMutabilityExclusionFilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue">ImageTagMutabilityExclusionFilterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageTagMutabilityExclusionFilterTypeInput`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilterTypeInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterTypeInput"></a>

```go
func ImageTagMutabilityExclusionFilterTypeInput() *string
```

- *Type:* *string

---

##### `ImageTagMutabilityExclusionFilterValueInput`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilterValueInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValueInput"></a>

```go
func ImageTagMutabilityExclusionFilterValueInput() *string
```

- *Type:* *string

---

##### `ImageTagMutabilityExclusionFilterType`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType"></a>

```go
func ImageTagMutabilityExclusionFilterType() *string
```

- *Type:* *string

---

##### `ImageTagMutabilityExclusionFilterValue`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue"></a>

```go
func ImageTagMutabilityExclusionFilterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateImageTagMutabilityExclusionFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcrRepositoryCreationTemplateResourceTagsList <a name="EcrRepositoryCreationTemplateResourceTagsList" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

ecrrepositorycreationtemplate.NewEcrRepositoryCreationTemplateResourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcrRepositoryCreationTemplateResourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.get"></a>

```go
func Get(index *f64) EcrRepositoryCreationTemplateResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcrRepositoryCreationTemplateResourceTagsOutputReference <a name="EcrRepositoryCreationTemplateResourceTagsOutputReference" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepositorycreationtemplate"

ecrrepositorycreationtemplate.NewEcrRepositoryCreationTemplateResourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcrRepositoryCreationTemplateResourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepositoryCreationTemplate.EcrRepositoryCreationTemplateResourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



