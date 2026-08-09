# `glueIntegration` Submodule <a name="`glueIntegration` Submodule" id="@cdktn/provider-awscc.glueIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueIntegration <a name="GlueIntegration" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration awscc_glue_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegration"

glueintegration.NewGlueIntegration(scope Construct, id *string, config GlueIntegrationConfig) GlueIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig">GlueIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig">GlueIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig">PutIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetAdditionalEncryptionContext">ResetAdditionalEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDataFilter">ResetDataFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetIntegrationConfig">ResetIntegrationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIntegrationConfig` <a name="PutIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig"></a>

```go
func PutIntegrationConfig(value GlueIntegrationIntegrationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putIntegrationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalEncryptionContext` <a name="ResetAdditionalEncryptionContext" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetAdditionalEncryptionContext"></a>

```go
func ResetAdditionalEncryptionContext()
```

##### `ResetDataFilter` <a name="ResetDataFilter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDataFilter"></a>

```go
func ResetDataFilter()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIntegrationConfig` <a name="ResetIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetIntegrationConfig"></a>

```go
func ResetIntegrationConfig()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegration"

glueintegration.GlueIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegration"

glueintegration.GlueIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegration"

glueintegration.GlueIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegration"

glueintegration.GlueIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GlueIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlueIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlueIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GlueIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationArn">IntegrationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfig">IntegrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference">GlueIntegrationIntegrationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList">GlueIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContextInput">AdditionalEncryptionContextInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilterInput">DataFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfigInput">IntegrationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationNameInput">IntegrationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArnInput">SourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArnInput">TargetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilter">DataFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationName">IntegrationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArn">SourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArn">TargetArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationArn`<sup>Required</sup> <a name="IntegrationArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationArn"></a>

```go
func IntegrationArn() *string
```

- *Type:* *string

---

##### `IntegrationConfig`<sup>Required</sup> <a name="IntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfig"></a>

```go
func IntegrationConfig() GlueIntegrationIntegrationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference">GlueIntegrationIntegrationConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tags"></a>

```go
func Tags() GlueIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList">GlueIntegrationTagsList</a>

---

##### `AdditionalEncryptionContextInput`<sup>Optional</sup> <a name="AdditionalEncryptionContextInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContextInput"></a>

```go
func AdditionalEncryptionContextInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DataFilterInput`<sup>Optional</sup> <a name="DataFilterInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilterInput"></a>

```go
func DataFilterInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IntegrationConfigInput`<sup>Optional</sup> <a name="IntegrationConfigInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationConfigInput"></a>

```go
func IntegrationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IntegrationNameInput`<sup>Optional</sup> <a name="IntegrationNameInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationNameInput"></a>

```go
func IntegrationNameInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `SourceArnInput`<sup>Optional</sup> <a name="SourceArnInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArnInput"></a>

```go
func SourceArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetArnInput`<sup>Optional</sup> <a name="TargetArnInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArnInput"></a>

```go
func TargetArnInput() *string
```

- *Type:* *string

---

##### `AdditionalEncryptionContext`<sup>Required</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.additionalEncryptionContext"></a>

```go
func AdditionalEncryptionContext() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DataFilter`<sup>Required</sup> <a name="DataFilter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.dataFilter"></a>

```go
func DataFilter() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.integrationName"></a>

```go
func IntegrationName() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.sourceArn"></a>

```go
func SourceArn() *string
```

- *Type:* *string

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.targetArn"></a>

```go
func TargetArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueIntegration.GlueIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueIntegrationConfig <a name="GlueIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegration"

&glueintegration.GlueIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IntegrationName: *string,
	SourceArn: *string,
	TargetArn: *string,
	AdditionalEncryptionContext: *map[string]*string,
	DataFilter: *string,
	Description: *string,
	IntegrationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueIntegration.GlueIntegrationIntegrationConfig,
	KmsKeyId: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationName">IntegrationName</a></code> | <code>*string</code> | The name of the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.sourceArn">SourceArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the database to use as the source for replication. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.targetArn">TargetArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Glue data warehouse to use as the target for replication. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.additionalEncryptionContext">AdditionalEncryptionContext</a></code> | <code>*map[string]*string</code> | An optional set of non-secret key value pairs that contains additional contextual information about the data. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dataFilter">DataFilter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#data_filter GlueIntegration#data_filter}. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#description GlueIntegration#description}. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationConfig">IntegrationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a></code> | The configuration settings for the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | An KMS key identifier for the key to use to encrypt the integration. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IntegrationName`<sup>Required</sup> <a name="IntegrationName" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationName"></a>

```go
IntegrationName *string
```

- *Type:* *string

The name of the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#integration_name GlueIntegration#integration_name}

---

##### `SourceArn`<sup>Required</sup> <a name="SourceArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.sourceArn"></a>

```go
SourceArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the database to use as the source for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#source_arn GlueIntegration#source_arn}

---

##### `TargetArn`<sup>Required</sup> <a name="TargetArn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.targetArn"></a>

```go
TargetArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Glue data warehouse to use as the target for replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#target_arn GlueIntegration#target_arn}

---

##### `AdditionalEncryptionContext`<sup>Optional</sup> <a name="AdditionalEncryptionContext" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.additionalEncryptionContext"></a>

```go
AdditionalEncryptionContext *map[string]*string
```

- *Type:* *map[string]*string

An optional set of non-secret key value pairs that contains additional contextual information about the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#additional_encryption_context GlueIntegration#additional_encryption_context}

---

##### `DataFilter`<sup>Optional</sup> <a name="DataFilter" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.dataFilter"></a>

```go
DataFilter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#data_filter GlueIntegration#data_filter}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#description GlueIntegration#description}.

---

##### `IntegrationConfig`<sup>Optional</sup> <a name="IntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.integrationConfig"></a>

```go
IntegrationConfig GlueIntegrationIntegrationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig">GlueIntegrationIntegrationConfig</a>

The configuration settings for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#integration_config GlueIntegration#integration_config}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

An KMS key identifier for the key to use to encrypt the integration.

If you don't specify an encryption key, the default AWS owned KMS key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#kms_key_id GlueIntegration#kms_key_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#tags GlueIntegration#tags}

---

### GlueIntegrationIntegrationConfig <a name="GlueIntegrationIntegrationConfig" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegration"

&glueintegration.GlueIntegrationIntegrationConfig {
	ContinuousSync: interface{},
	RefreshInterval: *string,
	SourceProperties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.continuousSync">ContinuousSync</a></code> | <code>interface{}</code> | Enables continuous synchronization for on-demand data extractions. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.refreshInterval">RefreshInterval</a></code> | <code>*string</code> | Specifies the frequency at which CDC (Change Data Capture) pulls or incremental loads should occur. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.sourceProperties">SourceProperties</a></code> | <code>*map[string]*string</code> | A collection of key-value pairs that specify additional properties for the integration source. |

---

##### `ContinuousSync`<sup>Optional</sup> <a name="ContinuousSync" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.continuousSync"></a>

```go
ContinuousSync interface{}
```

- *Type:* interface{}

Enables continuous synchronization for on-demand data extractions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#continuous_sync GlueIntegration#continuous_sync}

---

##### `RefreshInterval`<sup>Optional</sup> <a name="RefreshInterval" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.refreshInterval"></a>

```go
RefreshInterval *string
```

- *Type:* *string

Specifies the frequency at which CDC (Change Data Capture) pulls or incremental loads should occur.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#refresh_interval GlueIntegration#refresh_interval}

---

##### `SourceProperties`<sup>Optional</sup> <a name="SourceProperties" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfig.property.sourceProperties"></a>

```go
SourceProperties *map[string]*string
```

- *Type:* *map[string]*string

A collection of key-value pairs that specify additional properties for the integration source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#source_properties GlueIntegration#source_properties}

---

### GlueIntegrationTags <a name="GlueIntegrationTags" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegration"

&glueintegration.GlueIntegrationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#key GlueIntegration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/glue_integration#value GlueIntegration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueIntegrationIntegrationConfigOutputReference <a name="GlueIntegrationIntegrationConfigOutputReference" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegration"

glueintegration.NewGlueIntegrationIntegrationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueIntegrationIntegrationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetContinuousSync">ResetContinuousSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetRefreshInterval">ResetRefreshInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetSourceProperties">ResetSourceProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContinuousSync` <a name="ResetContinuousSync" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetContinuousSync"></a>

```go
func ResetContinuousSync()
```

##### `ResetRefreshInterval` <a name="ResetRefreshInterval" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetRefreshInterval"></a>

```go
func ResetRefreshInterval()
```

##### `ResetSourceProperties` <a name="ResetSourceProperties" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.resetSourceProperties"></a>

```go
func ResetSourceProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSyncInput">ContinuousSyncInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshIntervalInput">RefreshIntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourcePropertiesInput">SourcePropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSync">ContinuousSync</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshInterval">RefreshInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourceProperties">SourceProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContinuousSyncInput`<sup>Optional</sup> <a name="ContinuousSyncInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSyncInput"></a>

```go
func ContinuousSyncInput() interface{}
```

- *Type:* interface{}

---

##### `RefreshIntervalInput`<sup>Optional</sup> <a name="RefreshIntervalInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshIntervalInput"></a>

```go
func RefreshIntervalInput() *string
```

- *Type:* *string

---

##### `SourcePropertiesInput`<sup>Optional</sup> <a name="SourcePropertiesInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourcePropertiesInput"></a>

```go
func SourcePropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ContinuousSync`<sup>Required</sup> <a name="ContinuousSync" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.continuousSync"></a>

```go
func ContinuousSync() interface{}
```

- *Type:* interface{}

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.refreshInterval"></a>

```go
func RefreshInterval() *string
```

- *Type:* *string

---

##### `SourceProperties`<sup>Required</sup> <a name="SourceProperties" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.sourceProperties"></a>

```go
func SourceProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationIntegrationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueIntegrationTagsList <a name="GlueIntegrationTagsList" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegration"

glueintegration.NewGlueIntegrationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueIntegrationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.get"></a>

```go
func Get(index *f64) GlueIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueIntegrationTagsOutputReference <a name="GlueIntegrationTagsOutputReference" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/glueintegration"

glueintegration.NewGlueIntegrationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueIntegrationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueIntegration.GlueIntegrationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



