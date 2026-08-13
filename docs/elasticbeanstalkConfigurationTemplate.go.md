# `elasticbeanstalkConfigurationTemplate` Submodule <a name="`elasticbeanstalkConfigurationTemplate` Submodule" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticbeanstalkConfigurationTemplate <a name="ElasticbeanstalkConfigurationTemplate" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template awscc_elasticbeanstalk_configuration_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.NewElasticbeanstalkConfigurationTemplate(scope Construct, id *string, config ElasticbeanstalkConfigurationTemplateConfig) ElasticbeanstalkConfigurationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig">ElasticbeanstalkConfigurationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig">ElasticbeanstalkConfigurationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings">PutOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration">PutSourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetEnvironmentId">ResetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOptionSettings">ResetOptionSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetPlatformArn">ResetPlatformArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSolutionStackName">ResetSolutionStackName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSourceConfiguration">ResetSourceConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptionSettings` <a name="PutOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings"></a>

```go
func PutOptionSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putOptionSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceConfiguration` <a name="PutSourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration"></a>

```go
func PutSourceConfiguration(value ElasticbeanstalkConfigurationTemplateSourceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.putSourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnvironmentId` <a name="ResetEnvironmentId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetEnvironmentId"></a>

```go
func ResetEnvironmentId()
```

##### `ResetOptionSettings` <a name="ResetOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetOptionSettings"></a>

```go
func ResetOptionSettings()
```

##### `ResetPlatformArn` <a name="ResetPlatformArn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetPlatformArn"></a>

```go
func ResetPlatformArn()
```

##### `ResetSolutionStackName` <a name="ResetSolutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSolutionStackName"></a>

```go
func ResetSolutionStackName()
```

##### `ResetSourceConfiguration` <a name="ResetSourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.resetSourceConfiguration"></a>

```go
func ResetSourceConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.ElasticbeanstalkConfigurationTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.ElasticbeanstalkConfigurationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.ElasticbeanstalkConfigurationTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.ElasticbeanstalkConfigurationTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ElasticbeanstalkConfigurationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ElasticbeanstalkConfigurationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ElasticbeanstalkConfigurationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ElasticbeanstalkConfigurationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettings">OptionSettings</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList">ElasticbeanstalkConfigurationTemplateOptionSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.templateName">TemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationNameInput">ApplicationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentIdInput">EnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettingsInput">OptionSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArnInput">PlatformArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackNameInput">SolutionStackNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfigurationInput">SourceConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArn">PlatformArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackName">SolutionStackName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OptionSettings`<sup>Required</sup> <a name="OptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettings"></a>

```go
func OptionSettings() ElasticbeanstalkConfigurationTemplateOptionSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList">ElasticbeanstalkConfigurationTemplateOptionSettingsList</a>

---

##### `SourceConfiguration`<sup>Required</sup> <a name="SourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfiguration"></a>

```go
func SourceConfiguration() ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference">ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference</a>

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.templateName"></a>

```go
func TemplateName() *string
```

- *Type:* *string

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationNameInput"></a>

```go
func ApplicationNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnvironmentIdInput`<sup>Optional</sup> <a name="EnvironmentIdInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentIdInput"></a>

```go
func EnvironmentIdInput() *string
```

- *Type:* *string

---

##### `OptionSettingsInput`<sup>Optional</sup> <a name="OptionSettingsInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.optionSettingsInput"></a>

```go
func OptionSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `PlatformArnInput`<sup>Optional</sup> <a name="PlatformArnInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArnInput"></a>

```go
func PlatformArnInput() *string
```

- *Type:* *string

---

##### `SolutionStackNameInput`<sup>Optional</sup> <a name="SolutionStackNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackNameInput"></a>

```go
func SolutionStackNameInput() *string
```

- *Type:* *string

---

##### `SourceConfigurationInput`<sup>Optional</sup> <a name="SourceConfigurationInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.sourceConfigurationInput"></a>

```go
func SourceConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnvironmentId`<sup>Required</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.environmentId"></a>

```go
func EnvironmentId() *string
```

- *Type:* *string

---

##### `PlatformArn`<sup>Required</sup> <a name="PlatformArn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.platformArn"></a>

```go
func PlatformArn() *string
```

- *Type:* *string

---

##### `SolutionStackName`<sup>Required</sup> <a name="SolutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.solutionStackName"></a>

```go
func SolutionStackName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticbeanstalkConfigurationTemplateConfig <a name="ElasticbeanstalkConfigurationTemplateConfig" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkconfigurationtemplate"

&elasticbeanstalkconfigurationtemplate.ElasticbeanstalkConfigurationTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationName: *string,
	Description: *string,
	EnvironmentId: *string,
	OptionSettings: interface{},
	PlatformArn: *string,
	SolutionStackName: *string,
	SourceConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.applicationName">ApplicationName</a></code> | <code>*string</code> | The name of the Elastic Beanstalk application to associate with this configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.description">Description</a></code> | <code>*string</code> | An optional description for this configuration. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.environmentId">EnvironmentId</a></code> | <code>*string</code> | The ID of an environment whose settings you want to use to create the configuration template. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.optionSettings">OptionSettings</a></code> | <code>interface{}</code> | Option values for the Elastic Beanstalk configuration, such as the instance type. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.platformArn">PlatformArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the custom platform. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.solutionStackName">SolutionStackName</a></code> | <code>*string</code> | The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.sourceConfiguration">SourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a></code> | An Elastic Beanstalk configuration template to base this one on. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.applicationName"></a>

```go
ApplicationName *string
```

- *Type:* *string

The name of the Elastic Beanstalk application to associate with this configuration template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#application_name ElasticbeanstalkConfigurationTemplate#application_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description for this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#description ElasticbeanstalkConfigurationTemplate#description}

---

##### `EnvironmentId`<sup>Optional</sup> <a name="EnvironmentId" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.environmentId"></a>

```go
EnvironmentId *string
```

- *Type:* *string

The ID of an environment whose settings you want to use to create the configuration template.

You must specify EnvironmentId if you don't specify PlatformArn, SolutionStackName, or SourceConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#environment_id ElasticbeanstalkConfigurationTemplate#environment_id}

---

##### `OptionSettings`<sup>Optional</sup> <a name="OptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.optionSettings"></a>

```go
OptionSettings interface{}
```

- *Type:* interface{}

Option values for the Elastic Beanstalk configuration, such as the instance type.

If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the AWS Elastic Beanstalk Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#option_settings ElasticbeanstalkConfigurationTemplate#option_settings}

---

##### `PlatformArn`<sup>Optional</sup> <a name="PlatformArn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.platformArn"></a>

```go
PlatformArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the custom platform.

For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the AWS Elastic Beanstalk Developer Guide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#platform_arn ElasticbeanstalkConfigurationTemplate#platform_arn}

---

##### `SolutionStackName`<sup>Optional</sup> <a name="SolutionStackName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.solutionStackName"></a>

```go
SolutionStackName *string
```

- *Type:* *string

The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses.

For example, 64bit Amazon Linux 2013.09 running Tomcat 7 Java 7. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see [Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the AWS Elastic Beanstalk Developer Guide.

You must specify SolutionStackName if you don't specify PlatformArn, EnvironmentId, or SourceConfiguration.

Use the ListAvailableSolutionStacks API to obtain a list of available solution stacks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#solution_stack_name ElasticbeanstalkConfigurationTemplate#solution_stack_name}

---

##### `SourceConfiguration`<sup>Optional</sup> <a name="SourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateConfig.property.sourceConfiguration"></a>

```go
SourceConfiguration ElasticbeanstalkConfigurationTemplateSourceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration">ElasticbeanstalkConfigurationTemplateSourceConfiguration</a>

An Elastic Beanstalk configuration template to base this one on.

If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.

Values specified in OptionSettings override any values obtained from the SourceConfiguration.

You must specify SourceConfiguration if you don't specify PlatformArn, EnvironmentId, or SolutionStackName.

Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#source_configuration ElasticbeanstalkConfigurationTemplate#source_configuration}

---

### ElasticbeanstalkConfigurationTemplateOptionSettings <a name="ElasticbeanstalkConfigurationTemplateOptionSettings" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkconfigurationtemplate"

&elasticbeanstalkconfigurationtemplate.ElasticbeanstalkConfigurationTemplateOptionSettings {
	Namespace: *string,
	OptionName: *string,
	ResourceName: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.namespace">Namespace</a></code> | <code>*string</code> | A unique namespace that identifies the option's associated AWS resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.optionName">OptionName</a></code> | <code>*string</code> | The name of the configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.resourceName">ResourceName</a></code> | <code>*string</code> | A unique resource name for the option setting. Use it for a time–based scaling configuration option. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.value">Value</a></code> | <code>*string</code> | The current value for the configuration option. |

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

A unique namespace that identifies the option's associated AWS resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#namespace ElasticbeanstalkConfigurationTemplate#namespace}

---

##### `OptionName`<sup>Optional</sup> <a name="OptionName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.optionName"></a>

```go
OptionName *string
```

- *Type:* *string

The name of the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#option_name ElasticbeanstalkConfigurationTemplate#option_name}

---

##### `ResourceName`<sup>Optional</sup> <a name="ResourceName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.resourceName"></a>

```go
ResourceName *string
```

- *Type:* *string

A unique resource name for the option setting. Use it for a time–based scaling configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#resource_name ElasticbeanstalkConfigurationTemplate#resource_name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettings.property.value"></a>

```go
Value *string
```

- *Type:* *string

The current value for the configuration option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#value ElasticbeanstalkConfigurationTemplate#value}

---

### ElasticbeanstalkConfigurationTemplateSourceConfiguration <a name="ElasticbeanstalkConfigurationTemplateSourceConfiguration" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkconfigurationtemplate"

&elasticbeanstalkconfigurationtemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration {
	ApplicationName: *string,
	TemplateName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.applicationName">ApplicationName</a></code> | <code>*string</code> | The name of the application associated with the configuration. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.templateName">TemplateName</a></code> | <code>*string</code> | The name of the configuration template. |

---

##### `ApplicationName`<sup>Optional</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.applicationName"></a>

```go
ApplicationName *string
```

- *Type:* *string

The name of the application associated with the configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#application_name ElasticbeanstalkConfigurationTemplate#application_name}

---

##### `TemplateName`<sup>Optional</sup> <a name="TemplateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfiguration.property.templateName"></a>

```go
TemplateName *string
```

- *Type:* *string

The name of the configuration template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticbeanstalk_configuration_template#template_name ElasticbeanstalkConfigurationTemplate#template_name}

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticbeanstalkConfigurationTemplateOptionSettingsList <a name="ElasticbeanstalkConfigurationTemplateOptionSettingsList" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.NewElasticbeanstalkConfigurationTemplateOptionSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ElasticbeanstalkConfigurationTemplateOptionSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get"></a>

```go
func Get(index *f64) ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference <a name="ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.NewElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetOptionName">ResetOptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetResourceName">ResetResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetOptionName` <a name="ResetOptionName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetOptionName"></a>

```go
func ResetOptionName()
```

##### `ResetResourceName` <a name="ResetResourceName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetResourceName"></a>

```go
func ResetResourceName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionNameInput">OptionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceNameInput">ResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName">OptionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName">ResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OptionNameInput`<sup>Optional</sup> <a name="OptionNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionNameInput"></a>

```go
func OptionNameInput() *string
```

- *Type:* *string

---

##### `ResourceNameInput`<sup>Optional</sup> <a name="ResourceNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceNameInput"></a>

```go
func ResourceNameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OptionName`<sup>Required</sup> <a name="OptionName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.optionName"></a>

```go
func OptionName() *string
```

- *Type:* *string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.resourceName"></a>

```go
func ResourceName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateOptionSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference <a name="ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticbeanstalkconfigurationtemplate"

elasticbeanstalkconfigurationtemplate.NewElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetApplicationName">ResetApplicationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetTemplateName">ResetTemplateName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationName` <a name="ResetApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetApplicationName"></a>

```go
func ResetApplicationName()
```

##### `ResetTemplateName` <a name="ResetTemplateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.resetTemplateName"></a>

```go
func ResetTemplateName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationNameInput">ApplicationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateNameInput">TemplateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName">ApplicationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName">TemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationNameInput`<sup>Optional</sup> <a name="ApplicationNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationNameInput"></a>

```go
func ApplicationNameInput() *string
```

- *Type:* *string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateNameInput"></a>

```go
func TemplateNameInput() *string
```

- *Type:* *string

---

##### `ApplicationName`<sup>Required</sup> <a name="ApplicationName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.applicationName"></a>

```go
func ApplicationName() *string
```

- *Type:* *string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.templateName"></a>

```go
func TemplateName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticbeanstalkConfigurationTemplate.ElasticbeanstalkConfigurationTemplateSourceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



