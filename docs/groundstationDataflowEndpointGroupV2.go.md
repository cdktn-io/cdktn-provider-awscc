# `groundstationDataflowEndpointGroupV2` Submodule <a name="`groundstationDataflowEndpointGroupV2` Submodule" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationDataflowEndpointGroupV2 <a name="GroundstationDataflowEndpointGroupV2" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2 awscc_groundstation_dataflow_endpoint_group_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2(scope Construct, id *string, config GroundstationDataflowEndpointGroupV2Config) GroundstationDataflowEndpointGroupV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config">GroundstationDataflowEndpointGroupV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config">GroundstationDataflowEndpointGroupV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putEndpoints">PutEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetContactPostPassDurationSeconds">ResetContactPostPassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetContactPrePassDurationSeconds">ResetContactPrePassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetEndpoints">ResetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpoints` <a name="PutEndpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putEndpoints"></a>

```go
func PutEndpoints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putEndpoints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContactPostPassDurationSeconds` <a name="ResetContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetContactPostPassDurationSeconds"></a>

```go
func ResetContactPostPassDurationSeconds()
```

##### `ResetContactPrePassDurationSeconds` <a name="ResetContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetContactPrePassDurationSeconds"></a>

```go
func ResetContactPrePassDurationSeconds()
```

##### `ResetEndpoints` <a name="ResetEndpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetEndpoints"></a>

```go
func ResetEndpoints()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GroundstationDataflowEndpointGroupV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GroundstationDataflowEndpointGroupV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GroundstationDataflowEndpointGroupV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GroundstationDataflowEndpointGroupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationDataflowEndpointGroupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.dataflowEndpointGroupV2Id">DataflowEndpointGroupV2Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpointDetails">EndpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList">GroundstationDataflowEndpointGroupV2EndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList">GroundstationDataflowEndpointGroupV2EndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList">GroundstationDataflowEndpointGroupV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSecondsInput">ContactPostPassDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSecondsInput">ContactPrePassDurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpointsInput">EndpointsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DataflowEndpointGroupV2Id`<sup>Required</sup> <a name="DataflowEndpointGroupV2Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.dataflowEndpointGroupV2Id"></a>

```go
func DataflowEndpointGroupV2Id() *string
```

- *Type:* *string

---

##### `EndpointDetails`<sup>Required</sup> <a name="EndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpointDetails"></a>

```go
func EndpointDetails() GroundstationDataflowEndpointGroupV2EndpointDetailsList
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList">GroundstationDataflowEndpointGroupV2EndpointDetailsList</a>

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpoints"></a>

```go
func Endpoints() GroundstationDataflowEndpointGroupV2EndpointsList
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList">GroundstationDataflowEndpointGroupV2EndpointsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tags"></a>

```go
func Tags() GroundstationDataflowEndpointGroupV2TagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList">GroundstationDataflowEndpointGroupV2TagsList</a>

---

##### `ContactPostPassDurationSecondsInput`<sup>Optional</sup> <a name="ContactPostPassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSecondsInput"></a>

```go
func ContactPostPassDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `ContactPrePassDurationSecondsInput`<sup>Optional</sup> <a name="ContactPrePassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSecondsInput"></a>

```go
func ContactPrePassDurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpointsInput"></a>

```go
func EndpointsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ContactPostPassDurationSeconds`<sup>Required</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSeconds"></a>

```go
func ContactPostPassDurationSeconds() *f64
```

- *Type:* *f64

---

##### `ContactPrePassDurationSeconds`<sup>Required</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSeconds"></a>

```go
func ContactPrePassDurationSeconds() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationDataflowEndpointGroupV2Config <a name="GroundstationDataflowEndpointGroupV2Config" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ContactPostPassDurationSeconds: *f64,
	ContactPrePassDurationSeconds: *f64,
	Endpoints: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.contactPostPassDurationSeconds">ContactPostPassDurationSeconds</a></code> | <code>*f64</code> | Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.contactPrePassDurationSeconds">ContactPrePassDurationSeconds</a></code> | <code>*f64</code> | Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.endpoints">Endpoints</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#endpoints GroundstationDataflowEndpointGroupV2#endpoints}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#tags GroundstationDataflowEndpointGroupV2#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContactPostPassDurationSeconds`<sup>Optional</sup> <a name="ContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.contactPostPassDurationSeconds"></a>

```go
ContactPostPassDurationSeconds *f64
```

- *Type:* *f64

Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state.

A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#contact_post_pass_duration_seconds GroundstationDataflowEndpointGroupV2#contact_post_pass_duration_seconds}

---

##### `ContactPrePassDurationSeconds`<sup>Optional</sup> <a name="ContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.contactPrePassDurationSeconds"></a>

```go
ContactPrePassDurationSeconds *f64
```

- *Type:* *f64

Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state.

A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#contact_pre_pass_duration_seconds GroundstationDataflowEndpointGroupV2#contact_pre_pass_duration_seconds}

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.endpoints"></a>

```go
Endpoints interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#endpoints GroundstationDataflowEndpointGroupV2#endpoints}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#tags GroundstationDataflowEndpointGroupV2#tags}.

---

### GroundstationDataflowEndpointGroupV2EndpointDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetails {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort {

}
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress {

}
```


### GroundstationDataflowEndpointGroupV2Endpoints <a name="GroundstationDataflowEndpointGroupV2Endpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2Endpoints {
	DownlinkAwsGroundStationAgentEndpoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint,
	UplinkAwsGroundStationAgentEndpoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.property.downlinkAwsGroundStationAgentEndpoint">DownlinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a></code> | Information about DownlinkAwsGroundStationAgentEndpoint used for create. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.property.uplinkAwsGroundStationAgentEndpoint">UplinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a></code> | Information about UplinkAwsGroundStationAgentEndpoint used for create. |

---

##### `DownlinkAwsGroundStationAgentEndpoint`<sup>Optional</sup> <a name="DownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.property.downlinkAwsGroundStationAgentEndpoint"></a>

```go
DownlinkAwsGroundStationAgentEndpoint GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a>

Information about DownlinkAwsGroundStationAgentEndpoint used for create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#downlink_aws_ground_station_agent_endpoint GroundstationDataflowEndpointGroupV2#downlink_aws_ground_station_agent_endpoint}

---

##### `UplinkAwsGroundStationAgentEndpoint`<sup>Optional</sup> <a name="UplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.property.uplinkAwsGroundStationAgentEndpoint"></a>

```go
UplinkAwsGroundStationAgentEndpoint GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a>

Information about UplinkAwsGroundStationAgentEndpoint used for create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#uplink_aws_ground_station_agent_endpoint GroundstationDataflowEndpointGroupV2#uplink_aws_ground_station_agent_endpoint}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint {
	DataflowDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | Dataflow details for downlink. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}. |

---

##### `DataflowDetails`<sup>Optional</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.property.dataflowDetails"></a>

```go
DataflowDetails GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

Dataflow details for downlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#dataflow_details GroundstationDataflowEndpointGroupV2#dataflow_details}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}.

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails {
	AgentConnectionDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | Connection details for downlink, from ground station to agent, and customer to agent. |

---

##### `AgentConnectionDetails`<sup>Optional</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails.property.agentConnectionDetails"></a>

```go
AgentConnectionDetails GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

Connection details for downlink, from ground station to agent, and customer to agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_connection_details GroundstationDataflowEndpointGroupV2#agent_connection_details}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {
	AgentIpAndPortAddress: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress,
	EgressAddressAndPort: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.egressAddressAndPort">EgressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a></code> | Socket address of an uplink or downlink agent endpoint with an optional mtu. |

---

##### `AgentIpAndPortAddress`<sup>Optional</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.agentIpAndPortAddress"></a>

```go
AgentIpAndPortAddress GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_ip_and_port_address GroundstationDataflowEndpointGroupV2#agent_ip_and_port_address}

---

##### `EgressAddressAndPort`<sup>Optional</sup> <a name="EgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.egressAddressAndPort"></a>

```go
EgressAddressAndPort GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

Socket address of an uplink or downlink agent endpoint with an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#egress_address_and_port GroundstationDataflowEndpointGroupV2#egress_address_and_port}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {
	Mtu: *f64,
	SocketAddress: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.mtu">Mtu</a></code> | <code>*f64</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | A socket address with a port range. |

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.socketAddress"></a>

```go
SocketAddress GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

A socket address with a port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {
	Name: *string,
	PortRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.name">Name</a></code> | <code>*string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | Port range of a socket address. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.name"></a>

```go
Name *string
```

- *Type:* *string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.portRange"></a>

```go
PortRange GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

Port range of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port_range GroundstationDataflowEndpointGroupV2#port_range}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {
	Maximum: *f64,
	Minimum: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.maximum">Maximum</a></code> | <code>*f64</code> | A maximum value. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.minimum">Minimum</a></code> | <code>*f64</code> | A minimum value. |

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.maximum"></a>

```go
Maximum *f64
```

- *Type:* *f64

A maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#maximum GroundstationDataflowEndpointGroupV2#maximum}

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.minimum"></a>

```go
Minimum *f64
```

- *Type:* *f64

A minimum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#minimum GroundstationDataflowEndpointGroupV2#minimum}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort {
	Mtu: *f64,
	SocketAddress: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.property.mtu">Mtu</a></code> | <code>*f64</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}. |

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.property.socketAddress"></a>

```go
SocketAddress GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}.

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress {
	Name: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.property.name">Name</a></code> | <code>*string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.property.port">Port</a></code> | <code>*f64</code> | Port of a socket address. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.property.name"></a>

```go
Name *string
```

- *Type:* *string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port GroundstationDataflowEndpointGroupV2#port}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint {
	DataflowDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | Dataflow details for uplink. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}. |

---

##### `DataflowDetails`<sup>Optional</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.property.dataflowDetails"></a>

```go
DataflowDetails GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

Dataflow details for uplink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#dataflow_details GroundstationDataflowEndpointGroupV2#dataflow_details}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}.

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails {
	AgentConnectionDetails: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | Connection details for uplink, from ground station to agent, and customer to agent. |

---

##### `AgentConnectionDetails`<sup>Optional</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails.property.agentConnectionDetails"></a>

```go
AgentConnectionDetails GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

Connection details for uplink, from ground station to agent, and customer to agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_connection_details GroundstationDataflowEndpointGroupV2#agent_connection_details}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails {
	AgentIpAndPortAddress: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress,
	IngressAddressAndPort: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.ingressAddressAndPort">IngressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a></code> | Socket address of an uplink or downlink agent endpoint with an optional mtu. |

---

##### `AgentIpAndPortAddress`<sup>Optional</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.agentIpAndPortAddress"></a>

```go
AgentIpAndPortAddress GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_ip_and_port_address GroundstationDataflowEndpointGroupV2#agent_ip_and_port_address}

---

##### `IngressAddressAndPort`<sup>Optional</sup> <a name="IngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.ingressAddressAndPort"></a>

```go
IngressAddressAndPort GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

Socket address of an uplink or downlink agent endpoint with an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#ingress_address_and_port GroundstationDataflowEndpointGroupV2#ingress_address_and_port}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress {
	Mtu: *f64,
	SocketAddress: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.mtu">Mtu</a></code> | <code>*f64</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | A socket address with a port range. |

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.socketAddress"></a>

```go
SocketAddress GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

A socket address with a port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress {
	Name: *string,
	PortRange: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.name">Name</a></code> | <code>*string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | Port range of a socket address. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.name"></a>

```go
Name *string
```

- *Type:* *string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.portRange"></a>

```go
PortRange GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

Port range of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port_range GroundstationDataflowEndpointGroupV2#port_range}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange {
	Maximum: *f64,
	Minimum: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.maximum">Maximum</a></code> | <code>*f64</code> | A maximum value. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.minimum">Minimum</a></code> | <code>*f64</code> | A minimum value. |

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.maximum"></a>

```go
Maximum *f64
```

- *Type:* *f64

A maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#maximum GroundstationDataflowEndpointGroupV2#maximum}

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.minimum"></a>

```go
Minimum *f64
```

- *Type:* *f64

A minimum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#minimum GroundstationDataflowEndpointGroupV2#minimum}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort {
	Mtu: *f64,
	SocketAddress: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.property.mtu">Mtu</a></code> | <code>*f64</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}. |

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.property.mtu"></a>

```go
Mtu *f64
```

- *Type:* *f64

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}

---

##### `SocketAddress`<sup>Optional</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.property.socketAddress"></a>

```go
SocketAddress GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}.

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress {
	Name: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.property.name">Name</a></code> | <code>*string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.property.port">Port</a></code> | <code>*f64</code> | Port of a socket address. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.property.name"></a>

```go
Name *string
```

- *Type:* *string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Port of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port GroundstationDataflowEndpointGroupV2#port}

---

### GroundstationDataflowEndpointGroupV2Tags <a name="GroundstationDataflowEndpointGroupV2Tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

&groundstationdataflowendpointgroupv2.GroundstationDataflowEndpointGroupV2Tags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#key GroundstationDataflowEndpointGroupV2#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#value GroundstationDataflowEndpointGroupV2#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#key GroundstationDataflowEndpointGroupV2#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_dataflow_endpoint_group_v2#value GroundstationDataflowEndpointGroupV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```go
func SocketAddress() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```go
func PortRange() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```go
func Maximum() *f64
```

- *Type:* *f64

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress"></a>

```go
func SocketAddress() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort">EgressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentIpAndPortAddress`<sup>Required</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```go
func AgentIpAndPortAddress() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `EgressAddressAndPort`<sup>Required</sup> <a name="EgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort"></a>

```go
func EgressAddressAndPort() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentConnectionDetails`<sup>Required</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```go
func AgentConnectionDetails() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.auditResults">AuditResults</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus"></a>

```go
func AgentStatus() *string
```

- *Type:* *string

---

##### `AuditResults`<sup>Required</sup> <a name="AuditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.auditResults"></a>

```go
func AuditResults() *string
```

- *Type:* *string

---

##### `DataflowDetails`<sup>Required</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```go
func DataflowDetails() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsList <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GroundstationDataflowEndpointGroupV2EndpointDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.get"></a>

```go
func Get(index *f64) GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.downlinkAwsGroundStationAgentEndpoint">DownlinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.uplinkAwsGroundStationAgentEndpoint">UplinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetails">GroundstationDataflowEndpointGroupV2EndpointDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DownlinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="DownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.downlinkAwsGroundStationAgentEndpoint"></a>

```go
func DownlinkAwsGroundStationAgentEndpoint() GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `UplinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="UplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.uplinkAwsGroundStationAgentEndpoint"></a>

```go
func UplinkAwsGroundStationAgentEndpoint() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetails">GroundstationDataflowEndpointGroupV2EndpointDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```go
func SocketAddress() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```go
func PortRange() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```go
func Maximum() *f64
```

- *Type:* *f64

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress"></a>

```go
func SocketAddress() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort">IngressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentIpAndPortAddress`<sup>Required</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```go
func AgentIpAndPortAddress() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `IngressAddressAndPort`<sup>Required</sup> <a name="IngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort"></a>

```go
func IngressAddressAndPort() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentConnectionDetails`<sup>Required</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```go
func AgentConnectionDetails() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus">AgentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.auditResults">AuditResults</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentStatus`<sup>Required</sup> <a name="AgentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus"></a>

```go
func AgentStatus() *string
```

- *Type:* *string

---

##### `AuditResults`<sup>Required</sup> <a name="AuditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.auditResults"></a>

```go
func AuditResults() *string
```

- *Type:* *string

---

##### `DataflowDetails`<sup>Required</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```go
func DataflowDetails() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress"></a>

```go
func PutSocketAddress(value GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetSocketAddress"></a>

```go
func ResetSocketAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```go
func SocketAddress() GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddressInput"></a>

```go
func SocketAddressInput() interface{}
```

- *Type:* interface{}

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRange` <a name="PutPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange"></a>

```go
func PutPortRange(value GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetPortRange"></a>

```go
func ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```go
func PortRange() GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRangeInput"></a>

```go
func PortRangeInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMaximum"></a>

```go
func ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMinimum"></a>

```go
func ResetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximumInput">MaximumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimumInput">MinimumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximumInput"></a>

```go
func MaximumInput() *f64
```

- *Type:* *f64

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimumInput"></a>

```go
func MinimumInput() *f64
```

- *Type:* *f64

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```go
func Maximum() *f64
```

- *Type:* *f64

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.putSocketAddress"></a>

```go
func PutSocketAddress(value GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

---

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resetSocketAddress"></a>

```go
func ResetSocketAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress"></a>

```go
func SocketAddress() GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a>

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddressInput"></a>

```go
func SocketAddressInput() interface{}
```

- *Type:* interface{}

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress">PutAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putEgressAddressAndPort">PutEgressAddressAndPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetAgentIpAndPortAddress">ResetAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetEgressAddressAndPort">ResetEgressAddressAndPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentIpAndPortAddress` <a name="PutAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress"></a>

```go
func PutAgentIpAndPortAddress(value GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---

##### `PutEgressAddressAndPort` <a name="PutEgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putEgressAddressAndPort"></a>

```go
func PutEgressAddressAndPort(value GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putEgressAddressAndPort.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

---

##### `ResetAgentIpAndPortAddress` <a name="ResetAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetAgentIpAndPortAddress"></a>

```go
func ResetAgentIpAndPortAddress()
```

##### `ResetEgressAddressAndPort` <a name="ResetEgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetEgressAddressAndPort"></a>

```go
func ResetEgressAddressAndPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort">EgressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddressInput">AgentIpAndPortAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPortInput">EgressAddressAndPortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentIpAndPortAddress`<sup>Required</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```go
func AgentIpAndPortAddress() GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `EgressAddressAndPort`<sup>Required</sup> <a name="EgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort"></a>

```go
func EgressAddressAndPort() GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a>

---

##### `AgentIpAndPortAddressInput`<sup>Optional</sup> <a name="AgentIpAndPortAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddressInput"></a>

```go
func AgentIpAndPortAddressInput() interface{}
```

- *Type:* interface{}

---

##### `EgressAddressAndPortInput`<sup>Optional</sup> <a name="EgressAddressAndPortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPortInput"></a>

```go
func EgressAddressAndPortInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails">PutAgentConnectionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resetAgentConnectionDetails">ResetAgentConnectionDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentConnectionDetails` <a name="PutAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails"></a>

```go
func PutAgentConnectionDetails(value GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---

##### `ResetAgentConnectionDetails` <a name="ResetAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resetAgentConnectionDetails"></a>

```go
func ResetAgentConnectionDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetailsInput">AgentConnectionDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentConnectionDetails`<sup>Required</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```go
func AgentConnectionDetails() GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `AgentConnectionDetailsInput`<sup>Optional</sup> <a name="AgentConnectionDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetailsInput"></a>

```go
func AgentConnectionDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails">PutDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resetDataflowDetails">ResetDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataflowDetails` <a name="PutDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails"></a>

```go
func PutDataflowDetails(value GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

---

##### `ResetDataflowDetails` <a name="ResetDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resetDataflowDetails"></a>

```go
func ResetDataflowDetails()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetailsInput">DataflowDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataflowDetails`<sup>Required</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```go
func DataflowDetails() GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `DataflowDetailsInput`<sup>Optional</sup> <a name="DataflowDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetailsInput"></a>

```go
func DataflowDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsList <a name="GroundstationDataflowEndpointGroupV2EndpointsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GroundstationDataflowEndpointGroupV2EndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.get"></a>

```go
func Get(index *f64) GroundstationDataflowEndpointGroupV2EndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GroundstationDataflowEndpointGroupV2EndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putDownlinkAwsGroundStationAgentEndpoint">PutDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putUplinkAwsGroundStationAgentEndpoint">PutUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resetDownlinkAwsGroundStationAgentEndpoint">ResetDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resetUplinkAwsGroundStationAgentEndpoint">ResetUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDownlinkAwsGroundStationAgentEndpoint` <a name="PutDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putDownlinkAwsGroundStationAgentEndpoint"></a>

```go
func PutDownlinkAwsGroundStationAgentEndpoint(value GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putDownlinkAwsGroundStationAgentEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a>

---

##### `PutUplinkAwsGroundStationAgentEndpoint` <a name="PutUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putUplinkAwsGroundStationAgentEndpoint"></a>

```go
func PutUplinkAwsGroundStationAgentEndpoint(value GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putUplinkAwsGroundStationAgentEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a>

---

##### `ResetDownlinkAwsGroundStationAgentEndpoint` <a name="ResetDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resetDownlinkAwsGroundStationAgentEndpoint"></a>

```go
func ResetDownlinkAwsGroundStationAgentEndpoint()
```

##### `ResetUplinkAwsGroundStationAgentEndpoint` <a name="ResetUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resetUplinkAwsGroundStationAgentEndpoint"></a>

```go
func ResetUplinkAwsGroundStationAgentEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpoint">DownlinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpoint">UplinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpointInput">DownlinkAwsGroundStationAgentEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpointInput">UplinkAwsGroundStationAgentEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DownlinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="DownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpoint"></a>

```go
func DownlinkAwsGroundStationAgentEndpoint() GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `UplinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="UplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpoint"></a>

```go
func UplinkAwsGroundStationAgentEndpoint() GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `DownlinkAwsGroundStationAgentEndpointInput`<sup>Optional</sup> <a name="DownlinkAwsGroundStationAgentEndpointInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpointInput"></a>

```go
func DownlinkAwsGroundStationAgentEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `UplinkAwsGroundStationAgentEndpointInput`<sup>Optional</sup> <a name="UplinkAwsGroundStationAgentEndpointInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpointInput"></a>

```go
func UplinkAwsGroundStationAgentEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress"></a>

```go
func PutSocketAddress(value GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetSocketAddress"></a>

```go
func ResetSocketAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```go
func SocketAddress() GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddressInput"></a>

```go
func SocketAddressInput() interface{}
```

- *Type:* interface{}

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRange` <a name="PutPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange"></a>

```go
func PutPortRange(value GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetPortRange"></a>

```go
func ResetPortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```go
func PortRange() GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRangeInput"></a>

```go
func PortRangeInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMaximum"></a>

```go
func ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMinimum"></a>

```go
func ResetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximumInput">MaximumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimumInput">MinimumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximumInput"></a>

```go
func MaximumInput() *f64
```

- *Type:* *f64

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimumInput"></a>

```go
func MinimumInput() *f64
```

- *Type:* *f64

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```go
func Maximum() *f64
```

- *Type:* *f64

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.putSocketAddress">PutSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resetSocketAddress">ResetSocketAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSocketAddress` <a name="PutSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.putSocketAddress"></a>

```go
func PutSocketAddress(value GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

---

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resetMtu"></a>

```go
func ResetMtu()
```

##### `ResetSocketAddress` <a name="ResetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resetSocketAddress"></a>

```go
func ResetSocketAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress">SocketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtuInput">MtuInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddressInput">SocketAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu">Mtu</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SocketAddress`<sup>Required</sup> <a name="SocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress"></a>

```go
func SocketAddress() GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a>

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtuInput"></a>

```go
func MtuInput() *f64
```

- *Type:* *f64

---

##### `SocketAddressInput`<sup>Optional</sup> <a name="SocketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddressInput"></a>

```go
func SocketAddressInput() interface{}
```

- *Type:* interface{}

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu"></a>

```go
func Mtu() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resetPort">ResetPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resetPort"></a>

```go
func ResetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress">PutAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putIngressAddressAndPort">PutIngressAddressAndPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetAgentIpAndPortAddress">ResetAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetIngressAddressAndPort">ResetIngressAddressAndPort</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentIpAndPortAddress` <a name="PutAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress"></a>

```go
func PutAgentIpAndPortAddress(value GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---

##### `PutIngressAddressAndPort` <a name="PutIngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putIngressAddressAndPort"></a>

```go
func PutIngressAddressAndPort(value GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putIngressAddressAndPort.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

---

##### `ResetAgentIpAndPortAddress` <a name="ResetAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetAgentIpAndPortAddress"></a>

```go
func ResetAgentIpAndPortAddress()
```

##### `ResetIngressAddressAndPort` <a name="ResetIngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetIngressAddressAndPort"></a>

```go
func ResetIngressAddressAndPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">AgentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort">IngressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddressInput">AgentIpAndPortAddressInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPortInput">IngressAddressAndPortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentIpAndPortAddress`<sup>Required</sup> <a name="AgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```go
func AgentIpAndPortAddress() GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `IngressAddressAndPort`<sup>Required</sup> <a name="IngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort"></a>

```go
func IngressAddressAndPort() GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a>

---

##### `AgentIpAndPortAddressInput`<sup>Optional</sup> <a name="AgentIpAndPortAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddressInput"></a>

```go
func AgentIpAndPortAddressInput() interface{}
```

- *Type:* interface{}

---

##### `IngressAddressAndPortInput`<sup>Optional</sup> <a name="IngressAddressAndPortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPortInput"></a>

```go
func IngressAddressAndPortInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails">PutAgentConnectionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resetAgentConnectionDetails">ResetAgentConnectionDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentConnectionDetails` <a name="PutAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails"></a>

```go
func PutAgentConnectionDetails(value GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---

##### `ResetAgentConnectionDetails` <a name="ResetAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resetAgentConnectionDetails"></a>

```go
func ResetAgentConnectionDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">AgentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetailsInput">AgentConnectionDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentConnectionDetails`<sup>Required</sup> <a name="AgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```go
func AgentConnectionDetails() GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `AgentConnectionDetailsInput`<sup>Optional</sup> <a name="AgentConnectionDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetailsInput"></a>

```go
func AgentConnectionDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails">PutDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resetDataflowDetails">ResetDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataflowDetails` <a name="PutDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails"></a>

```go
func PutDataflowDetails(value GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

---

##### `ResetDataflowDetails` <a name="ResetDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resetDataflowDetails"></a>

```go
func ResetDataflowDetails()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">DataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetailsInput">DataflowDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataflowDetails`<sup>Required</sup> <a name="DataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```go
func DataflowDetails() GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `DataflowDetailsInput`<sup>Optional</sup> <a name="DataflowDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetailsInput"></a>

```go
func DataflowDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2TagsList <a name="GroundstationDataflowEndpointGroupV2TagsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2TagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GroundstationDataflowEndpointGroupV2TagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.get"></a>

```go
func Get(index *f64) GroundstationDataflowEndpointGroupV2TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GroundstationDataflowEndpointGroupV2TagsOutputReference <a name="GroundstationDataflowEndpointGroupV2TagsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/groundstationdataflowendpointgroupv2"

groundstationdataflowendpointgroupv2.NewGroundstationDataflowEndpointGroupV2TagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GroundstationDataflowEndpointGroupV2TagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



