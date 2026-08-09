# `groundstationDataflowEndpointGroup` Submodule <a name="`groundstationDataflowEndpointGroup` Submodule" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationDataflowEndpointGroup <a name="GroundstationDataflowEndpointGroup" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group awscc_groundstation_dataflow_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroup(scope Construct, id *string, config GroundstationDataflowEndpointGroupConfig) GroundstationDataflowEndpointGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig">GroundstationDataflowEndpointGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig">GroundstationDataflowEndpointGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putEndpointDetails">PutEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetContactPostPassDurationSeconds">ResetContactPostPassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetContactPrePassDurationSeconds">ResetContactPrePassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointDetails` <a name="PutEndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putEndpointDetails"></a>

```go
func PutEndpointDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putEndpointDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContactPostPassDurationSeconds` <a name="ResetContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetContactPostPassDurationSeconds"></a>

```go
func ResetContactPostPassDurationSeconds()
```

##### `ResetContactPrePassDurationSeconds` <a name="ResetContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetContactPrePassDurationSeconds"></a>

```go
func ResetContactPrePassDurationSeconds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GroundstationDataflowEndpointGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GroundstationDataflowEndpointGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GroundstationDataflowEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GroundstationDataflowEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationDataflowEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.dataflowEndpointGroupId">DataflowEndpointGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList">GroundstationDataflowEndpointGroupEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList">GroundstationDataflowEndpointGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPostPassDurationSecondsInput">ContactPostPassDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPrePassDurationSecondsInput">ContactPrePassDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.endpointDetailsInput">EndpointDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataflowEndpointGroupId`<sup>Required</sup> <a name="DataflowEndpointGroupId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.dataflowEndpointGroupId"></a>

```go
func DataflowEndpointGroupId() *string
```

- *Type:* *string

---

##### `EndpointDetails`<sup>Required</sup> <a name="EndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.endpointDetails"></a>

```go
func EndpointDetails() GroundstationDataflowEndpointGroupEndpointDetailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList">GroundstationDataflowEndpointGroupEndpointDetailsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tags"></a>

```go
func Tags() GroundstationDataflowEndpointGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList">GroundstationDataflowEndpointGroupTagsList</a>

---

##### `ContactPostPassDurationSecondsInput`<sup>Optional</sup> <a name="ContactPostPassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPostPassDurationSecondsInput"></a>

```go
func ContactPostPassDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `ContactPrePassDurationSecondsInput`<sup>Optional</sup> <a name="ContactPrePassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPrePassDurationSecondsInput"></a>

```go
func ContactPrePassDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `EndpointDetailsInput`<sup>Optional</sup> <a name="EndpointDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.endpointDetailsInput"></a>

```go
func EndpointDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ContactPostPassDurationSeconds`<sup>Required</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPostPassDurationSeconds"></a>

```go
func ContactPostPassDurationSeconds() *f64
```

- *Type:* *f64

---

##### `ContactPrePassDurationSeconds`<sup>Required</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.contactPrePassDurationSeconds"></a>

```go
func ContactPrePassDurationSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationDataflowEndpointGroupConfig <a name="GroundstationDataflowEndpointGroupConfig" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

&groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EndpointDetails: interface{},
	ContactPostPassDurationSeconds: *f64,
	ContactPrePassDurationSeconds: *f64,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.endpointDetails">EndpointDetails</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint_details GroundstationDataflowEndpointGroup#endpoint_details}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>*f64</code> | Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>*f64</code> | Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#tags GroundstationDataflowEndpointGroup#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointDetails`<sup>Required</sup> <a name="EndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.endpointDetails"></a>

```go
EndpointDetails interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint_details GroundstationDataflowEndpointGroup#endpoint_details}.

---

##### `ContactPostPassDurationSeconds`<sup>Optional</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.contactPostPassDurationSeconds"></a>

```go
ContactPostPassDurationSeconds *f64
```

- *Type:* *f64

Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state.

A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#contact_post_pass_duration_seconds GroundstationDataflowEndpointGroup#contact_post_pass_duration_seconds}

---

##### `ContactPrePassDurationSeconds`<sup>Optional</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.contactPrePassDurationSeconds"></a>

```go
ContactPrePassDurationSeconds *f64
```

- *Type:* *f64

Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state.

A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#contact_pre_pass_duration_seconds GroundstationDataflowEndpointGroup#contact_pre_pass_duration_seconds}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#tags GroundstationDataflowEndpointGroup#tags}.

---

### GroundstationDataflowEndpointGroupEndpointDetails <a name="GroundstationDataflowEndpointGroupEndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

&groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroupEndpointDetails {
	AwsGroundStationAgentEndpoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint,
	Endpoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint,
	SecurityDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.awsGroundStationAgentEndpoint">AwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a></code> | Information about AwsGroundStationAgentEndpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint GroundstationDataflowEndpointGroup#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.securityDetails">SecurityDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#security_details GroundstationDataflowEndpointGroup#security_details}. |

---

##### `AwsGroundStationAgentEndpoint`<sup>Optional</sup> <a name="AwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.awsGroundStationAgentEndpoint"></a>

```go
AwsGroundStationAgentEndpoint GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a>

Information about AwsGroundStationAgentEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#aws_ground_station_agent_endpoint GroundstationDataflowEndpointGroup#aws_ground_station_agent_endpoint}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.endpoint"></a>

```go
Endpoint GroundstationDataflowEndpointGroupEndpointDetailsEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#endpoint GroundstationDataflowEndpointGroup#endpoint}.

---

##### `SecurityDetails`<sup>Optional</sup> <a name="SecurityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetails.property.securityDetails"></a>

```go
SecurityDetails GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#security_details GroundstationDataflowEndpointGroup#security_details}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

&groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint {
	AgentStatus: *string,
	AuditResults: *string,
	EgressAddress: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress,
	IngressAddress: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | The status of AgentEndpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.auditResults">AuditResults</a></code> | <code>*string</code> | The results of the audit. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.egressAddress">EgressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a></code> | Egress address of AgentEndpoint with an optional mtu. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.ingressAddress">IngressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a></code> | Ingress address of AgentEndpoint with a port range and an optional mtu. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}. |

---

##### `AgentStatus`<sup>Optional</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.agentStatus"></a>

```go
AgentStatus *string
```

- *Type:* *string

The status of AgentEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#agent_status GroundstationDataflowEndpointGroup#agent_status}

---

##### `AuditResults`<sup>Optional</sup> <a name="AuditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.auditResults"></a>

```go
AuditResults *string
```

- *Type:* *string

The results of the audit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#audit_results GroundstationDataflowEndpointGroup#audit_results}

---

##### `EgressAddress`<sup>Optional</sup> <a name="EgressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.egressAddress"></a>

```go
EgressAddress GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a>

Egress address of AgentEndpoint with an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#egress_address GroundstationDataflowEndpointGroup#egress_address}

---

##### `IngressAddress`<sup>Optional</sup> <a name="IngressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.ingressAddress"></a>

```go
IngressAddress GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a>

Ingress address of AgentEndpoint with a port range and an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#ingress_address GroundstationDataflowEndpointGroup#ingress_address}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

&groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress {
	Mtu: *f64,
	SocketAddress: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.property.mtu">Mtu</a></code> | <code>*f64</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#socket_address GroundstationDataflowEndpointGroup#socket_address}. |

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress.property.socketAddress"></a>

```go
SocketAddress GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#socket_address GroundstationDataflowEndpointGroup#socket_address}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

&groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress {
	Name: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

&groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress {
	Mtu: *f64,
	SocketAddress: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.property.mtu">Mtu</a></code> | <code>*f64</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a></code> | A socket address with a port range. |

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress.property.socketAddress"></a>

```go
SocketAddress GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a>

A socket address with a port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#socket_address GroundstationDataflowEndpointGroup#socket_address}

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

&groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress {
	Name: *string,
	PortRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.property.name">Name</a></code> | <code>*string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a></code> | Port range of a socket address. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.property.name"></a>

```go
Name *string
```

- *Type:* *string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress.property.portRange"></a>

```go
PortRange GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a>

Port range of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#port_range GroundstationDataflowEndpointGroup#port_range}

---

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

&groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange {
	Maximum: *f64,
	Minimum: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.property.maximum">Maximum</a></code> | <code>*f64</code> | A maximum value. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.property.minimum">Minimum</a></code> | <code>*f64</code> | A minimum value. |

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.property.maximum"></a>

```go
Maximum *f64
```

- *Type:* *f64

A maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#maximum GroundstationDataflowEndpointGroup#maximum}

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange.property.minimum"></a>

```go
Minimum *f64
```

- *Type:* *f64

A minimum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#minimum GroundstationDataflowEndpointGroup#minimum}

---

### GroundstationDataflowEndpointGroupEndpointDetailsEndpoint <a name="GroundstationDataflowEndpointGroupEndpointDetailsEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

&groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint {
	Address: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress,
	Mtu: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.address">Address</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#address GroundstationDataflowEndpointGroup#address}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.mtu">Mtu</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.address"></a>

```go
Address GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#address GroundstationDataflowEndpointGroup#address}.

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#mtu GroundstationDataflowEndpointGroup#mtu}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress <a name="GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

&groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress {
	Name: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#name GroundstationDataflowEndpointGroup#name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#port GroundstationDataflowEndpointGroup#port}.

---

### GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails <a name="GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

&groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails {
	RoleArn: *string,
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#role_arn GroundstationDataflowEndpointGroup#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#security_group_ids GroundstationDataflowEndpointGroup#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#subnet_ids GroundstationDataflowEndpointGroup#subnet_ids}. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#role_arn GroundstationDataflowEndpointGroup#role_arn}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#security_group_ids GroundstationDataflowEndpointGroup#security_group_ids}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#subnet_ids GroundstationDataflowEndpointGroup#subnet_ids}.

---

### GroundstationDataflowEndpointGroupTags <a name="GroundstationDataflowEndpointGroupTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

&groundstationdataflowendpointgroup.GroundstationDataflowEndpointGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#key GroundstationDataflowEndpointGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#value GroundstationDataflowEndpointGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#key GroundstationDataflowEndpointGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group#value GroundstationDataflowEndpointGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.putSocketAddress"></a>

```go
func PutSocketAddress(value GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddress</a>

---

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.resetSocketAddress"></a>

```go
func ResetSocketAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddress"></a>

```go
func SocketAddress() GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference</a>

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.socketAddressInput"></a>

```go
func SocketAddressInput() interface{}
```

- *Type:* interface{}

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.putSocketAddress"></a>

```go
func PutSocketAddress(value GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddress</a>

---

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.resetSocketAddress"></a>

```go
func ResetSocketAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddress"></a>

```go
func SocketAddress() GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference</a>

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.socketAddressInput"></a>

```go
func SocketAddressInput() interface{}
```

- *Type:* interface{}

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRange` <a name="PutPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.putPortRange"></a>

```go
func PutPortRange(value GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRange</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.resetPortRange"></a>

```go
func ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRange"></a>

```go
func PortRange() GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.portRangeInput"></a>

```go
func PortRangeInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resetMaximum"></a>

```go
func ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.resetMinimum"></a>

```go
func ResetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximumInput">MaximumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimumInput">MinimumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximumInput"></a>

```go
func MaximumInput() *f64
```

- *Type:* *f64

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimumInput"></a>

```go
func MinimumInput() *f64
```

- *Type:* *f64

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```go
func Maximum() *f64
```

- *Type:* *f64

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putEgressAddress">PutEgressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putIngressAddress">PutIngressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetAgentStatus">ResetAgentStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetAuditResults">ResetAuditResults</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetEgressAddress">ResetEgressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetIngressAddress">ResetIngressAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgressAddress` <a name="PutEgressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putEgressAddress"></a>

```go
func PutEgressAddress(value GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putEgressAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddress</a>

---

##### `PutIngressAddress` <a name="PutIngressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putIngressAddress"></a>

```go
func PutIngressAddress(value GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.putIngressAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddress</a>

---

##### `ResetAgentStatus` <a name="ResetAgentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetAgentStatus"></a>

```go
func ResetAgentStatus()
```

##### `ResetAuditResults` <a name="ResetAuditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetAuditResults"></a>

```go
func ResetAuditResults()
```

##### `ResetEgressAddress` <a name="ResetEgressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetEgressAddress"></a>

```go
func ResetEgressAddress()
```

##### `ResetIngressAddress` <a name="ResetIngressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetIngressAddress"></a>

```go
func ResetIngressAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddress">EgressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddress">IngressAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatusInput">AgentStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResultsInput">AuditResultsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddressInput">EgressAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddressInput">IngressAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResults">AuditResults</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressAddress`<sup>Required</sup> <a name="EgressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddress"></a>

```go
func EgressAddress() GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointEgressAddressOutputReference</a>

---

##### `IngressAddress`<sup>Required</sup> <a name="IngressAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddress"></a>

```go
func IngressAddress() GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointIngressAddressOutputReference</a>

---

##### `AgentStatusInput`<sup>Optional</sup> <a name="AgentStatusInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatusInput"></a>

```go
func AgentStatusInput() *string
```

- *Type:* *string

---

##### `AuditResultsInput`<sup>Optional</sup> <a name="AuditResultsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResultsInput"></a>

```go
func AuditResultsInput() *string
```

- *Type:* *string

---

##### `EgressAddressInput`<sup>Optional</sup> <a name="EgressAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.egressAddressInput"></a>

```go
func EgressAddressInput() interface{}
```

- *Type:* interface{}

---

##### `IngressAddressInput`<sup>Optional</sup> <a name="IngressAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.ingressAddressInput"></a>

```go
func IngressAddressInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.agentStatus"></a>

```go
func AgentStatus() *string
```

- *Type:* *string

---

##### `AuditResults`<sup>Required</sup> <a name="AuditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.auditResults"></a>

```go
func AuditResults() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.putAddress">PutAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAddress` <a name="PutAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.putAddress"></a>

```go
func PutAddress(value GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.putAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddress</a>

---

##### `ResetAddress` <a name="ResetAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetAddress"></a>

```go
func ResetAddress()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.address">Address</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.address"></a>

```go
func Address() GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsEndpointAddressOutputReference</a>

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.addressInput"></a>

```go
func AddressInput() interface{}
```

- *Type:* interface{}

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupEndpointDetailsList <a name="GroundstationDataflowEndpointGroupEndpointDetailsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroupEndpointDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GroundstationDataflowEndpointGroupEndpointDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.get"></a>

```go
func Get(index *f64) GroundstationDataflowEndpointGroupEndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupEndpointDetailsOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroupEndpointDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GroundstationDataflowEndpointGroupEndpointDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putAwsGroundStationAgentEndpoint">PutAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putEndpoint">PutEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putSecurityDetails">PutSecurityDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetAwsGroundStationAgentEndpoint">ResetAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetSecurityDetails">ResetSecurityDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsGroundStationAgentEndpoint` <a name="PutAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putAwsGroundStationAgentEndpoint"></a>

```go
func PutAwsGroundStationAgentEndpoint(value GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putAwsGroundStationAgentEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpoint</a>

---

##### `PutEndpoint` <a name="PutEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putEndpoint"></a>

```go
func PutEndpoint(value GroundstationDataflowEndpointGroupEndpointDetailsEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpoint">GroundstationDataflowEndpointGroupEndpointDetailsEndpoint</a>

---

##### `PutSecurityDetails` <a name="PutSecurityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putSecurityDetails"></a>

```go
func PutSecurityDetails(value GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.putSecurityDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetails</a>

---

##### `ResetAwsGroundStationAgentEndpoint` <a name="ResetAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetAwsGroundStationAgentEndpoint"></a>

```go
func ResetAwsGroundStationAgentEndpoint()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetSecurityDetails` <a name="ResetSecurityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.resetSecurityDetails"></a>

```go
func ResetSecurityDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpoint">AwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpoint">Endpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetails">SecurityDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpointInput">AwsGroundStationAgentEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpointInput">EndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetailsInput">SecurityDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="AwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpoint"></a>

```go
func AwsGroundStationAgentEndpoint() GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsAwsGroundStationAgentEndpointOutputReference</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpoint"></a>

```go
func Endpoint() GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsEndpointOutputReference</a>

---

##### `SecurityDetails`<sup>Required</sup> <a name="SecurityDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetails"></a>

```go
func SecurityDetails() GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference">GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference</a>

---

##### `AwsGroundStationAgentEndpointInput`<sup>Optional</sup> <a name="AwsGroundStationAgentEndpointInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.awsGroundStationAgentEndpointInput"></a>

```go
func AwsGroundStationAgentEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.endpointInput"></a>

```go
func EndpointInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityDetailsInput`<sup>Optional</sup> <a name="SecurityDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.securityDetailsInput"></a>

```go
func SecurityDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference <a name="GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupEndpointDetailsSecurityDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupTagsList <a name="GroundstationDataflowEndpointGroupTagsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GroundstationDataflowEndpointGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.get"></a>

```go
func Get(index *f64) GroundstationDataflowEndpointGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupTagsOutputReference <a name="GroundstationDataflowEndpointGroupTagsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroup"

groundstationdataflowendpointgroup.NewGroundstationDataflowEndpointGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GroundstationDataflowEndpointGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroup.GroundstationDataflowEndpointGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



