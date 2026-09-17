# `neptunegraphGraph` Submodule <a name="`neptunegraphGraph` Submodule" id="@cdktn/provider-awscc.neptunegraphGraph"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptunegraphGraph <a name="NeptunegraphGraph" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph awscc_neptunegraph_graph}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

neptunegraphgraph.NewNeptunegraphGraph(scope Construct, id *string, config NeptunegraphGraphConfig) NeptunegraphGraph
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig">NeptunegraphGraphConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig">NeptunegraphGraphConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask">PutImportTask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration">PutVectorSearchConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection">ResetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetGraphName">ResetGraphName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetImportTask">ResetImportTask</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier">ResetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity">ResetPublicConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration">ResetVectorSearchConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImportTask` <a name="PutImportTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask"></a>

```go
func PutImportTask(value NeptunegraphGraphImportTask)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putImportTask.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVectorSearchConfiguration` <a name="PutVectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration"></a>

```go
func PutVectorSearchConfiguration(value NeptunegraphGraphVectorSearchConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.putVectorSearchConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

---

##### `ResetDeletionProtection` <a name="ResetDeletionProtection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetDeletionProtection"></a>

```go
func ResetDeletionProtection()
```

##### `ResetGraphName` <a name="ResetGraphName" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetGraphName"></a>

```go
func ResetGraphName()
```

##### `ResetImportTask` <a name="ResetImportTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetImportTask"></a>

```go
func ResetImportTask()
```

##### `ResetKmsKeyIdentifier` <a name="ResetKmsKeyIdentifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetKmsKeyIdentifier"></a>

```go
func ResetKmsKeyIdentifier()
```

##### `ResetPublicConnectivity` <a name="ResetPublicConnectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetPublicConnectivity"></a>

```go
func ResetPublicConnectivity()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetReplicaCount"></a>

```go
func ResetReplicaCount()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVectorSearchConfiguration` <a name="ResetVectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.resetVectorSearchConfiguration"></a>

```go
func ResetVectorSearchConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NeptunegraphGraph resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

neptunegraphgraph.NeptunegraphGraph_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

neptunegraphgraph.NeptunegraphGraph_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

neptunegraphgraph.NeptunegraphGraph_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

neptunegraphgraph.NeptunegraphGraph_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NeptunegraphGraph resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NeptunegraphGraph to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NeptunegraphGraph that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NeptunegraphGraph to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphArn">GraphArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphId">GraphId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTask">ImportTask</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference">NeptunegraphGraphImportTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList">NeptunegraphGraphTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration">VectorSearchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference">NeptunegraphGraphVectorSearchConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput">DeletionProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput">GraphNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTaskInput">ImportTaskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput">KmsKeyIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput">ProvisionedMemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput">PublicConnectivityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput">ReplicaCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput">VectorSearchConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphName">GraphName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory">ProvisionedMemory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity">PublicConnectivity</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `GraphArn`<sup>Required</sup> <a name="GraphArn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphArn"></a>

```go
func GraphArn() *string
```

- *Type:* *string

---

##### `GraphId`<sup>Required</sup> <a name="GraphId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphId"></a>

```go
func GraphId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportTask`<sup>Required</sup> <a name="ImportTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTask"></a>

```go
func ImportTask() NeptunegraphGraphImportTaskOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference">NeptunegraphGraphImportTaskOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tags"></a>

```go
func Tags() NeptunegraphGraphTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList">NeptunegraphGraphTagsList</a>

---

##### `VectorSearchConfiguration`<sup>Required</sup> <a name="VectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfiguration"></a>

```go
func VectorSearchConfiguration() NeptunegraphGraphVectorSearchConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference">NeptunegraphGraphVectorSearchConfigurationOutputReference</a>

---

##### `DeletionProtectionInput`<sup>Optional</sup> <a name="DeletionProtectionInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtectionInput"></a>

```go
func DeletionProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `GraphNameInput`<sup>Optional</sup> <a name="GraphNameInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphNameInput"></a>

```go
func GraphNameInput() *string
```

- *Type:* *string

---

##### `ImportTaskInput`<sup>Optional</sup> <a name="ImportTaskInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.importTaskInput"></a>

```go
func ImportTaskInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdentifierInput`<sup>Optional</sup> <a name="KmsKeyIdentifierInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifierInput"></a>

```go
func KmsKeyIdentifierInput() *string
```

- *Type:* *string

---

##### `ProvisionedMemoryInput`<sup>Optional</sup> <a name="ProvisionedMemoryInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemoryInput"></a>

```go
func ProvisionedMemoryInput() *f64
```

- *Type:* *f64

---

##### `PublicConnectivityInput`<sup>Optional</sup> <a name="PublicConnectivityInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivityInput"></a>

```go
func PublicConnectivityInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCountInput"></a>

```go
func ReplicaCountInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VectorSearchConfigurationInput`<sup>Optional</sup> <a name="VectorSearchConfigurationInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.vectorSearchConfigurationInput"></a>

```go
func VectorSearchConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.deletionProtection"></a>

```go
func DeletionProtection() interface{}
```

- *Type:* interface{}

---

##### `GraphName`<sup>Required</sup> <a name="GraphName" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.graphName"></a>

```go
func GraphName() *string
```

- *Type:* *string

---

##### `KmsKeyIdentifier`<sup>Required</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.kmsKeyIdentifier"></a>

```go
func KmsKeyIdentifier() *string
```

- *Type:* *string

---

##### `ProvisionedMemory`<sup>Required</sup> <a name="ProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.provisionedMemory"></a>

```go
func ProvisionedMemory() *f64
```

- *Type:* *f64

---

##### `PublicConnectivity`<sup>Required</sup> <a name="PublicConnectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.publicConnectivity"></a>

```go
func PublicConnectivity() interface{}
```

- *Type:* interface{}

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.replicaCount"></a>

```go
func ReplicaCount() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraph.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptunegraphGraphConfig <a name="NeptunegraphGraphConfig" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

&neptunegraphgraph.NeptunegraphGraphConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ProvisionedMemory: *f64,
	DeletionProtection: interface{},
	GraphName: *string,
	ImportTask: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.neptunegraphGraph.NeptunegraphGraphImportTask,
	KmsKeyIdentifier: *string,
	PublicConnectivity: interface{},
	ReplicaCount: *f64,
	Tags: interface{},
	VectorSearchConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory">ProvisionedMemory</a></code> | <code>*f64</code> | Memory for the Graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection">DeletionProtection</a></code> | <code>interface{}</code> | Value that indicates whether the Graph has deletion protection enabled. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName">GraphName</a></code> | <code>*string</code> | Contains a user-supplied name for the Graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.importTask">ImportTask</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a></code> | The details of the import task to use to create the graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | The ARN of the KMS key used to encrypt data in the Neptune Analytics graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity">PublicConnectivity</a></code> | <code>interface{}</code> | Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount">ReplicaCount</a></code> | <code>*f64</code> | Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with this graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration">VectorSearchConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a></code> | Vector Search Configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProvisionedMemory`<sup>Required</sup> <a name="ProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.provisionedMemory"></a>

```go
ProvisionedMemory *f64
```

- *Type:* *f64

Memory for the Graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#provisioned_memory NeptunegraphGraph#provisioned_memory}

---

##### `DeletionProtection`<sup>Optional</sup> <a name="DeletionProtection" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.deletionProtection"></a>

```go
DeletionProtection interface{}
```

- *Type:* interface{}

Value that indicates whether the Graph has deletion protection enabled.

The graph can't be deleted when deletion protection is enabled.

*Default*: If not specified, the default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#deletion_protection NeptunegraphGraph#deletion_protection}

---

##### `GraphName`<sup>Optional</sup> <a name="GraphName" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.graphName"></a>

```go
GraphName *string
```

- *Type:* *string

Contains a user-supplied name for the Graph.

If you don't specify a name, we generate a unique Graph Name using a combination of Stack Name and a UUID comprising of 4 characters.

*Important*: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#graph_name NeptunegraphGraph#graph_name}

---

##### `ImportTask`<sup>Optional</sup> <a name="ImportTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.importTask"></a>

```go
ImportTask NeptunegraphGraphImportTask
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask">NeptunegraphGraphImportTask</a>

The details of the import task to use to create the graph.

When specified, the graph is created using CreateGraphUsingImportTask and data is imported from the supplied source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import_task NeptunegraphGraph#import_task}

---

##### `KmsKeyIdentifier`<sup>Optional</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.kmsKeyIdentifier"></a>

```go
KmsKeyIdentifier *string
```

- *Type:* *string

The ARN of the KMS key used to encrypt data in the Neptune Analytics graph.

If not specified, the graph is encrypted with an AWS managed key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#kms_key_identifier NeptunegraphGraph#kms_key_identifier}

---

##### `PublicConnectivity`<sup>Optional</sup> <a name="PublicConnectivity" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.publicConnectivity"></a>

```go
PublicConnectivity interface{}
```

- *Type:* interface{}

Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication.

When the Graph is publicly reachable, its Domain Name System (DNS) endpoint resolves to the public IP address from the internet.

When the Graph isn't publicly reachable, you need to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private IP address that is reachable from the VPC.

*Default*: If not specified, the default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#public_connectivity NeptunegraphGraph#public_connectivity}

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.replicaCount"></a>

```go
ReplicaCount *f64
```

- *Type:* *f64

Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones.

Replica Count should always be less than or equal to 2.

*Default*: If not specified, the default value is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#replica_count NeptunegraphGraph#replica_count}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with this graph.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#tags NeptunegraphGraph#tags}

---

##### `VectorSearchConfiguration`<sup>Optional</sup> <a name="VectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphConfig.property.vectorSearchConfiguration"></a>

```go
VectorSearchConfiguration NeptunegraphGraphVectorSearchConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration">NeptunegraphGraphVectorSearchConfiguration</a>

Vector Search Configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#vector_search_configuration NeptunegraphGraph#vector_search_configuration}

---

### NeptunegraphGraphImportTask <a name="NeptunegraphGraphImportTask" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

&neptunegraphgraph.NeptunegraphGraphImportTask {
	BlankNodeHandling: *string,
	FailOnError: interface{},
	Format: *string,
	ImportOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions,
	MaxProvisionedMemory: *f64,
	MinProvisionedMemory: *f64,
	ParquetType: *string,
	RoleArn: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.blankNodeHandling">BlankNodeHandling</a></code> | <code>*string</code> | The method to handle blank nodes in the dataset. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.failOnError">FailOnError</a></code> | <code>interface{}</code> | If set to true, the task halts when an import error is encountered. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.format">Format</a></code> | <code>*string</code> | Specifies the format of S3 data to be imported. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.importOptions">ImportOptions</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a></code> | Contains options for controlling the import process. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.maxProvisionedMemory">MaxProvisionedMemory</a></code> | <code>*f64</code> | The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.minProvisionedMemory">MinProvisionedMemory</a></code> | <code>*f64</code> | The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 16. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.parquetType">ParquetType</a></code> | <code>*string</code> | The parquet type of the import task. Required when Format is PARQUET. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that will allow access to the data that is to be imported. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.source">Source</a></code> | <code>*string</code> | A URL identifying to the location of the data to be imported. |

---

##### `BlankNodeHandling`<sup>Optional</sup> <a name="BlankNodeHandling" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.blankNodeHandling"></a>

```go
BlankNodeHandling *string
```

- *Type:* *string

The method to handle blank nodes in the dataset.

Currently, only convertToIri is supported, meaning blank nodes are converted to unique IRIs at load time. Must be provided when format is NTRIPLES

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#blank_node_handling NeptunegraphGraph#blank_node_handling}

---

##### `FailOnError`<sup>Optional</sup> <a name="FailOnError" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.failOnError"></a>

```go
FailOnError interface{}
```

- *Type:* interface{}

If set to true, the task halts when an import error is encountered.

If set to false, the task skips the data that caused the error and continues if possible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#fail_on_error NeptunegraphGraph#fail_on_error}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.format"></a>

```go
Format *string
```

- *Type:* *string

Specifies the format of S3 data to be imported.

Valid values are CSV, which identifies the Gremlin CSV format, OPEN_CYPHER, which identifies the openCypher load format, or NTRIPLES, which identifies the RDF n-triples format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#format NeptunegraphGraph#format}

---

##### `ImportOptions`<sup>Optional</sup> <a name="ImportOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.importOptions"></a>

```go
ImportOptions NeptunegraphGraphImportTaskImportOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

Contains options for controlling the import process.

For example, if the failOnError key is set to false, the import skips the data that caused the error and continues if possible (whereas if set to true, the default, or if omitted, the import operation halts immediately when an error is encountered).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#import_options NeptunegraphGraph#import_options}

---

##### `MaxProvisionedMemory`<sup>Optional</sup> <a name="MaxProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.maxProvisionedMemory"></a>

```go
MaxProvisionedMemory *f64
```

- *Type:* *f64

The maximum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph.

Default: 1024, or the approved upper limit for your account. If both the minimum and maximum values are specified, the final provisioned-memory will be chosen per the actual size of your imported data. If neither value is specified, 128 m-NCUs are used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#max_provisioned_memory NeptunegraphGraph#max_provisioned_memory}

---

##### `MinProvisionedMemory`<sup>Optional</sup> <a name="MinProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.minProvisionedMemory"></a>

```go
MinProvisionedMemory *f64
```

- *Type:* *f64

The minimum provisioned memory-optimized Neptune Capacity Units (m-NCUs) to use for the graph. Default: 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#min_provisioned_memory NeptunegraphGraph#min_provisioned_memory}

---

##### `ParquetType`<sup>Optional</sup> <a name="ParquetType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.parquetType"></a>

```go
ParquetType *string
```

- *Type:* *string

The parquet type of the import task. Required when Format is PARQUET.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#parquet_type NeptunegraphGraph#parquet_type}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the IAM role that will allow access to the data that is to be imported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#role_arn NeptunegraphGraph#role_arn}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTask.property.source"></a>

```go
Source *string
```

- *Type:* *string

A URL identifying to the location of the data to be imported.

This can be an Amazon S3 path, or can point to a Neptune database endpoint or snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#source NeptunegraphGraph#source}

---

### NeptunegraphGraphImportTaskImportOptions <a name="NeptunegraphGraphImportTaskImportOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

&neptunegraphgraph.NeptunegraphGraphImportTaskImportOptions {
	Neptune: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions.property.neptune">Neptune</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a></code> | Options for importing data from a Neptune database. |

---

##### `Neptune`<sup>Optional</sup> <a name="Neptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions.property.neptune"></a>

```go
Neptune NeptunegraphGraphImportTaskImportOptionsNeptune
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

Options for importing data from a Neptune database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#neptune NeptunegraphGraph#neptune}

---

### NeptunegraphGraphImportTaskImportOptionsNeptune <a name="NeptunegraphGraphImportTaskImportOptionsNeptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

&neptunegraphgraph.NeptunegraphGraphImportTaskImportOptionsNeptune {
	PreserveDefaultVertexLabels: interface{},
	PreserveEdgeIds: interface{},
	S3ExportKmsKeyId: *string,
	S3ExportPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveDefaultVertexLabels">PreserveDefaultVertexLabels</a></code> | <code>interface{}</code> | Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly provided. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveEdgeIds">PreserveEdgeIds</a></code> | <code>interface{}</code> | Neptune Analytics currently does not support user defined edge ids. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportKmsKeyId">S3ExportKmsKeyId</a></code> | <code>*string</code> | The KMS key to use to encrypt data in the S3 bucket where the graph data is exported. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportPath">S3ExportPath</a></code> | <code>*string</code> | The path to an S3 bucket from which to import data. |

---

##### `PreserveDefaultVertexLabels`<sup>Optional</sup> <a name="PreserveDefaultVertexLabels" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveDefaultVertexLabels"></a>

```go
PreserveDefaultVertexLabels interface{}
```

- *Type:* interface{}

Neptune Analytics supports label-less vertices and no labels are assigned unless one is explicitly provided.

Neptune assigns default labels when none is explicitly provided. When importing the data into Neptune Analytics, the default vertex labels can be omitted by setting preserveDefaultVertexLabels to false. Note that if the vertex only has default labels, and has no other properties or edges, then the vertex will effectively not get imported into Neptune Analytics when preserveDefaultVertexLabels is set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#preserve_default_vertex_labels NeptunegraphGraph#preserve_default_vertex_labels}

---

##### `PreserveEdgeIds`<sup>Optional</sup> <a name="PreserveEdgeIds" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.preserveEdgeIds"></a>

```go
PreserveEdgeIds interface{}
```

- *Type:* interface{}

Neptune Analytics currently does not support user defined edge ids.

The edge ids are not imported by default. They are imported if preserveEdgeIds is set to true, and ids are stored as properties on the relationships with the property name neptuneEdgeId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#preserve_edge_ids NeptunegraphGraph#preserve_edge_ids}

---

##### `S3ExportKmsKeyId`<sup>Optional</sup> <a name="S3ExportKmsKeyId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportKmsKeyId"></a>

```go
S3ExportKmsKeyId *string
```

- *Type:* *string

The KMS key to use to encrypt data in the S3 bucket where the graph data is exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#s3_export_kms_key_id NeptunegraphGraph#s3_export_kms_key_id}

---

##### `S3ExportPath`<sup>Optional</sup> <a name="S3ExportPath" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune.property.s3ExportPath"></a>

```go
S3ExportPath *string
```

- *Type:* *string

The path to an S3 bucket from which to import data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#s3_export_path NeptunegraphGraph#s3_export_path}

---

### NeptunegraphGraphTags <a name="NeptunegraphGraphTags" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

&neptunegraphgraph.NeptunegraphGraphTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#key NeptunegraphGraph#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#value NeptunegraphGraph#value}

---

### NeptunegraphGraphVectorSearchConfiguration <a name="NeptunegraphGraphVectorSearchConfiguration" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

&neptunegraphgraph.NeptunegraphGraphVectorSearchConfiguration {
	VectorSearchDimension: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension">VectorSearchDimension</a></code> | <code>*f64</code> | The vector search dimension. |

---

##### `VectorSearchDimension`<sup>Optional</sup> <a name="VectorSearchDimension" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfiguration.property.vectorSearchDimension"></a>

```go
VectorSearchDimension *f64
```

- *Type:* *f64

The vector search dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/neptunegraph_graph#vector_search_dimension NeptunegraphGraph#vector_search_dimension}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference <a name="NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

neptunegraphgraph.NewNeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveDefaultVertexLabels">ResetPreserveDefaultVertexLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveEdgeIds">ResetPreserveEdgeIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportKmsKeyId">ResetS3ExportKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportPath">ResetS3ExportPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreserveDefaultVertexLabels` <a name="ResetPreserveDefaultVertexLabels" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveDefaultVertexLabels"></a>

```go
func ResetPreserveDefaultVertexLabels()
```

##### `ResetPreserveEdgeIds` <a name="ResetPreserveEdgeIds" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetPreserveEdgeIds"></a>

```go
func ResetPreserveEdgeIds()
```

##### `ResetS3ExportKmsKeyId` <a name="ResetS3ExportKmsKeyId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportKmsKeyId"></a>

```go
func ResetS3ExportKmsKeyId()
```

##### `ResetS3ExportPath` <a name="ResetS3ExportPath" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.resetS3ExportPath"></a>

```go
func ResetS3ExportPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabelsInput">PreserveDefaultVertexLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIdsInput">PreserveEdgeIdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyIdInput">S3ExportKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPathInput">S3ExportPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabels">PreserveDefaultVertexLabels</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIds">PreserveEdgeIds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyId">S3ExportKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPath">S3ExportPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreserveDefaultVertexLabelsInput`<sup>Optional</sup> <a name="PreserveDefaultVertexLabelsInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabelsInput"></a>

```go
func PreserveDefaultVertexLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `PreserveEdgeIdsInput`<sup>Optional</sup> <a name="PreserveEdgeIdsInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIdsInput"></a>

```go
func PreserveEdgeIdsInput() interface{}
```

- *Type:* interface{}

---

##### `S3ExportKmsKeyIdInput`<sup>Optional</sup> <a name="S3ExportKmsKeyIdInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyIdInput"></a>

```go
func S3ExportKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `S3ExportPathInput`<sup>Optional</sup> <a name="S3ExportPathInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPathInput"></a>

```go
func S3ExportPathInput() *string
```

- *Type:* *string

---

##### `PreserveDefaultVertexLabels`<sup>Required</sup> <a name="PreserveDefaultVertexLabels" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveDefaultVertexLabels"></a>

```go
func PreserveDefaultVertexLabels() interface{}
```

- *Type:* interface{}

---

##### `PreserveEdgeIds`<sup>Required</sup> <a name="PreserveEdgeIds" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.preserveEdgeIds"></a>

```go
func PreserveEdgeIds() interface{}
```

- *Type:* interface{}

---

##### `S3ExportKmsKeyId`<sup>Required</sup> <a name="S3ExportKmsKeyId" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportKmsKeyId"></a>

```go
func S3ExportKmsKeyId() *string
```

- *Type:* *string

---

##### `S3ExportPath`<sup>Required</sup> <a name="S3ExportPath" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.s3ExportPath"></a>

```go
func S3ExportPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NeptunegraphGraphImportTaskImportOptionsOutputReference <a name="NeptunegraphGraphImportTaskImportOptionsOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

neptunegraphgraph.NewNeptunegraphGraphImportTaskImportOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NeptunegraphGraphImportTaskImportOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune">PutNeptune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resetNeptune">ResetNeptune</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNeptune` <a name="PutNeptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune"></a>

```go
func PutNeptune(value NeptunegraphGraphImportTaskImportOptionsNeptune)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.putNeptune.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptune">NeptunegraphGraphImportTaskImportOptionsNeptune</a>

---

##### `ResetNeptune` <a name="ResetNeptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.resetNeptune"></a>

```go
func ResetNeptune()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptune">Neptune</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference">NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptuneInput">NeptuneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Neptune`<sup>Required</sup> <a name="Neptune" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptune"></a>

```go
func Neptune() NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference">NeptunegraphGraphImportTaskImportOptionsNeptuneOutputReference</a>

---

##### `NeptuneInput`<sup>Optional</sup> <a name="NeptuneInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.neptuneInput"></a>

```go
func NeptuneInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NeptunegraphGraphImportTaskOutputReference <a name="NeptunegraphGraphImportTaskOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

neptunegraphgraph.NewNeptunegraphGraphImportTaskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NeptunegraphGraphImportTaskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.putImportOptions">PutImportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetBlankNodeHandling">ResetBlankNodeHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFailOnError">ResetFailOnError</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetImportOptions">ResetImportOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMaxProvisionedMemory">ResetMaxProvisionedMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMinProvisionedMemory">ResetMinProvisionedMemory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetParquetType">ResetParquetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutImportOptions` <a name="PutImportOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.putImportOptions"></a>

```go
func PutImportOptions(value NeptunegraphGraphImportTaskImportOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.putImportOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptions">NeptunegraphGraphImportTaskImportOptions</a>

---

##### `ResetBlankNodeHandling` <a name="ResetBlankNodeHandling" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetBlankNodeHandling"></a>

```go
func ResetBlankNodeHandling()
```

##### `ResetFailOnError` <a name="ResetFailOnError" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFailOnError"></a>

```go
func ResetFailOnError()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetImportOptions` <a name="ResetImportOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetImportOptions"></a>

```go
func ResetImportOptions()
```

##### `ResetMaxProvisionedMemory` <a name="ResetMaxProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMaxProvisionedMemory"></a>

```go
func ResetMaxProvisionedMemory()
```

##### `ResetMinProvisionedMemory` <a name="ResetMinProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetMinProvisionedMemory"></a>

```go
func ResetMinProvisionedMemory()
```

##### `ResetParquetType` <a name="ResetParquetType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetParquetType"></a>

```go
func ResetParquetType()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.resetSource"></a>

```go
func ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptions">ImportOptions</a></code> | <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference">NeptunegraphGraphImportTaskImportOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandlingInput">BlankNodeHandlingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnErrorInput">FailOnErrorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptionsInput">ImportOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemoryInput">MaxProvisionedMemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemoryInput">MinProvisionedMemoryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetTypeInput">ParquetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandling">BlankNodeHandling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnError">FailOnError</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemory">MaxProvisionedMemory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemory">MinProvisionedMemory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetType">ParquetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImportOptions`<sup>Required</sup> <a name="ImportOptions" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptions"></a>

```go
func ImportOptions() NeptunegraphGraphImportTaskImportOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskImportOptionsOutputReference">NeptunegraphGraphImportTaskImportOptionsOutputReference</a>

---

##### `BlankNodeHandlingInput`<sup>Optional</sup> <a name="BlankNodeHandlingInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandlingInput"></a>

```go
func BlankNodeHandlingInput() *string
```

- *Type:* *string

---

##### `FailOnErrorInput`<sup>Optional</sup> <a name="FailOnErrorInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnErrorInput"></a>

```go
func FailOnErrorInput() interface{}
```

- *Type:* interface{}

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `ImportOptionsInput`<sup>Optional</sup> <a name="ImportOptionsInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.importOptionsInput"></a>

```go
func ImportOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `MaxProvisionedMemoryInput`<sup>Optional</sup> <a name="MaxProvisionedMemoryInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemoryInput"></a>

```go
func MaxProvisionedMemoryInput() *f64
```

- *Type:* *f64

---

##### `MinProvisionedMemoryInput`<sup>Optional</sup> <a name="MinProvisionedMemoryInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemoryInput"></a>

```go
func MinProvisionedMemoryInput() *f64
```

- *Type:* *f64

---

##### `ParquetTypeInput`<sup>Optional</sup> <a name="ParquetTypeInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetTypeInput"></a>

```go
func ParquetTypeInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `BlankNodeHandling`<sup>Required</sup> <a name="BlankNodeHandling" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.blankNodeHandling"></a>

```go
func BlankNodeHandling() *string
```

- *Type:* *string

---

##### `FailOnError`<sup>Required</sup> <a name="FailOnError" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.failOnError"></a>

```go
func FailOnError() interface{}
```

- *Type:* interface{}

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `MaxProvisionedMemory`<sup>Required</sup> <a name="MaxProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.maxProvisionedMemory"></a>

```go
func MaxProvisionedMemory() *f64
```

- *Type:* *f64

---

##### `MinProvisionedMemory`<sup>Required</sup> <a name="MinProvisionedMemory" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.minProvisionedMemory"></a>

```go
func MinProvisionedMemory() *f64
```

- *Type:* *f64

---

##### `ParquetType`<sup>Required</sup> <a name="ParquetType" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.parquetType"></a>

```go
func ParquetType() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphImportTaskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NeptunegraphGraphTagsList <a name="NeptunegraphGraphTagsList" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

neptunegraphgraph.NewNeptunegraphGraphTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NeptunegraphGraphTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.get"></a>

```go
func Get(index *f64) NeptunegraphGraphTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NeptunegraphGraphTagsOutputReference <a name="NeptunegraphGraphTagsOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

neptunegraphgraph.NewNeptunegraphGraphTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NeptunegraphGraphTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NeptunegraphGraphVectorSearchConfigurationOutputReference <a name="NeptunegraphGraphVectorSearchConfigurationOutputReference" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/neptunegraphgraph"

neptunegraphgraph.NewNeptunegraphGraphVectorSearchConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NeptunegraphGraphVectorSearchConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension">ResetVectorSearchDimension</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVectorSearchDimension` <a name="ResetVectorSearchDimension" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.resetVectorSearchDimension"></a>

```go
func ResetVectorSearchDimension()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput">VectorSearchDimensionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension">VectorSearchDimension</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VectorSearchDimensionInput`<sup>Optional</sup> <a name="VectorSearchDimensionInput" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimensionInput"></a>

```go
func VectorSearchDimensionInput() *f64
```

- *Type:* *f64

---

##### `VectorSearchDimension`<sup>Required</sup> <a name="VectorSearchDimension" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.vectorSearchDimension"></a>

```go
func VectorSearchDimension() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.neptunegraphGraph.NeptunegraphGraphVectorSearchConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



