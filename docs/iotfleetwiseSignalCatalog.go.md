# `iotfleetwiseSignalCatalog` Submodule <a name="`iotfleetwiseSignalCatalog` Submodule" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotfleetwiseSignalCatalog <a name="IotfleetwiseSignalCatalog" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog awscc_iotfleetwise_signal_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.NewIotfleetwiseSignalCatalog(scope Construct, id *string, config IotfleetwiseSignalCatalogConfig) IotfleetwiseSignalCatalog
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig">IotfleetwiseSignalCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig">IotfleetwiseSignalCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodeCounts">PutNodeCounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodes">PutNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetNodeCounts">ResetNodeCounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetNodes">ResetNodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNodeCounts` <a name="PutNodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodeCounts"></a>

```go
func PutNodeCounts(value IotfleetwiseSignalCatalogNodeCounts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodeCounts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a>

---

##### `PutNodes` <a name="PutNodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodes"></a>

```go
func PutNodes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putNodes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetName"></a>

```go
func ResetName()
```

##### `ResetNodeCounts` <a name="ResetNodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetNodeCounts"></a>

```go
func ResetNodeCounts()
```

##### `ResetNodes` <a name="ResetNodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetNodes"></a>

```go
func ResetNodes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotfleetwiseSignalCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.IotfleetwiseSignalCatalog_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.IotfleetwiseSignalCatalog_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.IotfleetwiseSignalCatalog_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.IotfleetwiseSignalCatalog_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotfleetwiseSignalCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotfleetwiseSignalCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotfleetwiseSignalCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotfleetwiseSignalCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.lastModificationTime">LastModificationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodeCounts">NodeCounts</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference">IotfleetwiseSignalCatalogNodeCountsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodes">Nodes</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList">IotfleetwiseSignalCatalogNodesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList">IotfleetwiseSignalCatalogTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodeCountsInput">NodeCountsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodesInput">NodesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModificationTime`<sup>Required</sup> <a name="LastModificationTime" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.lastModificationTime"></a>

```go
func LastModificationTime() *string
```

- *Type:* *string

---

##### `NodeCounts`<sup>Required</sup> <a name="NodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodeCounts"></a>

```go
func NodeCounts() IotfleetwiseSignalCatalogNodeCountsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference">IotfleetwiseSignalCatalogNodeCountsOutputReference</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodes"></a>

```go
func Nodes() IotfleetwiseSignalCatalogNodesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList">IotfleetwiseSignalCatalogNodesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tags"></a>

```go
func Tags() IotfleetwiseSignalCatalogTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList">IotfleetwiseSignalCatalogTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeCountsInput`<sup>Optional</sup> <a name="NodeCountsInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodeCountsInput"></a>

```go
func NodeCountsInput() interface{}
```

- *Type:* interface{}

---

##### `NodesInput`<sup>Optional</sup> <a name="NodesInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.nodesInput"></a>

```go
func NodesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalog.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseSignalCatalogConfig <a name="IotfleetwiseSignalCatalogConfig" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

&iotfleetwisesignalcatalog.IotfleetwiseSignalCatalogConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Name: *string,
	NodeCounts: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts,
	Nodes: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#name IotfleetwiseSignalCatalog#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.nodeCounts">NodeCounts</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#node_counts IotfleetwiseSignalCatalog#node_counts}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.nodes">Nodes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#nodes IotfleetwiseSignalCatalog#nodes}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#tags IotfleetwiseSignalCatalog#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#name IotfleetwiseSignalCatalog#name}.

---

##### `NodeCounts`<sup>Optional</sup> <a name="NodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.nodeCounts"></a>

```go
NodeCounts IotfleetwiseSignalCatalogNodeCounts
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts">IotfleetwiseSignalCatalogNodeCounts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#node_counts IotfleetwiseSignalCatalog#node_counts}.

---

##### `Nodes`<sup>Optional</sup> <a name="Nodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.nodes"></a>

```go
Nodes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#nodes IotfleetwiseSignalCatalog#nodes}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#tags IotfleetwiseSignalCatalog#tags}.

---

### IotfleetwiseSignalCatalogNodeCounts <a name="IotfleetwiseSignalCatalogNodeCounts" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCounts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

&iotfleetwisesignalcatalog.IotfleetwiseSignalCatalogNodeCounts {

}
```


### IotfleetwiseSignalCatalogNodes <a name="IotfleetwiseSignalCatalogNodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

&iotfleetwisesignalcatalog.IotfleetwiseSignalCatalogNodes {
	Actuator: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator,
	Attribute: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute,
	Branch: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch,
	Sensor: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.actuator">Actuator</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#actuator IotfleetwiseSignalCatalog#actuator}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.attribute">Attribute</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#attribute IotfleetwiseSignalCatalog#attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.branch">Branch</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#branch IotfleetwiseSignalCatalog#branch}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.sensor">Sensor</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#sensor IotfleetwiseSignalCatalog#sensor}. |

---

##### `Actuator`<sup>Optional</sup> <a name="Actuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.actuator"></a>

```go
Actuator IotfleetwiseSignalCatalogNodesActuator
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#actuator IotfleetwiseSignalCatalog#actuator}.

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.attribute"></a>

```go
Attribute IotfleetwiseSignalCatalogNodesAttribute
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#attribute IotfleetwiseSignalCatalog#attribute}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.branch"></a>

```go
Branch IotfleetwiseSignalCatalogNodesBranch
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#branch IotfleetwiseSignalCatalog#branch}.

---

##### `Sensor`<sup>Optional</sup> <a name="Sensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodes.property.sensor"></a>

```go
Sensor IotfleetwiseSignalCatalogNodesSensor
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#sensor IotfleetwiseSignalCatalog#sensor}.

---

### IotfleetwiseSignalCatalogNodesActuator <a name="IotfleetwiseSignalCatalogNodesActuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

&iotfleetwisesignalcatalog.IotfleetwiseSignalCatalogNodesActuator {
	AllowedValues: *[]*string,
	AssignedValue: *string,
	DataType: *string,
	Description: *string,
	FullyQualifiedName: *string,
	Max: *f64,
	Min: *f64,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.allowedValues">AllowedValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.assignedValue">AssignedValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.unit">Unit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}. |

---

##### `AllowedValues`<sup>Optional</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.allowedValues"></a>

```go
AllowedValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}.

---

##### `AssignedValue`<sup>Optional</sup> <a name="AssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.assignedValue"></a>

```go
AssignedValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}.

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `FullyQualifiedName`<sup>Optional</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.fullyQualifiedName"></a>

```go
FullyQualifiedName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}.

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}.

---

### IotfleetwiseSignalCatalogNodesAttribute <a name="IotfleetwiseSignalCatalogNodesAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

&iotfleetwisesignalcatalog.IotfleetwiseSignalCatalogNodesAttribute {
	AllowedValues: *[]*string,
	AssignedValue: *string,
	DataType: *string,
	DefaultValue: *string,
	Description: *string,
	FullyQualifiedName: *string,
	Max: *f64,
	Min: *f64,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.allowedValues">AllowedValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.assignedValue">AssignedValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#default_value IotfleetwiseSignalCatalog#default_value}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.unit">Unit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}. |

---

##### `AllowedValues`<sup>Optional</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.allowedValues"></a>

```go
AllowedValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}.

---

##### `AssignedValue`<sup>Optional</sup> <a name="AssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.assignedValue"></a>

```go
AssignedValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#assigned_value IotfleetwiseSignalCatalog#assigned_value}.

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}.

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#default_value IotfleetwiseSignalCatalog#default_value}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `FullyQualifiedName`<sup>Optional</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.fullyQualifiedName"></a>

```go
FullyQualifiedName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}.

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}.

---

### IotfleetwiseSignalCatalogNodesBranch <a name="IotfleetwiseSignalCatalogNodesBranch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

&iotfleetwisesignalcatalog.IotfleetwiseSignalCatalogNodesBranch {
	Description: *string,
	FullyQualifiedName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `FullyQualifiedName`<sup>Optional</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch.property.fullyQualifiedName"></a>

```go
FullyQualifiedName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}.

---

### IotfleetwiseSignalCatalogNodesSensor <a name="IotfleetwiseSignalCatalogNodesSensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

&iotfleetwisesignalcatalog.IotfleetwiseSignalCatalogNodesSensor {
	AllowedValues: *[]*string,
	DataType: *string,
	Description: *string,
	FullyQualifiedName: *string,
	Max: *f64,
	Min: *f64,
	Unit: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.allowedValues">AllowedValues</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.dataType">DataType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.unit">Unit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}. |

---

##### `AllowedValues`<sup>Optional</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.allowedValues"></a>

```go
AllowedValues *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#allowed_values IotfleetwiseSignalCatalog#allowed_values}.

---

##### `DataType`<sup>Optional</sup> <a name="DataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.dataType"></a>

```go
DataType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#data_type IotfleetwiseSignalCatalog#data_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#description IotfleetwiseSignalCatalog#description}.

---

##### `FullyQualifiedName`<sup>Optional</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.fullyQualifiedName"></a>

```go
FullyQualifiedName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#fully_qualified_name IotfleetwiseSignalCatalog#fully_qualified_name}.

---

##### `Max`<sup>Optional</sup> <a name="Max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#max IotfleetwiseSignalCatalog#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#min IotfleetwiseSignalCatalog#min}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor.property.unit"></a>

```go
Unit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#unit IotfleetwiseSignalCatalog#unit}.

---

### IotfleetwiseSignalCatalogTags <a name="IotfleetwiseSignalCatalogTags" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

&iotfleetwisesignalcatalog.IotfleetwiseSignalCatalogTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#key IotfleetwiseSignalCatalog#key}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#value IotfleetwiseSignalCatalog#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#key IotfleetwiseSignalCatalog#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotfleetwise_signal_catalog#value IotfleetwiseSignalCatalog#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseSignalCatalogNodeCountsOutputReference <a name="IotfleetwiseSignalCatalogNodeCountsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.NewIotfleetwiseSignalCatalogNodeCountsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseSignalCatalogNodeCountsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalActuators">TotalActuators</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalAttributes">TotalAttributes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalBranches">TotalBranches</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalNodes">TotalNodes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalSensors">TotalSensors</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotalActuators`<sup>Required</sup> <a name="TotalActuators" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalActuators"></a>

```go
func TotalActuators() *f64
```

- *Type:* *f64

---

##### `TotalAttributes`<sup>Required</sup> <a name="TotalAttributes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalAttributes"></a>

```go
func TotalAttributes() *f64
```

- *Type:* *f64

---

##### `TotalBranches`<sup>Required</sup> <a name="TotalBranches" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalBranches"></a>

```go
func TotalBranches() *f64
```

- *Type:* *f64

---

##### `TotalNodes`<sup>Required</sup> <a name="TotalNodes" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalNodes"></a>

```go
func TotalNodes() *f64
```

- *Type:* *f64

---

##### `TotalSensors`<sup>Required</sup> <a name="TotalSensors" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.totalSensors"></a>

```go
func TotalSensors() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodeCountsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseSignalCatalogNodesActuatorOutputReference <a name="IotfleetwiseSignalCatalogNodesActuatorOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.NewIotfleetwiseSignalCatalogNodesActuatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseSignalCatalogNodesActuatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetAllowedValues">ResetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetAssignedValue">ResetAssignedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetFullyQualifiedName">ResetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedValues` <a name="ResetAllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetAllowedValues"></a>

```go
func ResetAllowedValues()
```

##### `ResetAssignedValue` <a name="ResetAssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetAssignedValue"></a>

```go
func ResetAssignedValue()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFullyQualifiedName` <a name="ResetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetFullyQualifiedName"></a>

```go
func ResetFullyQualifiedName()
```

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetMin"></a>

```go
func ResetMin()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValueInput">AssignedValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedNameInput">FullyQualifiedNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValues">AllowedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValue">AssignedValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValuesInput"></a>

```go
func AllowedValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssignedValueInput`<sup>Optional</sup> <a name="AssignedValueInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValueInput"></a>

```go
func AssignedValueInput() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FullyQualifiedNameInput`<sup>Optional</sup> <a name="FullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedNameInput"></a>

```go
func FullyQualifiedNameInput() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.allowedValues"></a>

```go
func AllowedValues() *[]*string
```

- *Type:* *[]*string

---

##### `AssignedValue`<sup>Required</sup> <a name="AssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.assignedValue"></a>

```go
func AssignedValue() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseSignalCatalogNodesAttributeOutputReference <a name="IotfleetwiseSignalCatalogNodesAttributeOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.NewIotfleetwiseSignalCatalogNodesAttributeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseSignalCatalogNodesAttributeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetAllowedValues">ResetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetAssignedValue">ResetAssignedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetFullyQualifiedName">ResetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedValues` <a name="ResetAllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetAllowedValues"></a>

```go
func ResetAllowedValues()
```

##### `ResetAssignedValue` <a name="ResetAssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetAssignedValue"></a>

```go
func ResetAssignedValue()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFullyQualifiedName` <a name="ResetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetFullyQualifiedName"></a>

```go
func ResetFullyQualifiedName()
```

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetMin"></a>

```go
func ResetMin()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValueInput">AssignedValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedNameInput">FullyQualifiedNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValues">AllowedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValue">AssignedValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValuesInput"></a>

```go
func AllowedValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssignedValueInput`<sup>Optional</sup> <a name="AssignedValueInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValueInput"></a>

```go
func AssignedValueInput() *string
```

- *Type:* *string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FullyQualifiedNameInput`<sup>Optional</sup> <a name="FullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedNameInput"></a>

```go
func FullyQualifiedNameInput() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.allowedValues"></a>

```go
func AllowedValues() *[]*string
```

- *Type:* *[]*string

---

##### `AssignedValue`<sup>Required</sup> <a name="AssignedValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.assignedValue"></a>

```go
func AssignedValue() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseSignalCatalogNodesBranchOutputReference <a name="IotfleetwiseSignalCatalogNodesBranchOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.NewIotfleetwiseSignalCatalogNodesBranchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseSignalCatalogNodesBranchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resetFullyQualifiedName">ResetFullyQualifiedName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFullyQualifiedName` <a name="ResetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.resetFullyQualifiedName"></a>

```go
func ResetFullyQualifiedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedNameInput">FullyQualifiedNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FullyQualifiedNameInput`<sup>Optional</sup> <a name="FullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedNameInput"></a>

```go
func FullyQualifiedNameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseSignalCatalogNodesList <a name="IotfleetwiseSignalCatalogNodesList" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.NewIotfleetwiseSignalCatalogNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotfleetwiseSignalCatalogNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.get"></a>

```go
func Get(index *f64) IotfleetwiseSignalCatalogNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseSignalCatalogNodesOutputReference <a name="IotfleetwiseSignalCatalogNodesOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.NewIotfleetwiseSignalCatalogNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotfleetwiseSignalCatalogNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putActuator">PutActuator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putAttribute">PutAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putBranch">PutBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putSensor">PutSensor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetActuator">ResetActuator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetSensor">ResetSensor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActuator` <a name="PutActuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putActuator"></a>

```go
func PutActuator(value IotfleetwiseSignalCatalogNodesActuator)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putActuator.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuator">IotfleetwiseSignalCatalogNodesActuator</a>

---

##### `PutAttribute` <a name="PutAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putAttribute"></a>

```go
func PutAttribute(value IotfleetwiseSignalCatalogNodesAttribute)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putAttribute.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttribute">IotfleetwiseSignalCatalogNodesAttribute</a>

---

##### `PutBranch` <a name="PutBranch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putBranch"></a>

```go
func PutBranch(value IotfleetwiseSignalCatalogNodesBranch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putBranch.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranch">IotfleetwiseSignalCatalogNodesBranch</a>

---

##### `PutSensor` <a name="PutSensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putSensor"></a>

```go
func PutSensor(value IotfleetwiseSignalCatalogNodesSensor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.putSensor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensor">IotfleetwiseSignalCatalogNodesSensor</a>

---

##### `ResetActuator` <a name="ResetActuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetActuator"></a>

```go
func ResetActuator()
```

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetAttribute"></a>

```go
func ResetAttribute()
```

##### `ResetBranch` <a name="ResetBranch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetSensor` <a name="ResetSensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.resetSensor"></a>

```go
func ResetSensor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.actuator">Actuator</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference">IotfleetwiseSignalCatalogNodesActuatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.attribute">Attribute</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference">IotfleetwiseSignalCatalogNodesAttributeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.branch">Branch</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference">IotfleetwiseSignalCatalogNodesBranchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.sensor">Sensor</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference">IotfleetwiseSignalCatalogNodesSensorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.actuatorInput">ActuatorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.attributeInput">AttributeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.branchInput">BranchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.sensorInput">SensorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Actuator`<sup>Required</sup> <a name="Actuator" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.actuator"></a>

```go
func Actuator() IotfleetwiseSignalCatalogNodesActuatorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesActuatorOutputReference">IotfleetwiseSignalCatalogNodesActuatorOutputReference</a>

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.attribute"></a>

```go
func Attribute() IotfleetwiseSignalCatalogNodesAttributeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesAttributeOutputReference">IotfleetwiseSignalCatalogNodesAttributeOutputReference</a>

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.branch"></a>

```go
func Branch() IotfleetwiseSignalCatalogNodesBranchOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesBranchOutputReference">IotfleetwiseSignalCatalogNodesBranchOutputReference</a>

---

##### `Sensor`<sup>Required</sup> <a name="Sensor" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.sensor"></a>

```go
func Sensor() IotfleetwiseSignalCatalogNodesSensorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference">IotfleetwiseSignalCatalogNodesSensorOutputReference</a>

---

##### `ActuatorInput`<sup>Optional</sup> <a name="ActuatorInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.actuatorInput"></a>

```go
func ActuatorInput() interface{}
```

- *Type:* interface{}

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.attributeInput"></a>

```go
func AttributeInput() interface{}
```

- *Type:* interface{}

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.branchInput"></a>

```go
func BranchInput() interface{}
```

- *Type:* interface{}

---

##### `SensorInput`<sup>Optional</sup> <a name="SensorInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.sensorInput"></a>

```go
func SensorInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseSignalCatalogNodesSensorOutputReference <a name="IotfleetwiseSignalCatalogNodesSensorOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.NewIotfleetwiseSignalCatalogNodesSensorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotfleetwiseSignalCatalogNodesSensorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetAllowedValues">ResetAllowedValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetDataType">ResetDataType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetFullyQualifiedName">ResetFullyQualifiedName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedValues` <a name="ResetAllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetAllowedValues"></a>

```go
func ResetAllowedValues()
```

##### `ResetDataType` <a name="ResetDataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetDataType"></a>

```go
func ResetDataType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFullyQualifiedName` <a name="ResetFullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetFullyQualifiedName"></a>

```go
func ResetFullyQualifiedName()
```

##### `ResetMax` <a name="ResetMax" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetMin"></a>

```go
func ResetMin()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.resetUnit"></a>

```go
func ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValuesInput">AllowedValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataTypeInput">DataTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedNameInput">FullyQualifiedNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.unitInput">UnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValues">AllowedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedName">FullyQualifiedName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValuesInput`<sup>Optional</sup> <a name="AllowedValuesInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValuesInput"></a>

```go
func AllowedValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataTypeInput`<sup>Optional</sup> <a name="DataTypeInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataTypeInput"></a>

```go
func DataTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FullyQualifiedNameInput`<sup>Optional</sup> <a name="FullyQualifiedNameInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedNameInput"></a>

```go
func FullyQualifiedNameInput() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.unitInput"></a>

```go
func UnitInput() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.allowedValues"></a>

```go
func AllowedValues() *[]*string
```

- *Type:* *[]*string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FullyQualifiedName`<sup>Required</sup> <a name="FullyQualifiedName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.fullyQualifiedName"></a>

```go
func FullyQualifiedName() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogNodesSensorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseSignalCatalogTagsList <a name="IotfleetwiseSignalCatalogTagsList" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.NewIotfleetwiseSignalCatalogTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotfleetwiseSignalCatalogTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.get"></a>

```go
func Get(index *f64) IotfleetwiseSignalCatalogTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseSignalCatalogTagsOutputReference <a name="IotfleetwiseSignalCatalogTagsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisesignalcatalog"

iotfleetwisesignalcatalog.NewIotfleetwiseSignalCatalogTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotfleetwiseSignalCatalogTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseSignalCatalog.IotfleetwiseSignalCatalogTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



