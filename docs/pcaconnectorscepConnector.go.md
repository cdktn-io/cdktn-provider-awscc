# `pcaconnectorscepConnector` Submodule <a name="`pcaconnectorscepConnector` Submodule" id="@cdktn/provider-awscc.pcaconnectorscepConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcaconnectorscepConnector <a name="PcaconnectorscepConnector" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector awscc_pcaconnectorscep_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectorscepconnector"

pcaconnectorscepconnector.NewPcaconnectorscepConnector(scope Construct, id *string, config PcaconnectorscepConnectorConfig) PcaconnectorscepConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig">PcaconnectorscepConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig">PcaconnectorscepConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.putMobileDeviceManagement">PutMobileDeviceManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetMobileDeviceManagement">ResetMobileDeviceManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetVpcEndpointId">ResetVpcEndpointId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMobileDeviceManagement` <a name="PutMobileDeviceManagement" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.putMobileDeviceManagement"></a>

```go
func PutMobileDeviceManagement(value PcaconnectorscepConnectorMobileDeviceManagement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.putMobileDeviceManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a>

---

##### `ResetMobileDeviceManagement` <a name="ResetMobileDeviceManagement" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetMobileDeviceManagement"></a>

```go
func ResetMobileDeviceManagement()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVpcEndpointId` <a name="ResetVpcEndpointId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetVpcEndpointId"></a>

```go
func ResetVpcEndpointId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PcaconnectorscepConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectorscepconnector"

pcaconnectorscepconnector.PcaconnectorscepConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectorscepconnector"

pcaconnectorscepconnector.PcaconnectorscepConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectorscepconnector"

pcaconnectorscepconnector.PcaconnectorscepConnector_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectorscepconnector"

pcaconnectorscepconnector.PcaconnectorscepConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PcaconnectorscepConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PcaconnectorscepConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PcaconnectorscepConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PcaconnectorscepConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.connectorArn">ConnectorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.mobileDeviceManagement">MobileDeviceManagement</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference">PcaconnectorscepConnectorMobileDeviceManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.openIdConfiguration">OpenIdConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference">PcaconnectorscepConnectorOpenIdConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.certificateAuthorityArnInput">CertificateAuthorityArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.mobileDeviceManagementInput">MobileDeviceManagementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.vpcEndpointIdInput">VpcEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.connectorArn"></a>

```go
func ConnectorArn() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MobileDeviceManagement`<sup>Required</sup> <a name="MobileDeviceManagement" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.mobileDeviceManagement"></a>

```go
func MobileDeviceManagement() PcaconnectorscepConnectorMobileDeviceManagementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference">PcaconnectorscepConnectorMobileDeviceManagementOutputReference</a>

---

##### `OpenIdConfiguration`<sup>Required</sup> <a name="OpenIdConfiguration" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.openIdConfiguration"></a>

```go
func OpenIdConfiguration() PcaconnectorscepConnectorOpenIdConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference">PcaconnectorscepConnectorOpenIdConfigurationOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `CertificateAuthorityArnInput`<sup>Optional</sup> <a name="CertificateAuthorityArnInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.certificateAuthorityArnInput"></a>

```go
func CertificateAuthorityArnInput() *string
```

- *Type:* *string

---

##### `MobileDeviceManagementInput`<sup>Optional</sup> <a name="MobileDeviceManagementInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.mobileDeviceManagementInput"></a>

```go
func MobileDeviceManagementInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcEndpointIdInput`<sup>Optional</sup> <a name="VpcEndpointIdInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.vpcEndpointIdInput"></a>

```go
func VpcEndpointIdInput() *string
```

- *Type:* *string

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.certificateAuthorityArn"></a>

```go
func CertificateAuthorityArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VpcEndpointId`<sup>Required</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.vpcEndpointId"></a>

```go
func VpcEndpointId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PcaconnectorscepConnectorConfig <a name="PcaconnectorscepConnectorConfig" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectorscepconnector"

&pcaconnectorscepconnector.PcaconnectorscepConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CertificateAuthorityArn: *string,
	MobileDeviceManagement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement,
	Tags: *map[string]*string,
	VpcEndpointId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#certificate_authority_arn PcaconnectorscepConnector#certificate_authority_arn}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.mobileDeviceManagement">MobileDeviceManagement</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#mobile_device_management PcaconnectorscepConnector#mobile_device_management}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#tags PcaconnectorscepConnector#tags}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.vpcEndpointId">VpcEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#vpc_endpoint_id PcaconnectorscepConnector#vpc_endpoint_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.certificateAuthorityArn"></a>

```go
CertificateAuthorityArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#certificate_authority_arn PcaconnectorscepConnector#certificate_authority_arn}.

---

##### `MobileDeviceManagement`<sup>Optional</sup> <a name="MobileDeviceManagement" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.mobileDeviceManagement"></a>

```go
MobileDeviceManagement PcaconnectorscepConnectorMobileDeviceManagement
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#mobile_device_management PcaconnectorscepConnector#mobile_device_management}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#tags PcaconnectorscepConnector#tags}.

---

##### `VpcEndpointId`<sup>Optional</sup> <a name="VpcEndpointId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.vpcEndpointId"></a>

```go
VpcEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#vpc_endpoint_id PcaconnectorscepConnector#vpc_endpoint_id}.

---

### PcaconnectorscepConnectorMobileDeviceManagement <a name="PcaconnectorscepConnectorMobileDeviceManagement" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectorscepconnector"

&pcaconnectorscepconnector.PcaconnectorscepConnectorMobileDeviceManagement {
	Intune: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement.property.intune">Intune</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#intune PcaconnectorscepConnector#intune}. |

---

##### `Intune`<sup>Optional</sup> <a name="Intune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement.property.intune"></a>

```go
Intune PcaconnectorscepConnectorMobileDeviceManagementIntune
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#intune PcaconnectorscepConnector#intune}.

---

### PcaconnectorscepConnectorMobileDeviceManagementIntune <a name="PcaconnectorscepConnectorMobileDeviceManagementIntune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectorscepconnector"

&pcaconnectorscepconnector.PcaconnectorscepConnectorMobileDeviceManagementIntune {
	AzureApplicationId: *string,
	Domain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.property.azureApplicationId">AzureApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#azure_application_id PcaconnectorscepConnector#azure_application_id}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.property.domain">Domain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#domain PcaconnectorscepConnector#domain}. |

---

##### `AzureApplicationId`<sup>Optional</sup> <a name="AzureApplicationId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.property.azureApplicationId"></a>

```go
AzureApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#azure_application_id PcaconnectorscepConnector#azure_application_id}.

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/pcaconnectorscep_connector#domain PcaconnectorscepConnector#domain}.

---

### PcaconnectorscepConnectorOpenIdConfiguration <a name="PcaconnectorscepConnectorOpenIdConfiguration" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectorscepconnector"

&pcaconnectorscepconnector.PcaconnectorscepConnectorOpenIdConfiguration {

}
```


## Classes <a name="Classes" id="Classes"></a>

### PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference <a name="PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectorscepconnector"

pcaconnectorscepconnector.NewPcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resetAzureApplicationId">ResetAzureApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureApplicationId` <a name="ResetAzureApplicationId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resetAzureApplicationId"></a>

```go
func ResetAzureApplicationId()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resetDomain"></a>

```go
func ResetDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationIdInput">AzureApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationId">AzureApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AzureApplicationIdInput`<sup>Optional</sup> <a name="AzureApplicationIdInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationIdInput"></a>

```go
func AzureApplicationIdInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `AzureApplicationId`<sup>Required</sup> <a name="AzureApplicationId" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationId"></a>

```go
func AzureApplicationId() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcaconnectorscepConnectorMobileDeviceManagementOutputReference <a name="PcaconnectorscepConnectorMobileDeviceManagementOutputReference" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectorscepconnector"

pcaconnectorscepconnector.NewPcaconnectorscepConnectorMobileDeviceManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PcaconnectorscepConnectorMobileDeviceManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.putIntune">PutIntune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resetIntune">ResetIntune</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIntune` <a name="PutIntune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.putIntune"></a>

```go
func PutIntune(value PcaconnectorscepConnectorMobileDeviceManagementIntune)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.putIntune.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a>

---

##### `ResetIntune` <a name="ResetIntune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resetIntune"></a>

```go
func ResetIntune()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intune">Intune</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference">PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intuneInput">IntuneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Intune`<sup>Required</sup> <a name="Intune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intune"></a>

```go
func Intune() PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference">PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference</a>

---

##### `IntuneInput`<sup>Optional</sup> <a name="IntuneInput" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intuneInput"></a>

```go
func IntuneInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PcaconnectorscepConnectorOpenIdConfigurationOutputReference <a name="PcaconnectorscepConnectorOpenIdConfigurationOutputReference" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectorscepconnector"

pcaconnectorscepconnector.NewPcaconnectorscepConnectorOpenIdConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PcaconnectorscepConnectorOpenIdConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration">PcaconnectorscepConnectorOpenIdConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() PcaconnectorscepConnectorOpenIdConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration">PcaconnectorscepConnectorOpenIdConfiguration</a>

---



