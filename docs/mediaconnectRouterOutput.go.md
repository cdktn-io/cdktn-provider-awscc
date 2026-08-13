# `mediaconnectRouterOutput` Submodule <a name="`mediaconnectRouterOutput` Submodule" id="@cdktn/provider-awscc.mediaconnectRouterOutput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectRouterOutput <a name="MediaconnectRouterOutput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output awscc_mediaconnect_router_output}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutput(scope Construct, id *string, config MediaconnectRouterOutputConfig) MediaconnectRouterOutput
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig">MediaconnectRouterOutputConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig">MediaconnectRouterOutputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putMaintenanceConfiguration">PutMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetMaintenanceConfiguration">ResetMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetRegionName">ResetRegionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putConfiguration"></a>

```go
func PutConfiguration(value MediaconnectRouterOutputConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration">MediaconnectRouterOutputConfiguration</a>

---

##### `PutMaintenanceConfiguration` <a name="PutMaintenanceConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putMaintenanceConfiguration"></a>

```go
func PutMaintenanceConfiguration(value MediaconnectRouterOutputMaintenanceConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putMaintenanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration">MediaconnectRouterOutputMaintenanceConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetMaintenanceConfiguration` <a name="ResetMaintenanceConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetMaintenanceConfiguration"></a>

```go
func ResetMaintenanceConfiguration()
```

##### `ResetRegionName` <a name="ResetRegionName" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetRegionName"></a>

```go
func ResetRegionName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectRouterOutput resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.MediaconnectRouterOutput_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.MediaconnectRouterOutput_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.MediaconnectRouterOutput_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.MediaconnectRouterOutput_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediaconnectRouterOutput resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaconnectRouterOutput to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaconnectRouterOutput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectRouterOutput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference">MediaconnectRouterOutputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maintenanceConfiguration">MaintenanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference">MediaconnectRouterOutputMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maintenanceType">MaintenanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.outputType">OutputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routedState">RoutedState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routerOutputId">RouterOutputId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList">MediaconnectRouterOutputTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.configurationInput">ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maintenanceConfigurationInput">MaintenanceConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maximumBitrateInput">MaximumBitrateInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.regionNameInput">RegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routingScopeInput">RoutingScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maximumBitrate">MaximumBitrate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routingScope">RoutingScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.configuration"></a>

```go
func Configuration() MediaconnectRouterOutputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference">MediaconnectRouterOutputConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `MaintenanceConfiguration`<sup>Required</sup> <a name="MaintenanceConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maintenanceConfiguration"></a>

```go
func MaintenanceConfiguration() MediaconnectRouterOutputMaintenanceConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference">MediaconnectRouterOutputMaintenanceConfigurationOutputReference</a>

---

##### `MaintenanceType`<sup>Required</sup> <a name="MaintenanceType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maintenanceType"></a>

```go
func MaintenanceType() *string
```

- *Type:* *string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.outputType"></a>

```go
func OutputType() *string
```

- *Type:* *string

---

##### `RoutedState`<sup>Required</sup> <a name="RoutedState" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routedState"></a>

```go
func RoutedState() *string
```

- *Type:* *string

---

##### `RouterOutputId`<sup>Required</sup> <a name="RouterOutputId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routerOutputId"></a>

```go
func RouterOutputId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tags"></a>

```go
func Tags() MediaconnectRouterOutputTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList">MediaconnectRouterOutputTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.configurationInput"></a>

```go
func ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MaintenanceConfigurationInput`<sup>Optional</sup> <a name="MaintenanceConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maintenanceConfigurationInput"></a>

```go
func MaintenanceConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumBitrateInput`<sup>Optional</sup> <a name="MaximumBitrateInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maximumBitrateInput"></a>

```go
func MaximumBitrateInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.regionNameInput"></a>

```go
func RegionNameInput() *string
```

- *Type:* *string

---

##### `RoutingScopeInput`<sup>Optional</sup> <a name="RoutingScopeInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routingScopeInput"></a>

```go
func RoutingScopeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `MaximumBitrate`<sup>Required</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.maximumBitrate"></a>

```go
func MaximumBitrate() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `RoutingScope`<sup>Required</sup> <a name="RoutingScope" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.routingScope"></a>

```go
func RoutingScope() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutput.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectRouterOutputConfig <a name="MediaconnectRouterOutputConfig" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration,
	MaximumBitrate: *f64,
	Name: *string,
	RoutingScope: *string,
	Tier: *string,
	AvailabilityZone: *string,
	MaintenanceConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration,
	RegionName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration">MediaconnectRouterOutputConfiguration</a></code> | The configuration settings for a router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.maximumBitrate">MaximumBitrate</a></code> | <code>*f64</code> | The maximum bitrate for the router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.name">Name</a></code> | <code>*string</code> | The name of the router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.routingScope">RoutingScope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#routing_scope MediaconnectRouterOutput#routing_scope}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.tier">Tier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#tier MediaconnectRouterOutput#tier}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | The Availability Zone where you want to create the router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.maintenanceConfiguration">MaintenanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration">MediaconnectRouterOutputMaintenanceConfiguration</a></code> | The configuration settings for maintenance operations, including preferred maintenance windows and schedules. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.regionName">RegionName</a></code> | <code>*string</code> | The Amazon Web Services Region for the router output. Defaults to the current region if not specified. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Key-value pairs that can be used to tag this router output. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.configuration"></a>

```go
Configuration MediaconnectRouterOutputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration">MediaconnectRouterOutputConfiguration</a>

The configuration settings for a router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#configuration MediaconnectRouterOutput#configuration}

---

##### `MaximumBitrate`<sup>Required</sup> <a name="MaximumBitrate" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.maximumBitrate"></a>

```go
MaximumBitrate *f64
```

- *Type:* *f64

The maximum bitrate for the router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#maximum_bitrate MediaconnectRouterOutput#maximum_bitrate}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#name MediaconnectRouterOutput#name}

---

##### `RoutingScope`<sup>Required</sup> <a name="RoutingScope" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.routingScope"></a>

```go
RoutingScope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#routing_scope MediaconnectRouterOutput#routing_scope}.

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#tier MediaconnectRouterOutput#tier}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

The Availability Zone where you want to create the router output.

This must be a valid Availability Zone for the region specified by regionName, or the current region if no regionName is provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#availability_zone MediaconnectRouterOutput#availability_zone}

---

##### `MaintenanceConfiguration`<sup>Optional</sup> <a name="MaintenanceConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.maintenanceConfiguration"></a>

```go
MaintenanceConfiguration MediaconnectRouterOutputMaintenanceConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration">MediaconnectRouterOutputMaintenanceConfiguration</a>

The configuration settings for maintenance operations, including preferred maintenance windows and schedules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#maintenance_configuration MediaconnectRouterOutput#maintenance_configuration}

---

##### `RegionName`<sup>Optional</sup> <a name="RegionName" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.regionName"></a>

```go
RegionName *string
```

- *Type:* *string

The Amazon Web Services Region for the router output. Defaults to the current region if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#region_name MediaconnectRouterOutput#region_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Key-value pairs that can be used to tag this router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#tags MediaconnectRouterOutput#tags}

---

### MediaconnectRouterOutputConfiguration <a name="MediaconnectRouterOutputConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfiguration {
	MediaConnectFlow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow,
	MediaLiveInput: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput,
	Standard: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.property.mediaConnectFlow">MediaConnectFlow</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow">MediaconnectRouterOutputConfigurationMediaConnectFlow</a></code> | Configuration settings for connecting a router output to a MediaConnect flow source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.property.mediaLiveInput">MediaLiveInput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput">MediaconnectRouterOutputConfigurationMediaLiveInput</a></code> | Configuration settings for connecting a router output to a MediaLive input. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.property.standard">Standard</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard">MediaconnectRouterOutputConfigurationStandard</a></code> | The configuration settings for a standard router output, including the protocol, protocol-specific configuration, network interface, and availability zone. |

---

##### `MediaConnectFlow`<sup>Optional</sup> <a name="MediaConnectFlow" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.property.mediaConnectFlow"></a>

```go
MediaConnectFlow MediaconnectRouterOutputConfigurationMediaConnectFlow
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow">MediaconnectRouterOutputConfigurationMediaConnectFlow</a>

Configuration settings for connecting a router output to a MediaConnect flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#media_connect_flow MediaconnectRouterOutput#media_connect_flow}

---

##### `MediaLiveInput`<sup>Optional</sup> <a name="MediaLiveInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.property.mediaLiveInput"></a>

```go
MediaLiveInput MediaconnectRouterOutputConfigurationMediaLiveInput
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput">MediaconnectRouterOutputConfigurationMediaLiveInput</a>

Configuration settings for connecting a router output to a MediaLive input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#media_live_input MediaconnectRouterOutput#media_live_input}

---

##### `Standard`<sup>Optional</sup> <a name="Standard" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfiguration.property.standard"></a>

```go
Standard MediaconnectRouterOutputConfigurationStandard
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard">MediaconnectRouterOutputConfigurationStandard</a>

The configuration settings for a standard router output, including the protocol, protocol-specific configuration, network interface, and availability zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#standard MediaconnectRouterOutput#standard}

---

### MediaconnectRouterOutputConfigurationMediaConnectFlow <a name="MediaconnectRouterOutputConfigurationMediaConnectFlow" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationMediaConnectFlow {
	DestinationTransitEncryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption,
	FlowArn: *string,
	FlowSourceArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.property.destinationTransitEncryption">DestinationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a></code> | The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.property.flowArn">FlowArn</a></code> | <code>*string</code> | The ARN of the flow to connect to this router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.property.flowSourceArn">FlowSourceArn</a></code> | <code>*string</code> | The ARN of the flow source to connect to this router output. |

---

##### `DestinationTransitEncryption`<sup>Optional</sup> <a name="DestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.property.destinationTransitEncryption"></a>

```go
DestinationTransitEncryption MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a>

The configuration that defines how content is encrypted during transit between the MediaConnect router and a MediaConnect flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#destination_transit_encryption MediaconnectRouterOutput#destination_transit_encryption}

---

##### `FlowArn`<sup>Optional</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.property.flowArn"></a>

```go
FlowArn *string
```

- *Type:* *string

The ARN of the flow to connect to this router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#flow_arn MediaconnectRouterOutput#flow_arn}

---

##### `FlowSourceArn`<sup>Optional</sup> <a name="FlowSourceArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow.property.flowSourceArn"></a>

```go
FlowSourceArn *string
```

- *Type:* *string

The ARN of the flow source to connect to this router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#flow_source_arn MediaconnectRouterOutput#flow_source_arn}

---

### MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption {
	EncryptionKeyConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration,
	EncryptionKeyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption.property.encryptionKeyConfiguration">EncryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a></code> | Configuration settings for flow transit encryption keys. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption.property.encryptionKeyType">EncryptionKeyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#encryption_key_type MediaconnectRouterOutput#encryption_key_type}. |

---

##### `EncryptionKeyConfiguration`<sup>Optional</sup> <a name="EncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption.property.encryptionKeyConfiguration"></a>

```go
EncryptionKeyConfiguration MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a>

Configuration settings for flow transit encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#encryption_key_configuration MediaconnectRouterOutput#encryption_key_configuration}

---

##### `EncryptionKeyType`<sup>Optional</sup> <a name="EncryptionKeyType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption.property.encryptionKeyType"></a>

```go
EncryptionKeyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#encryption_key_type MediaconnectRouterOutput#encryption_key_type}.

---

### MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration {
	Automatic: *string,
	SecretsManager: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration.property.automatic">Automatic</a></code> | <code>*string</code> | Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration.property.secretsManager">SecretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN. |

---

##### `Automatic`<sup>Optional</sup> <a name="Automatic" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration.property.automatic"></a>

```go
Automatic *string
```

- *Type:* *string

Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#automatic MediaconnectRouterOutput#automatic}

---

##### `SecretsManager`<sup>Optional</sup> <a name="SecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration.property.secretsManager"></a>

```go
SecretsManager MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#secrets_manager MediaconnectRouterOutput#secrets_manager}

---

### MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager {
	RoleArn: *string,
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.secretArn">SecretArn</a></code> | <code>*string</code> | The ARN of the Secrets Manager secret used for transit encryption. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#role_arn MediaconnectRouterOutput#role_arn}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The ARN of the Secrets Manager secret used for transit encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#secret_arn MediaconnectRouterOutput#secret_arn}

---

### MediaconnectRouterOutputConfigurationMediaLiveInput <a name="MediaconnectRouterOutputConfigurationMediaLiveInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationMediaLiveInput {
	DestinationTransitEncryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption,
	MediaLiveInputArn: *string,
	MediaLivePipelineId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.property.destinationTransitEncryption">DestinationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a></code> | The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.property.mediaLiveInputArn">MediaLiveInputArn</a></code> | <code>*string</code> | The ARN of the MediaLive input to connect to this router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.property.mediaLivePipelineId">MediaLivePipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#media_live_pipeline_id MediaconnectRouterOutput#media_live_pipeline_id}. |

---

##### `DestinationTransitEncryption`<sup>Optional</sup> <a name="DestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.property.destinationTransitEncryption"></a>

```go
DestinationTransitEncryption MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a>

The encryption configuration that defines how content is encrypted during transit between MediaConnect Router and MediaLive.

This configuration determines whether encryption keys are automatically managed by the service or manually managed through Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#destination_transit_encryption MediaconnectRouterOutput#destination_transit_encryption}

---

##### `MediaLiveInputArn`<sup>Optional</sup> <a name="MediaLiveInputArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.property.mediaLiveInputArn"></a>

```go
MediaLiveInputArn *string
```

- *Type:* *string

The ARN of the MediaLive input to connect to this router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#media_live_input_arn MediaconnectRouterOutput#media_live_input_arn}

---

##### `MediaLivePipelineId`<sup>Optional</sup> <a name="MediaLivePipelineId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput.property.mediaLivePipelineId"></a>

```go
MediaLivePipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#media_live_pipeline_id MediaconnectRouterOutput#media_live_pipeline_id}.

---

### MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption <a name="MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption {
	EncryptionKeyConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration,
	EncryptionKeyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption.property.encryptionKeyConfiguration">EncryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a></code> | Configuration settings for the MediaLive transit encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption.property.encryptionKeyType">EncryptionKeyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#encryption_key_type MediaconnectRouterOutput#encryption_key_type}. |

---

##### `EncryptionKeyConfiguration`<sup>Optional</sup> <a name="EncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption.property.encryptionKeyConfiguration"></a>

```go
EncryptionKeyConfiguration MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a>

Configuration settings for the MediaLive transit encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#encryption_key_configuration MediaconnectRouterOutput#encryption_key_configuration}

---

##### `EncryptionKeyType`<sup>Optional</sup> <a name="EncryptionKeyType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption.property.encryptionKeyType"></a>

```go
EncryptionKeyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#encryption_key_type MediaconnectRouterOutput#encryption_key_type}.

---

### MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration <a name="MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration {
	Automatic: *string,
	SecretsManager: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration.property.automatic">Automatic</a></code> | <code>*string</code> | Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration.property.secretsManager">SecretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a></code> | The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN. |

---

##### `Automatic`<sup>Optional</sup> <a name="Automatic" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration.property.automatic"></a>

```go
Automatic *string
```

- *Type:* *string

Configuration settings for automatic encryption key management, where MediaConnect handles key creation and rotation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#automatic MediaconnectRouterOutput#automatic}

---

##### `SecretsManager`<sup>Optional</sup> <a name="SecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration.property.secretsManager"></a>

```go
SecretsManager MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#secrets_manager MediaconnectRouterOutput#secrets_manager}

---

### MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager <a name="MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager {
	RoleArn: *string,
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.secretArn">SecretArn</a></code> | <code>*string</code> | The ARN of the Secrets Manager secret used for transit encryption. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#role_arn MediaconnectRouterOutput#role_arn}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The ARN of the Secrets Manager secret used for transit encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#secret_arn MediaconnectRouterOutput#secret_arn}

---

### MediaconnectRouterOutputConfigurationStandard <a name="MediaconnectRouterOutputConfigurationStandard" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationStandard {
	NetworkInterfaceArn: *string,
	Protocol: *string,
	ProtocolConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.property.networkInterfaceArn">NetworkInterfaceArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the network interface associated with the standard router output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#protocol MediaconnectRouterOutput#protocol}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a></code> | The protocol configuration settings for a router output. |

---

##### `NetworkInterfaceArn`<sup>Optional</sup> <a name="NetworkInterfaceArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.property.networkInterfaceArn"></a>

```go
NetworkInterfaceArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the network interface associated with the standard router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#network_interface_arn MediaconnectRouterOutput#network_interface_arn}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#protocol MediaconnectRouterOutput#protocol}.

---

##### `ProtocolConfiguration`<sup>Optional</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard.property.protocolConfiguration"></a>

```go
ProtocolConfiguration MediaconnectRouterOutputConfigurationStandardProtocolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a>

The protocol configuration settings for a router output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#protocol_configuration MediaconnectRouterOutput#protocol_configuration}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfiguration <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration {
	Rist: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist,
	Rtp: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp,
	SrtCaller: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller,
	SrtListener: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a></code> | The configuration settings for a router output using the RIST (Reliable Internet Stream Transport) protocol, including the destination address and port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a></code> | The configuration settings for a router output using the RTP (Real-Time Transport Protocol) protocol, including the destination address and port, and forward error correction state. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.srtCaller">SrtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a></code> | The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in caller mode, including the destination address and port, minimum latency, stream ID, and encryption key configuration. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.srtListener">SrtListener</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a></code> | The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and encryption key configuration. |

---

##### `Rist`<sup>Optional</sup> <a name="Rist" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.rist"></a>

```go
Rist MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a>

The configuration settings for a router output using the RIST (Reliable Internet Stream Transport) protocol, including the destination address and port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#rist MediaconnectRouterOutput#rist}

---

##### `Rtp`<sup>Optional</sup> <a name="Rtp" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.rtp"></a>

```go
Rtp MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a>

The configuration settings for a router output using the RTP (Real-Time Transport Protocol) protocol, including the destination address and port, and forward error correction state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#rtp MediaconnectRouterOutput#rtp}

---

##### `SrtCaller`<sup>Optional</sup> <a name="SrtCaller" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.srtCaller"></a>

```go
SrtCaller MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a>

The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in caller mode, including the destination address and port, minimum latency, stream ID, and encryption key configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#srt_caller MediaconnectRouterOutput#srt_caller}

---

##### `SrtListener`<sup>Optional</sup> <a name="SrtListener" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration.property.srtListener"></a>

```go
SrtListener MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a>

The configuration settings for a router output using the SRT (Secure Reliable Transport) protocol in listener mode, including the port, minimum latency, and encryption key configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#srt_listener MediaconnectRouterOutput#srt_listener}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist {
	DestinationAddress: *string,
	DestinationPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | The destination IP address for the RIST protocol in the router output configuration. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | The destination port number for the RIST protocol in the router output configuration. |

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist.property.destinationAddress"></a>

```go
DestinationAddress *string
```

- *Type:* *string

The destination IP address for the RIST protocol in the router output configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#destination_address MediaconnectRouterOutput#destination_address}

---

##### `DestinationPort`<sup>Optional</sup> <a name="DestinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist.property.destinationPort"></a>

```go
DestinationPort *f64
```

- *Type:* *f64

The destination port number for the RIST protocol in the router output configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#destination_port MediaconnectRouterOutput#destination_port}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp {
	DestinationAddress: *string,
	DestinationPort: *f64,
	ForwardErrorCorrection: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | The destination IP address for the RTP protocol in the router output configuration. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | The destination port number for the RTP protocol in the router output configuration. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.property.forwardErrorCorrection">ForwardErrorCorrection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#forward_error_correction MediaconnectRouterOutput#forward_error_correction}. |

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.property.destinationAddress"></a>

```go
DestinationAddress *string
```

- *Type:* *string

The destination IP address for the RTP protocol in the router output configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#destination_address MediaconnectRouterOutput#destination_address}

---

##### `DestinationPort`<sup>Optional</sup> <a name="DestinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.property.destinationPort"></a>

```go
DestinationPort *f64
```

- *Type:* *f64

The destination port number for the RTP protocol in the router output configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#destination_port MediaconnectRouterOutput#destination_port}

---

##### `ForwardErrorCorrection`<sup>Optional</sup> <a name="ForwardErrorCorrection" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp.property.forwardErrorCorrection"></a>

```go
ForwardErrorCorrection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#forward_error_correction MediaconnectRouterOutput#forward_error_correction}.

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller {
	DestinationAddress: *string,
	DestinationPort: *f64,
	EncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration,
	MinimumLatencyMilliseconds: *f64,
	StreamId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | The destination IP address for the SRT protocol in caller mode. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | The destination port number for the SRT protocol in caller mode. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a></code> | Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | The minimum latency in milliseconds for the SRT protocol in caller mode. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.streamId">StreamId</a></code> | <code>*string</code> | The stream ID for the SRT protocol in caller mode. |

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.destinationAddress"></a>

```go
DestinationAddress *string
```

- *Type:* *string

The destination IP address for the SRT protocol in caller mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#destination_address MediaconnectRouterOutput#destination_address}

---

##### `DestinationPort`<sup>Optional</sup> <a name="DestinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.destinationPort"></a>

```go
DestinationPort *f64
```

- *Type:* *f64

The destination port number for the SRT protocol in caller mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#destination_port MediaconnectRouterOutput#destination_port}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a>

Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#encryption_configuration MediaconnectRouterOutput#encryption_configuration}

---

##### `MinimumLatencyMilliseconds`<sup>Optional</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.minimumLatencyMilliseconds"></a>

```go
MinimumLatencyMilliseconds *f64
```

- *Type:* *f64

The minimum latency in milliseconds for the SRT protocol in caller mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#minimum_latency_milliseconds MediaconnectRouterOutput#minimum_latency_milliseconds}

---

##### `StreamId`<sup>Optional</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller.property.streamId"></a>

```go
StreamId *string
```

- *Type:* *string

The stream ID for the SRT protocol in caller mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#stream_id MediaconnectRouterOutput#stream_id}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration {
	EncryptionKey: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a></code> | The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN. |

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration.property.encryptionKey"></a>

```go
EncryptionKey MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a>

The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#encryption_key MediaconnectRouterOutput#encryption_key}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey {
	RoleArn: *string,
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey.property.secretArn">SecretArn</a></code> | <code>*string</code> | The ARN of the Secrets Manager secret used for transit encryption. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#role_arn MediaconnectRouterOutput#role_arn}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The ARN of the Secrets Manager secret used for transit encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#secret_arn MediaconnectRouterOutput#secret_arn}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener {
	EncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration,
	MinimumLatencyMilliseconds: *f64,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a></code> | Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | The minimum latency in milliseconds for the SRT protocol in listener mode. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.property.port">Port</a></code> | <code>*f64</code> | The port number for the SRT protocol in listener mode. |

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a>

Contains the configuration settings for encrypting SRT streams, including the encryption key details and encryption parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#encryption_configuration MediaconnectRouterOutput#encryption_configuration}

---

##### `MinimumLatencyMilliseconds`<sup>Optional</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.property.minimumLatencyMilliseconds"></a>

```go
MinimumLatencyMilliseconds *f64
```

- *Type:* *f64

The minimum latency in milliseconds for the SRT protocol in listener mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#minimum_latency_milliseconds MediaconnectRouterOutput#minimum_latency_milliseconds}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number for the SRT protocol in listener mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#port MediaconnectRouterOutput#port}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration {
	EncryptionKey: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a></code> | The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN. |

---

##### `EncryptionKey`<sup>Optional</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration.property.encryptionKey"></a>

```go
EncryptionKey MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a>

The configuration settings for transit encryption using Secrets Manager, including the secret ARN and role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#encryption_key MediaconnectRouterOutput#encryption_key}

---

### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey {
	RoleArn: *string,
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey.property.secretArn">SecretArn</a></code> | <code>*string</code> | The ARN of the Secrets Manager secret used for transit encryption. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the IAM role assumed by MediaConnect to access the Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#role_arn MediaconnectRouterOutput#role_arn}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

The ARN of the Secrets Manager secret used for transit encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#secret_arn MediaconnectRouterOutput#secret_arn}

---

### MediaconnectRouterOutputMaintenanceConfiguration <a name="MediaconnectRouterOutputMaintenanceConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputMaintenanceConfiguration {
	Default: *string,
	PreferredDayTime: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration.property.default">Default</a></code> | <code>*string</code> | Configuration settings for default maintenance scheduling. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration.property.preferredDayTime">PreferredDayTime</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a></code> | Configuration for preferred day and time maintenance settings. |

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration.property.default"></a>

```go
Default *string
```

- *Type:* *string

Configuration settings for default maintenance scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#default MediaconnectRouterOutput#default}

---

##### `PreferredDayTime`<sup>Optional</sup> <a name="PreferredDayTime" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfiguration.property.preferredDayTime"></a>

```go
PreferredDayTime MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a>

Configuration for preferred day and time maintenance settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#preferred_day_time MediaconnectRouterOutput#preferred_day_time}

---

### MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime <a name="MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime {
	Day: *string,
	Time: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime.property.day">Day</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#day MediaconnectRouterOutput#day}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime.property.time">Time</a></code> | <code>*string</code> | The preferred time for maintenance operations. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime.property.day"></a>

```go
Day *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#day MediaconnectRouterOutput#day}.

---

##### `Time`<sup>Optional</sup> <a name="Time" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime.property.time"></a>

```go
Time *string
```

- *Type:* *string

The preferred time for maintenance operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#time MediaconnectRouterOutput#time}

---

### MediaconnectRouterOutputTags <a name="MediaconnectRouterOutputTags" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

&mediaconnectrouteroutput.MediaconnectRouterOutputTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#key MediaconnectRouterOutput#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#value MediaconnectRouterOutput#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#key MediaconnectRouterOutput#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_router_output#value MediaconnectRouterOutput#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager">PutSecretsManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetAutomatic">ResetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetSecretsManager">ResetSecretsManager</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretsManager` <a name="PutSecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager"></a>

```go
func PutSecretsManager(value MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---

##### `ResetAutomatic` <a name="ResetAutomatic" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetAutomatic"></a>

```go
func ResetAutomatic()
```

##### `ResetSecretsManager` <a name="ResetSecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetSecretsManager"></a>

```go
func ResetSecretsManager()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">SecretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automaticInput">AutomaticInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManagerInput">SecretsManagerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">Automatic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretsManager`<sup>Required</sup> <a name="SecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```go
func SecretsManager() MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `AutomaticInput`<sup>Optional</sup> <a name="AutomaticInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automaticInput"></a>

```go
func AutomaticInput() *string
```

- *Type:* *string

---

##### `SecretsManagerInput`<sup>Optional</sup> <a name="SecretsManagerInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManagerInput"></a>

```go
func SecretsManagerInput() interface{}
```

- *Type:* interface{}

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```go
func Automatic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.putEncryptionKeyConfiguration">PutEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resetEncryptionKeyConfiguration">ResetEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resetEncryptionKeyType">ResetEncryptionKeyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionKeyConfiguration` <a name="PutEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.putEncryptionKeyConfiguration"></a>

```go
func PutEncryptionKeyConfiguration(value MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.putEncryptionKeyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfiguration</a>

---

##### `ResetEncryptionKeyConfiguration` <a name="ResetEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resetEncryptionKeyConfiguration"></a>

```go
func ResetEncryptionKeyConfiguration()
```

##### `ResetEncryptionKeyType` <a name="ResetEncryptionKeyType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.resetEncryptionKeyType"></a>

```go
func ResetEncryptionKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration">EncryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyConfigurationInput">EncryptionKeyConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyTypeInput">EncryptionKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyType">EncryptionKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKeyConfiguration`<sup>Required</sup> <a name="EncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```go
func EncryptionKeyConfiguration() MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `EncryptionKeyConfigurationInput`<sup>Optional</sup> <a name="EncryptionKeyConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyConfigurationInput"></a>

```go
func EncryptionKeyConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionKeyTypeInput`<sup>Optional</sup> <a name="EncryptionKeyTypeInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyTypeInput"></a>

```go
func EncryptionKeyTypeInput() *string
```

- *Type:* *string

---

##### `EncryptionKeyType`<sup>Required</sup> <a name="EncryptionKeyType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```go
func EncryptionKeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference <a name="MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.putDestinationTransitEncryption">PutDestinationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resetDestinationTransitEncryption">ResetDestinationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resetFlowArn">ResetFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resetFlowSourceArn">ResetFlowSourceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationTransitEncryption` <a name="PutDestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.putDestinationTransitEncryption"></a>

```go
func PutDestinationTransitEncryption(value MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.putDestinationTransitEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryption</a>

---

##### `ResetDestinationTransitEncryption` <a name="ResetDestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resetDestinationTransitEncryption"></a>

```go
func ResetDestinationTransitEncryption()
```

##### `ResetFlowArn` <a name="ResetFlowArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resetFlowArn"></a>

```go
func ResetFlowArn()
```

##### `ResetFlowSourceArn` <a name="ResetFlowSourceArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.resetFlowSourceArn"></a>

```go
func ResetFlowSourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.destinationTransitEncryption">DestinationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.destinationTransitEncryptionInput">DestinationTransitEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowArnInput">FlowArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowSourceArnInput">FlowSourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowArn">FlowArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowSourceArn">FlowSourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationTransitEncryption`<sup>Required</sup> <a name="DestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.destinationTransitEncryption"></a>

```go
func DestinationTransitEncryption() MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowDestinationTransitEncryptionOutputReference</a>

---

##### `DestinationTransitEncryptionInput`<sup>Optional</sup> <a name="DestinationTransitEncryptionInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.destinationTransitEncryptionInput"></a>

```go
func DestinationTransitEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `FlowArnInput`<sup>Optional</sup> <a name="FlowArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowArnInput"></a>

```go
func FlowArnInput() *string
```

- *Type:* *string

---

##### `FlowSourceArnInput`<sup>Optional</sup> <a name="FlowSourceArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowSourceArnInput"></a>

```go
func FlowSourceArnInput() *string
```

- *Type:* *string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowArn"></a>

```go
func FlowArn() *string
```

- *Type:* *string

---

##### `FlowSourceArn`<sup>Required</sup> <a name="FlowSourceArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.flowSourceArn"></a>

```go
func FlowSourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference <a name="MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager">PutSecretsManager</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetAutomatic">ResetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetSecretsManager">ResetSecretsManager</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretsManager` <a name="PutSecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager"></a>

```go
func PutSecretsManager(value MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.putSecretsManager.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManager</a>

---

##### `ResetAutomatic` <a name="ResetAutomatic" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetAutomatic"></a>

```go
func ResetAutomatic()
```

##### `ResetSecretsManager` <a name="ResetSecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.resetSecretsManager"></a>

```go
func ResetSecretsManager()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager">SecretsManager</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automaticInput">AutomaticInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManagerInput">SecretsManagerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic">Automatic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretsManager`<sup>Required</sup> <a name="SecretsManager" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManager"></a>

```go
func SecretsManager() MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference</a>

---

##### `AutomaticInput`<sup>Optional</sup> <a name="AutomaticInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automaticInput"></a>

```go
func AutomaticInput() *string
```

- *Type:* *string

---

##### `SecretsManagerInput`<sup>Optional</sup> <a name="SecretsManagerInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.secretsManagerInput"></a>

```go
func SecretsManagerInput() interface{}
```

- *Type:* interface{}

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.automatic"></a>

```go
func Automatic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference <a name="MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationSecretsManagerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference <a name="MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.putEncryptionKeyConfiguration">PutEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resetEncryptionKeyConfiguration">ResetEncryptionKeyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resetEncryptionKeyType">ResetEncryptionKeyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionKeyConfiguration` <a name="PutEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.putEncryptionKeyConfiguration"></a>

```go
func PutEncryptionKeyConfiguration(value MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.putEncryptionKeyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfiguration</a>

---

##### `ResetEncryptionKeyConfiguration` <a name="ResetEncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resetEncryptionKeyConfiguration"></a>

```go
func ResetEncryptionKeyConfiguration()
```

##### `ResetEncryptionKeyType` <a name="ResetEncryptionKeyType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.resetEncryptionKeyType"></a>

```go
func ResetEncryptionKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration">EncryptionKeyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyConfigurationInput">EncryptionKeyConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyTypeInput">EncryptionKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyType">EncryptionKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKeyConfiguration`<sup>Required</sup> <a name="EncryptionKeyConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyConfiguration"></a>

```go
func EncryptionKeyConfiguration() MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionEncryptionKeyConfigurationOutputReference</a>

---

##### `EncryptionKeyConfigurationInput`<sup>Optional</sup> <a name="EncryptionKeyConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyConfigurationInput"></a>

```go
func EncryptionKeyConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionKeyTypeInput`<sup>Optional</sup> <a name="EncryptionKeyTypeInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyTypeInput"></a>

```go
func EncryptionKeyTypeInput() *string
```

- *Type:* *string

---

##### `EncryptionKeyType`<sup>Required</sup> <a name="EncryptionKeyType" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.encryptionKeyType"></a>

```go
func EncryptionKeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference <a name="MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationMediaLiveInputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.putDestinationTransitEncryption">PutDestinationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resetDestinationTransitEncryption">ResetDestinationTransitEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resetMediaLiveInputArn">ResetMediaLiveInputArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resetMediaLivePipelineId">ResetMediaLivePipelineId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationTransitEncryption` <a name="PutDestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.putDestinationTransitEncryption"></a>

```go
func PutDestinationTransitEncryption(value MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.putDestinationTransitEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryption</a>

---

##### `ResetDestinationTransitEncryption` <a name="ResetDestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resetDestinationTransitEncryption"></a>

```go
func ResetDestinationTransitEncryption()
```

##### `ResetMediaLiveInputArn` <a name="ResetMediaLiveInputArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resetMediaLiveInputArn"></a>

```go
func ResetMediaLiveInputArn()
```

##### `ResetMediaLivePipelineId` <a name="ResetMediaLivePipelineId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.resetMediaLivePipelineId"></a>

```go
func ResetMediaLivePipelineId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.destinationTransitEncryption">DestinationTransitEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.destinationTransitEncryptionInput">DestinationTransitEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLiveInputArnInput">MediaLiveInputArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLivePipelineIdInput">MediaLivePipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLiveInputArn">MediaLiveInputArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLivePipelineId">MediaLivePipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationTransitEncryption`<sup>Required</sup> <a name="DestinationTransitEncryption" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.destinationTransitEncryption"></a>

```go
func DestinationTransitEncryption() MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputDestinationTransitEncryptionOutputReference</a>

---

##### `DestinationTransitEncryptionInput`<sup>Optional</sup> <a name="DestinationTransitEncryptionInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.destinationTransitEncryptionInput"></a>

```go
func DestinationTransitEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `MediaLiveInputArnInput`<sup>Optional</sup> <a name="MediaLiveInputArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLiveInputArnInput"></a>

```go
func MediaLiveInputArnInput() *string
```

- *Type:* *string

---

##### `MediaLivePipelineIdInput`<sup>Optional</sup> <a name="MediaLivePipelineIdInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLivePipelineIdInput"></a>

```go
func MediaLivePipelineIdInput() *string
```

- *Type:* *string

---

##### `MediaLiveInputArn`<sup>Required</sup> <a name="MediaLiveInputArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLiveInputArn"></a>

```go
func MediaLiveInputArn() *string
```

- *Type:* *string

---

##### `MediaLivePipelineId`<sup>Required</sup> <a name="MediaLivePipelineId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.mediaLivePipelineId"></a>

```go
func MediaLivePipelineId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationOutputReference <a name="MediaconnectRouterOutputConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putMediaConnectFlow">PutMediaConnectFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putMediaLiveInput">PutMediaLiveInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putStandard">PutStandard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resetMediaConnectFlow">ResetMediaConnectFlow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resetMediaLiveInput">ResetMediaLiveInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resetStandard">ResetStandard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMediaConnectFlow` <a name="PutMediaConnectFlow" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putMediaConnectFlow"></a>

```go
func PutMediaConnectFlow(value MediaconnectRouterOutputConfigurationMediaConnectFlow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putMediaConnectFlow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlow">MediaconnectRouterOutputConfigurationMediaConnectFlow</a>

---

##### `PutMediaLiveInput` <a name="PutMediaLiveInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putMediaLiveInput"></a>

```go
func PutMediaLiveInput(value MediaconnectRouterOutputConfigurationMediaLiveInput)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putMediaLiveInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInput">MediaconnectRouterOutputConfigurationMediaLiveInput</a>

---

##### `PutStandard` <a name="PutStandard" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putStandard"></a>

```go
func PutStandard(value MediaconnectRouterOutputConfigurationStandard)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.putStandard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandard">MediaconnectRouterOutputConfigurationStandard</a>

---

##### `ResetMediaConnectFlow` <a name="ResetMediaConnectFlow" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resetMediaConnectFlow"></a>

```go
func ResetMediaConnectFlow()
```

##### `ResetMediaLiveInput` <a name="ResetMediaLiveInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resetMediaLiveInput"></a>

```go
func ResetMediaLiveInput()
```

##### `ResetStandard` <a name="ResetStandard" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.resetStandard"></a>

```go
func ResetStandard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaConnectFlow">MediaConnectFlow</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaLiveInput">MediaLiveInput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.standard">Standard</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference">MediaconnectRouterOutputConfigurationStandardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaConnectFlowInput">MediaConnectFlowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaLiveInputInput">MediaLiveInputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.standardInput">StandardInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MediaConnectFlow`<sup>Required</sup> <a name="MediaConnectFlow" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaConnectFlow"></a>

```go
func MediaConnectFlow() MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference">MediaconnectRouterOutputConfigurationMediaConnectFlowOutputReference</a>

---

##### `MediaLiveInput`<sup>Required</sup> <a name="MediaLiveInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaLiveInput"></a>

```go
func MediaLiveInput() MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference">MediaconnectRouterOutputConfigurationMediaLiveInputOutputReference</a>

---

##### `Standard`<sup>Required</sup> <a name="Standard" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.standard"></a>

```go
func Standard() MediaconnectRouterOutputConfigurationStandardOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference">MediaconnectRouterOutputConfigurationStandardOutputReference</a>

---

##### `MediaConnectFlowInput`<sup>Optional</sup> <a name="MediaConnectFlowInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaConnectFlowInput"></a>

```go
func MediaConnectFlowInput() interface{}
```

- *Type:* interface{}

---

##### `MediaLiveInputInput`<sup>Optional</sup> <a name="MediaLiveInputInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.mediaLiveInputInput"></a>

```go
func MediaLiveInputInput() interface{}
```

- *Type:* interface{}

---

##### `StandardInput`<sup>Optional</sup> <a name="StandardInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.standardInput"></a>

```go
func StandardInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationStandardOutputReference <a name="MediaconnectRouterOutputConfigurationStandardOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationStandardOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationStandardOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.putProtocolConfiguration">PutProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resetNetworkInterfaceArn">ResetNetworkInterfaceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resetProtocolConfiguration">ResetProtocolConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProtocolConfiguration` <a name="PutProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.putProtocolConfiguration"></a>

```go
func PutProtocolConfiguration(value MediaconnectRouterOutputConfigurationStandardProtocolConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.putProtocolConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfiguration</a>

---

##### `ResetNetworkInterfaceArn` <a name="ResetNetworkInterfaceArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resetNetworkInterfaceArn"></a>

```go
func ResetNetworkInterfaceArn()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetProtocolConfiguration` <a name="ResetProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.resetProtocolConfiguration"></a>

```go
func ResetProtocolConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.networkInterfaceArnInput">NetworkInterfaceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolConfigurationInput">ProtocolConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.networkInterfaceArn">NetworkInterfaceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProtocolConfiguration`<sup>Required</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolConfiguration"></a>

```go
func ProtocolConfiguration() MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference</a>

---

##### `NetworkInterfaceArnInput`<sup>Optional</sup> <a name="NetworkInterfaceArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.networkInterfaceArnInput"></a>

```go
func NetworkInterfaceArnInput() *string
```

- *Type:* *string

---

##### `ProtocolConfigurationInput`<sup>Optional</sup> <a name="ProtocolConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolConfigurationInput"></a>

```go
func ProtocolConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `NetworkInterfaceArn`<sup>Required</sup> <a name="NetworkInterfaceArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.networkInterfaceArn"></a>

```go
func NetworkInterfaceArn() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putRist">PutRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putRtp">PutRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller">PutSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putSrtListener">PutSrtListener</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetRist">ResetRist</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetRtp">ResetRtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetSrtCaller">ResetSrtCaller</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetSrtListener">ResetSrtListener</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRist` <a name="PutRist" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putRist"></a>

```go
func PutRist(value MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putRist.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRist</a>

---

##### `PutRtp` <a name="PutRtp" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putRtp"></a>

```go
func PutRtp(value MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putRtp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtp</a>

---

##### `PutSrtCaller` <a name="PutSrtCaller" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller"></a>

```go
func PutSrtCaller(value MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putSrtCaller.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCaller</a>

---

##### `PutSrtListener` <a name="PutSrtListener" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putSrtListener"></a>

```go
func PutSrtListener(value MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.putSrtListener.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListener</a>

---

##### `ResetRist` <a name="ResetRist" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetRist"></a>

```go
func ResetRist()
```

##### `ResetRtp` <a name="ResetRtp" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetRtp"></a>

```go
func ResetRtp()
```

##### `ResetSrtCaller` <a name="ResetSrtCaller" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetSrtCaller"></a>

```go
func ResetSrtCaller()
```

##### `ResetSrtListener` <a name="ResetSrtListener" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.resetSrtListener"></a>

```go
func ResetSrtListener()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rist">Rist</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rtp">Rtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller">SrtCaller</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtListener">SrtListener</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.ristInput">RistInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rtpInput">RtpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtCallerInput">SrtCallerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtListenerInput">SrtListenerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rist`<sup>Required</sup> <a name="Rist" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rist"></a>

```go
func Rist() MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference</a>

---

##### `Rtp`<sup>Required</sup> <a name="Rtp" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rtp"></a>

```go
func Rtp() MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference</a>

---

##### `SrtCaller`<sup>Required</sup> <a name="SrtCaller" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtCaller"></a>

```go
func SrtCaller() MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference</a>

---

##### `SrtListener`<sup>Required</sup> <a name="SrtListener" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtListener"></a>

```go
func SrtListener() MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference</a>

---

##### `RistInput`<sup>Optional</sup> <a name="RistInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.ristInput"></a>

```go
func RistInput() interface{}
```

- *Type:* interface{}

---

##### `RtpInput`<sup>Optional</sup> <a name="RtpInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.rtpInput"></a>

```go
func RtpInput() interface{}
```

- *Type:* interface{}

---

##### `SrtCallerInput`<sup>Optional</sup> <a name="SrtCallerInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtCallerInput"></a>

```go
func SrtCallerInput() interface{}
```

- *Type:* interface{}

---

##### `SrtListenerInput`<sup>Optional</sup> <a name="SrtListenerInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.srtListenerInput"></a>

```go
func SrtListenerInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationPort">ResetDestinationPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationAddress"></a>

```go
func ResetDestinationAddress()
```

##### `ResetDestinationPort` <a name="ResetDestinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.resetDestinationPort"></a>

```go
func ResetDestinationPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationPortInput">DestinationPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddressInput"></a>

```go
func DestinationAddressInput() *string
```

- *Type:* *string

---

##### `DestinationPortInput`<sup>Optional</sup> <a name="DestinationPortInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationPortInput"></a>

```go
func DestinationPortInput() *f64
```

- *Type:* *f64

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationAddress"></a>

```go
func DestinationAddress() *string
```

- *Type:* *string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.destinationPort"></a>

```go
func DestinationPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRistOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationPort">ResetDestinationPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resetForwardErrorCorrection">ResetForwardErrorCorrection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationAddress"></a>

```go
func ResetDestinationAddress()
```

##### `ResetDestinationPort` <a name="ResetDestinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resetDestinationPort"></a>

```go
func ResetDestinationPort()
```

##### `ResetForwardErrorCorrection` <a name="ResetForwardErrorCorrection" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.resetForwardErrorCorrection"></a>

```go
func ResetForwardErrorCorrection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationPortInput">DestinationPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionInput">ForwardErrorCorrectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrection">ForwardErrorCorrection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddressInput"></a>

```go
func DestinationAddressInput() *string
```

- *Type:* *string

---

##### `DestinationPortInput`<sup>Optional</sup> <a name="DestinationPortInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationPortInput"></a>

```go
func DestinationPortInput() *f64
```

- *Type:* *f64

---

##### `ForwardErrorCorrectionInput`<sup>Optional</sup> <a name="ForwardErrorCorrectionInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrectionInput"></a>

```go
func ForwardErrorCorrectionInput() *string
```

- *Type:* *string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationAddress"></a>

```go
func DestinationAddress() *string
```

- *Type:* *string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.destinationPort"></a>

```go
func DestinationPort() *f64
```

- *Type:* *f64

---

##### `ForwardErrorCorrection`<sup>Required</sup> <a name="ForwardErrorCorrection" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.forwardErrorCorrection"></a>

```go
func ForwardErrorCorrection() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationRtpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.putEncryptionKey">PutEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionKey` <a name="PutEncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.putEncryptionKey"></a>

```go
func PutEncryptionKey(value MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKey</a>

---

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.resetEncryptionKey"></a>

```go
func ResetEncryptionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetDestinationPort">ResetDestinationPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetMinimumLatencyMilliseconds">ResetMinimumLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetStreamId">ResetStreamId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfiguration</a>

---

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetDestinationAddress"></a>

```go
func ResetDestinationAddress()
```

##### `ResetDestinationPort` <a name="ResetDestinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetDestinationPort"></a>

```go
func ResetDestinationPort()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetMinimumLatencyMilliseconds` <a name="ResetMinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetMinimumLatencyMilliseconds"></a>

```go
func ResetMinimumLatencyMilliseconds()
```

##### `ResetStreamId` <a name="ResetStreamId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.resetStreamId"></a>

```go
func ResetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationPortInput">DestinationPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMillisecondsInput">MinimumLatencyMillisecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamIdInput">StreamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationPort">DestinationPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamId">StreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerEncryptionConfigurationOutputReference</a>

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationAddressInput"></a>

```go
func DestinationAddressInput() *string
```

- *Type:* *string

---

##### `DestinationPortInput`<sup>Optional</sup> <a name="DestinationPortInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationPortInput"></a>

```go
func DestinationPortInput() *f64
```

- *Type:* *f64

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MinimumLatencyMillisecondsInput`<sup>Optional</sup> <a name="MinimumLatencyMillisecondsInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMillisecondsInput"></a>

```go
func MinimumLatencyMillisecondsInput() *f64
```

- *Type:* *f64

---

##### `StreamIdInput`<sup>Optional</sup> <a name="StreamIdInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamIdInput"></a>

```go
func StreamIdInput() *string
```

- *Type:* *string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationAddress"></a>

```go
func DestinationAddress() *string
```

- *Type:* *string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.destinationPort"></a>

```go
func DestinationPort() *f64
```

- *Type:* *f64

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.minimumLatencyMilliseconds"></a>

```go
func MinimumLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.streamId"></a>

```go
func StreamId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtCallerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.putEncryptionKey">PutEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resetEncryptionKey">ResetEncryptionKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionKey` <a name="PutEncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.putEncryptionKey"></a>

```go
func PutEncryptionKey(value MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKey</a>

---

##### `ResetEncryptionKey` <a name="ResetEncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.resetEncryptionKey"></a>

```go
func ResetEncryptionKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.encryptionKeyInput">EncryptionKeyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.encryptionKey"></a>

```go
func EncryptionKey() MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationEncryptionKeyOutputReference</a>

---

##### `EncryptionKeyInput`<sup>Optional</sup> <a name="EncryptionKeyInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.encryptionKeyInput"></a>

```go
func EncryptionKeyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference <a name="MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetMinimumLatencyMilliseconds">ResetMinimumLatencyMilliseconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfiguration</a>

---

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetMinimumLatencyMilliseconds` <a name="ResetMinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetMinimumLatencyMilliseconds"></a>

```go
func ResetMinimumLatencyMilliseconds()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMillisecondsInput">MinimumLatencyMillisecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds">MinimumLatencyMilliseconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference">MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerEncryptionConfigurationOutputReference</a>

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `MinimumLatencyMillisecondsInput`<sup>Optional</sup> <a name="MinimumLatencyMillisecondsInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMillisecondsInput"></a>

```go
func MinimumLatencyMillisecondsInput() *f64
```

- *Type:* *f64

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `MinimumLatencyMilliseconds`<sup>Required</sup> <a name="MinimumLatencyMilliseconds" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.minimumLatencyMilliseconds"></a>

```go
func MinimumLatencyMilliseconds() *f64
```

- *Type:* *f64

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputConfigurationStandardProtocolConfigurationSrtListenerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputMaintenanceConfigurationOutputReference <a name="MediaconnectRouterOutputMaintenanceConfigurationOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputMaintenanceConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputMaintenanceConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.putPreferredDayTime">PutPreferredDayTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resetPreferredDayTime">ResetPreferredDayTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPreferredDayTime` <a name="PutPreferredDayTime" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.putPreferredDayTime"></a>

```go
func PutPreferredDayTime(value MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.putPreferredDayTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTime</a>

---

##### `ResetDefault` <a name="ResetDefault" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resetDefault"></a>

```go
func ResetDefault()
```

##### `ResetPreferredDayTime` <a name="ResetPreferredDayTime" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.resetPreferredDayTime"></a>

```go
func ResetPreferredDayTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.preferredDayTime">PreferredDayTime</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.defaultInput">DefaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.preferredDayTimeInput">PreferredDayTimeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.default">Default</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreferredDayTime`<sup>Required</sup> <a name="PreferredDayTime" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.preferredDayTime"></a>

```go
func PreferredDayTime() MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference">MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference</a>

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.defaultInput"></a>

```go
func DefaultInput() *string
```

- *Type:* *string

---

##### `PreferredDayTimeInput`<sup>Optional</sup> <a name="PreferredDayTimeInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.preferredDayTimeInput"></a>

```go
func PreferredDayTimeInput() interface{}
```

- *Type:* interface{}

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.default"></a>

```go
func Default() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference <a name="MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resetTime">ResetTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resetDay"></a>

```go
func ResetDay()
```

##### `ResetTime` <a name="ResetTime" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.resetTime"></a>

```go
func ResetTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.timeInput">TimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.timeInput"></a>

```go
func TimeInput() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputMaintenanceConfigurationPreferredDayTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputTagsList <a name="MediaconnectRouterOutputTagsList" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MediaconnectRouterOutputTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.get"></a>

```go
func Get(index *f64) MediaconnectRouterOutputTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MediaconnectRouterOutputTagsOutputReference <a name="MediaconnectRouterOutputTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconnectrouteroutput"

mediaconnectrouteroutput.NewMediaconnectRouterOutputTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MediaconnectRouterOutputTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediaconnectRouterOutput.MediaconnectRouterOutputTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



