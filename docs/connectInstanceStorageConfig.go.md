# `connectInstanceStorageConfig` Submodule <a name="`connectInstanceStorageConfig` Submodule" id="@cdktn/provider-awscc.connectInstanceStorageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectInstanceStorageConfig <a name="ConnectInstanceStorageConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config awscc_connect_instance_storage_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

connectinstancestorageconfig.NewConnectInstanceStorageConfig(scope Construct, id *string, config ConnectInstanceStorageConfigConfig) ConnectInstanceStorageConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig">ConnectInstanceStorageConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig">ConnectInstanceStorageConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisFirehoseConfig">PutKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisStreamConfig">PutKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig">PutKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config">PutS3Config</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisFirehoseConfig">ResetKinesisFirehoseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisStreamConfig">ResetKinesisStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisVideoStreamConfig">ResetKinesisVideoStreamConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetS3Config">ResetS3Config</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKinesisFirehoseConfig` <a name="PutKinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisFirehoseConfig"></a>

```go
func PutKinesisFirehoseConfig(value ConnectInstanceStorageConfigKinesisFirehoseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisFirehoseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

---

##### `PutKinesisStreamConfig` <a name="PutKinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisStreamConfig"></a>

```go
func PutKinesisStreamConfig(value ConnectInstanceStorageConfigKinesisStreamConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

---

##### `PutKinesisVideoStreamConfig` <a name="PutKinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig"></a>

```go
func PutKinesisVideoStreamConfig(value ConnectInstanceStorageConfigKinesisVideoStreamConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putKinesisVideoStreamConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

---

##### `PutS3Config` <a name="PutS3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config"></a>

```go
func PutS3Config(value ConnectInstanceStorageConfigS3Config)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.putS3Config.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

---

##### `ResetKinesisFirehoseConfig` <a name="ResetKinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisFirehoseConfig"></a>

```go
func ResetKinesisFirehoseConfig()
```

##### `ResetKinesisStreamConfig` <a name="ResetKinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisStreamConfig"></a>

```go
func ResetKinesisStreamConfig()
```

##### `ResetKinesisVideoStreamConfig` <a name="ResetKinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetKinesisVideoStreamConfig"></a>

```go
func ResetKinesisVideoStreamConfig()
```

##### `ResetS3Config` <a name="ResetS3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.resetS3Config"></a>

```go
func ResetS3Config()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

connectinstancestorageconfig.ConnectInstanceStorageConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

connectinstancestorageconfig.ConnectInstanceStorageConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

connectinstancestorageconfig.ConnectInstanceStorageConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

connectinstancestorageconfig.ConnectInstanceStorageConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConnectInstanceStorageConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConnectInstanceStorageConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConnectInstanceStorageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConnectInstanceStorageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.associationId">AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfig">KinesisFirehoseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfig">KinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfig">KinesisVideoStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3Config">S3Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference">ConnectInstanceStorageConfigS3ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfigInput">KinesisFirehoseConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfigInput">KinesisStreamConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfigInput">KinesisVideoStreamConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3ConfigInput">S3ConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.associationId"></a>

```go
func AssociationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KinesisFirehoseConfig`<sup>Required</sup> <a name="KinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfig"></a>

```go
func KinesisFirehoseConfig() ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference">ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference</a>

---

##### `KinesisStreamConfig`<sup>Required</sup> <a name="KinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfig"></a>

```go
func KinesisStreamConfig() ConnectInstanceStorageConfigKinesisStreamConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisStreamConfigOutputReference</a>

---

##### `KinesisVideoStreamConfig`<sup>Required</sup> <a name="KinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfig"></a>

```go
func KinesisVideoStreamConfig() ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference</a>

---

##### `S3Config`<sup>Required</sup> <a name="S3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3Config"></a>

```go
func S3Config() ConnectInstanceStorageConfigS3ConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference">ConnectInstanceStorageConfigS3ConfigOutputReference</a>

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `KinesisFirehoseConfigInput`<sup>Optional</sup> <a name="KinesisFirehoseConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisFirehoseConfigInput"></a>

```go
func KinesisFirehoseConfigInput() interface{}
```

- *Type:* interface{}

---

##### `KinesisStreamConfigInput`<sup>Optional</sup> <a name="KinesisStreamConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisStreamConfigInput"></a>

```go
func KinesisStreamConfigInput() interface{}
```

- *Type:* interface{}

---

##### `KinesisVideoStreamConfigInput`<sup>Optional</sup> <a name="KinesisVideoStreamConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.kinesisVideoStreamConfigInput"></a>

```go
func KinesisVideoStreamConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `S3ConfigInput`<sup>Optional</sup> <a name="S3ConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.s3ConfigInput"></a>

```go
func S3ConfigInput() interface{}
```

- *Type:* interface{}

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectInstanceStorageConfigConfig <a name="ConnectInstanceStorageConfigConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

&connectinstancestorageconfig.ConnectInstanceStorageConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceArn: *string,
	ResourceType: *string,
	StorageType: *string,
	KinesisFirehoseConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig,
	KinesisStreamConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig,
	KinesisVideoStreamConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig,
	S3Config: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | Connect Instance ID with which the storage config will be associated. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | Specifies the type of storage resource available for the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.storageType">StorageType</a></code> | <code>*string</code> | Specifies the storage type to be associated with the instance. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisFirehoseConfig">KinesisFirehoseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisStreamConfig">KinesisStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisVideoStreamConfig">KinesisVideoStreamConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.s3Config">S3Config</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

Connect Instance ID with which the storage config will be associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#instance_arn ConnectInstanceStorageConfig#instance_arn}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Specifies the type of storage resource available for the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#resource_type ConnectInstanceStorageConfig#resource_type}

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

Specifies the storage type to be associated with the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#storage_type ConnectInstanceStorageConfig#storage_type}

---

##### `KinesisFirehoseConfig`<sup>Optional</sup> <a name="KinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisFirehoseConfig"></a>

```go
KinesisFirehoseConfig ConnectInstanceStorageConfigKinesisFirehoseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig">ConnectInstanceStorageConfigKinesisFirehoseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#kinesis_firehose_config ConnectInstanceStorageConfig#kinesis_firehose_config}.

---

##### `KinesisStreamConfig`<sup>Optional</sup> <a name="KinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisStreamConfig"></a>

```go
KinesisStreamConfig ConnectInstanceStorageConfigKinesisStreamConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig">ConnectInstanceStorageConfigKinesisStreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#kinesis_stream_config ConnectInstanceStorageConfig#kinesis_stream_config}.

---

##### `KinesisVideoStreamConfig`<sup>Optional</sup> <a name="KinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.kinesisVideoStreamConfig"></a>

```go
KinesisVideoStreamConfig ConnectInstanceStorageConfigKinesisVideoStreamConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#kinesis_video_stream_config ConnectInstanceStorageConfig#kinesis_video_stream_config}.

---

##### `S3Config`<sup>Optional</sup> <a name="S3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigConfig.property.s3Config"></a>

```go
S3Config ConnectInstanceStorageConfigS3Config
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config">ConnectInstanceStorageConfigS3Config</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#s3_config ConnectInstanceStorageConfig#s3_config}.

---

### ConnectInstanceStorageConfigKinesisFirehoseConfig <a name="ConnectInstanceStorageConfigKinesisFirehoseConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

&connectinstancestorageconfig.ConnectInstanceStorageConfigKinesisFirehoseConfig {
	FirehoseArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig.property.firehoseArn">FirehoseArn</a></code> | <code>*string</code> | An ARN is a unique AWS resource identifier. |

---

##### `FirehoseArn`<sup>Optional</sup> <a name="FirehoseArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfig.property.firehoseArn"></a>

```go
FirehoseArn *string
```

- *Type:* *string

An ARN is a unique AWS resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#firehose_arn ConnectInstanceStorageConfig#firehose_arn}

---

### ConnectInstanceStorageConfigKinesisStreamConfig <a name="ConnectInstanceStorageConfigKinesisStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

&connectinstancestorageconfig.ConnectInstanceStorageConfigKinesisStreamConfig {
	StreamArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig.property.streamArn">StreamArn</a></code> | <code>*string</code> | An ARN is a unique AWS resource identifier. |

---

##### `StreamArn`<sup>Optional</sup> <a name="StreamArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfig.property.streamArn"></a>

```go
StreamArn *string
```

- *Type:* *string

An ARN is a unique AWS resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#stream_arn ConnectInstanceStorageConfig#stream_arn}

---

### ConnectInstanceStorageConfigKinesisVideoStreamConfig <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

&connectinstancestorageconfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig {
	EncryptionConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig,
	Prefix: *string,
	RetentionPeriodHours: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.prefix">Prefix</a></code> | <code>*string</code> | Prefixes are used to infer logical hierarchy. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.retentionPeriodHours">RetentionPeriodHours</a></code> | <code>*f64</code> | Number of hours. |

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.encryptionConfig"></a>

```go
EncryptionConfig ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Prefixes are used to infer logical hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#prefix ConnectInstanceStorageConfig#prefix}

---

##### `RetentionPeriodHours`<sup>Optional</sup> <a name="RetentionPeriodHours" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfig.property.retentionPeriodHours"></a>

```go
RetentionPeriodHours *f64
```

- *Type:* *f64

Number of hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#retention_period_hours ConnectInstanceStorageConfig#retention_period_hours}

---

### ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

&connectinstancestorageconfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig {
	EncryptionType: *string,
	KeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Specifies default encryption using AWS KMS-Managed Keys. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.keyId">KeyId</a></code> | <code>*string</code> | Specifies the encryption key id. |

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Specifies default encryption using AWS KMS-Managed Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Specifies the encryption key id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}

---

### ConnectInstanceStorageConfigS3Config <a name="ConnectInstanceStorageConfigS3Config" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

&connectinstancestorageconfig.ConnectInstanceStorageConfigS3Config {
	BucketName: *string,
	BucketPrefix: *string,
	EncryptionConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketName">BucketName</a></code> | <code>*string</code> | A name for the S3 Bucket. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | Prefixes are used to infer logical hierarchy. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

A name for the S3 Bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#bucket_name ConnectInstanceStorageConfig#bucket_name}

---

##### `BucketPrefix`<sup>Optional</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.bucketPrefix"></a>

```go
BucketPrefix *string
```

- *Type:* *string

Prefixes are used to infer logical hierarchy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#bucket_prefix ConnectInstanceStorageConfig#bucket_prefix}

---

##### `EncryptionConfig`<sup>Optional</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3Config.property.encryptionConfig"></a>

```go
EncryptionConfig ConnectInstanceStorageConfigS3ConfigEncryptionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#encryption_config ConnectInstanceStorageConfig#encryption_config}.

---

### ConnectInstanceStorageConfigS3ConfigEncryptionConfig <a name="ConnectInstanceStorageConfigS3ConfigEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

&connectinstancestorageconfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig {
	EncryptionType: *string,
	KeyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | Specifies default encryption using AWS KMS-Managed Keys. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.keyId">KeyId</a></code> | <code>*string</code> | Specifies the encryption key id. |

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

Specifies default encryption using AWS KMS-Managed Keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#encryption_type ConnectInstanceStorageConfig#encryption_type}

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Specifies the encryption key id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_instance_storage_config#key_id ConnectInstanceStorageConfig#key_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

connectinstancestorageconfig.NewConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resetFirehoseArn">ResetFirehoseArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFirehoseArn` <a name="ResetFirehoseArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.resetFirehoseArn"></a>

```go
func ResetFirehoseArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArnInput">FirehoseArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn">FirehoseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirehoseArnInput`<sup>Optional</sup> <a name="FirehoseArnInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArnInput"></a>

```go
func FirehoseArnInput() *string
```

- *Type:* *string

---

##### `FirehoseArn`<sup>Required</sup> <a name="FirehoseArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.firehoseArn"></a>

```go
func FirehoseArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisFirehoseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectInstanceStorageConfigKinesisStreamConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisStreamConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

connectinstancestorageconfig.NewConnectInstanceStorageConfigKinesisStreamConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectInstanceStorageConfigKinesisStreamConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resetStreamArn">ResetStreamArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStreamArn` <a name="ResetStreamArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.resetStreamArn"></a>

```go
func ResetStreamArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArnInput">StreamArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn">StreamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StreamArnInput`<sup>Optional</sup> <a name="StreamArnInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArnInput"></a>

```go
func StreamArnInput() *string
```

- *Type:* *string

---

##### `StreamArn`<sup>Required</sup> <a name="StreamArn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.streamArn"></a>

```go
func StreamArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisStreamConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

connectinstancestorageconfig.NewConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.resetKeyId"></a>

```go
func ResetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference <a name="ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

connectinstancestorageconfig.NewConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetRetentionPeriodHours">ResetRetentionPeriodHours</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfig</a>

---

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetRetentionPeriodHours` <a name="ResetRetentionPeriodHours" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.resetRetentionPeriodHours"></a>

```go
func ResetRetentionPeriodHours()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHoursInput">RetentionPeriodHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours">RetentionPeriodHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfig"></a>

```go
func EncryptionConfig() ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigKinesisVideoStreamConfigEncryptionConfigOutputReference</a>

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodHoursInput`<sup>Optional</sup> <a name="RetentionPeriodHoursInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHoursInput"></a>

```go
func RetentionPeriodHoursInput() *f64
```

- *Type:* *f64

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `RetentionPeriodHours`<sup>Required</sup> <a name="RetentionPeriodHours" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.retentionPeriodHours"></a>

```go
func RetentionPeriodHours() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigKinesisVideoStreamConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference <a name="ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

connectinstancestorageconfig.NewConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetKeyId">ResetKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetKeyId` <a name="ResetKeyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.resetKeyId"></a>

```go
func ResetKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectInstanceStorageConfigS3ConfigOutputReference <a name="ConnectInstanceStorageConfigS3ConfigOutputReference" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectinstancestorageconfig"

connectinstancestorageconfig.NewConnectInstanceStorageConfigS3ConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectInstanceStorageConfigS3ConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.putEncryptionConfig">PutEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketPrefix">ResetBucketPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetEncryptionConfig">ResetEncryptionConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfig` <a name="PutEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.putEncryptionConfig"></a>

```go
func PutEncryptionConfig(value ConnectInstanceStorageConfigS3ConfigEncryptionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfig">ConnectInstanceStorageConfigS3ConfigEncryptionConfig</a>

---

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetBucketPrefix` <a name="ResetBucketPrefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetBucketPrefix"></a>

```go
func ResetBucketPrefix()
```

##### `ResetEncryptionConfig` <a name="ResetEncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.resetEncryptionConfig"></a>

```go
func ResetEncryptionConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig">EncryptionConfig</a></code> | <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefixInput">BucketPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfigInput">EncryptionConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix">BucketPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionConfig`<sup>Required</sup> <a name="EncryptionConfig" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfig"></a>

```go
func EncryptionConfig() ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference">ConnectInstanceStorageConfigS3ConfigEncryptionConfigOutputReference</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketPrefixInput`<sup>Optional</sup> <a name="BucketPrefixInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefixInput"></a>

```go
func BucketPrefixInput() *string
```

- *Type:* *string

---

##### `EncryptionConfigInput`<sup>Optional</sup> <a name="EncryptionConfigInput" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.encryptionConfigInput"></a>

```go
func EncryptionConfigInput() interface{}
```

- *Type:* interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketPrefix`<sup>Required</sup> <a name="BucketPrefix" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.bucketPrefix"></a>

```go
func BucketPrefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectInstanceStorageConfig.ConnectInstanceStorageConfigS3ConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



