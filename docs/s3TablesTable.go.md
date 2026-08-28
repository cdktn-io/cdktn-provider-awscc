# `s3TablesTable` Submodule <a name="`s3TablesTable` Submodule" id="@cdktn/provider-awscc.s3TablesTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3TablesTable <a name="S3TablesTable" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table awscc_s3tables_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTable(scope Construct, id *string, config S3TablesTableConfig) S3TablesTable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig">S3TablesTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig">S3TablesTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putCompaction">PutCompaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata">PutIcebergMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement">PutSnapshotManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putStorageClassConfiguration">PutStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetCompaction">ResetCompaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetIcebergMetadata">ResetIcebergMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetSnapshotManagement">ResetSnapshotManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetStorageClassConfiguration">ResetStorageClassConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetWithoutMetadata">ResetWithoutMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCompaction` <a name="PutCompaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putCompaction"></a>

```go
func PutCompaction(value S3TablesTableCompaction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putCompaction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

---

##### `PutIcebergMetadata` <a name="PutIcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata"></a>

```go
func PutIcebergMetadata(value S3TablesTableIcebergMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putIcebergMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

---

##### `PutSnapshotManagement` <a name="PutSnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement"></a>

```go
func PutSnapshotManagement(value S3TablesTableSnapshotManagement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putSnapshotManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

---

##### `PutStorageClassConfiguration` <a name="PutStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putStorageClassConfiguration"></a>

```go
func PutStorageClassConfiguration(value S3TablesTableStorageClassConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putStorageClassConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompaction` <a name="ResetCompaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetCompaction"></a>

```go
func ResetCompaction()
```

##### `ResetIcebergMetadata` <a name="ResetIcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetIcebergMetadata"></a>

```go
func ResetIcebergMetadata()
```

##### `ResetSnapshotManagement` <a name="ResetSnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetSnapshotManagement"></a>

```go
func ResetSnapshotManagement()
```

##### `ResetStorageClassConfiguration` <a name="ResetStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetStorageClassConfiguration"></a>

```go
func ResetStorageClassConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetTags"></a>

```go
func ResetTags()
```

##### `ResetWithoutMetadata` <a name="ResetWithoutMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.resetWithoutMetadata"></a>

```go
func ResetWithoutMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3TablesTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.S3TablesTable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.S3TablesTable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.S3TablesTable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.S3TablesTable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a S3TablesTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3TablesTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3TablesTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the S3TablesTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compaction">Compaction</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference">S3TablesTableCompactionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadata">IcebergMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference">S3TablesTableIcebergMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagement">SnapshotManagement</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference">S3TablesTableSnapshotManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfiguration">StorageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference">S3TablesTableStorageClassConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableArn">TableArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList">S3TablesTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.versionToken">VersionToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.warehouseLocation">WarehouseLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compactionInput">CompactionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadataInput">IcebergMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormatInput">OpenTableFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagementInput">SnapshotManagementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfigurationInput">StorageClassConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArnInput">TableBucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadataInput">WithoutMetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormat">OpenTableFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArn">TableBucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadata">WithoutMetadata</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Compaction`<sup>Required</sup> <a name="Compaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compaction"></a>

```go
func Compaction() S3TablesTableCompactionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference">S3TablesTableCompactionOutputReference</a>

---

##### `IcebergMetadata`<sup>Required</sup> <a name="IcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadata"></a>

```go
func IcebergMetadata() S3TablesTableIcebergMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference">S3TablesTableIcebergMetadataOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SnapshotManagement`<sup>Required</sup> <a name="SnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagement"></a>

```go
func SnapshotManagement() S3TablesTableSnapshotManagementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference">S3TablesTableSnapshotManagementOutputReference</a>

---

##### `StorageClassConfiguration`<sup>Required</sup> <a name="StorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfiguration"></a>

```go
func StorageClassConfiguration() S3TablesTableStorageClassConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference">S3TablesTableStorageClassConfigurationOutputReference</a>

---

##### `TableArn`<sup>Required</sup> <a name="TableArn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableArn"></a>

```go
func TableArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tags"></a>

```go
func Tags() S3TablesTableTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList">S3TablesTableTagsList</a>

---

##### `VersionToken`<sup>Required</sup> <a name="VersionToken" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.versionToken"></a>

```go
func VersionToken() *string
```

- *Type:* *string

---

##### `WarehouseLocation`<sup>Required</sup> <a name="WarehouseLocation" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.warehouseLocation"></a>

```go
func WarehouseLocation() *string
```

- *Type:* *string

---

##### `CompactionInput`<sup>Optional</sup> <a name="CompactionInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.compactionInput"></a>

```go
func CompactionInput() interface{}
```

- *Type:* interface{}

---

##### `IcebergMetadataInput`<sup>Optional</sup> <a name="IcebergMetadataInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.icebergMetadataInput"></a>

```go
func IcebergMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `OpenTableFormatInput`<sup>Optional</sup> <a name="OpenTableFormatInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormatInput"></a>

```go
func OpenTableFormatInput() *string
```

- *Type:* *string

---

##### `SnapshotManagementInput`<sup>Optional</sup> <a name="SnapshotManagementInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.snapshotManagementInput"></a>

```go
func SnapshotManagementInput() interface{}
```

- *Type:* interface{}

---

##### `StorageClassConfigurationInput`<sup>Optional</sup> <a name="StorageClassConfigurationInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.storageClassConfigurationInput"></a>

```go
func StorageClassConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `TableBucketArnInput`<sup>Optional</sup> <a name="TableBucketArnInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArnInput"></a>

```go
func TableBucketArnInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `WithoutMetadataInput`<sup>Optional</sup> <a name="WithoutMetadataInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadataInput"></a>

```go
func WithoutMetadataInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `OpenTableFormat`<sup>Required</sup> <a name="OpenTableFormat" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.openTableFormat"></a>

```go
func OpenTableFormat() *string
```

- *Type:* *string

---

##### `TableBucketArn`<sup>Required</sup> <a name="TableBucketArn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableBucketArn"></a>

```go
func TableBucketArn() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `WithoutMetadata`<sup>Required</sup> <a name="WithoutMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.withoutMetadata"></a>

```go
func WithoutMetadata() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3TablesTableCompaction <a name="S3TablesTableCompaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableCompaction {
	Status: *string,
	TargetFileSizeMb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.status">Status</a></code> | <code>*string</code> | Indicates whether the Compaction maintenance action is enabled. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.targetFileSizeMb">TargetFileSizeMb</a></code> | <code>*f64</code> | The target file size for the table in MB. |

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.status"></a>

```go
Status *string
```

- *Type:* *string

Indicates whether the Compaction maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#status S3TablesTable#status}

---

##### `TargetFileSizeMb`<sup>Optional</sup> <a name="TargetFileSizeMb" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction.property.targetFileSizeMb"></a>

```go
TargetFileSizeMb *f64
```

- *Type:* *f64

The target file size for the table in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#target_file_size_mb S3TablesTable#target_file_size_mb}

---

### S3TablesTableConfig <a name="S3TablesTableConfig" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Namespace: *string,
	OpenTableFormat: *string,
	TableBucketArn: *string,
	TableName: *string,
	Compaction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3TablesTable.S3TablesTableCompaction,
	IcebergMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3TablesTable.S3TablesTableIcebergMetadata,
	SnapshotManagement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3TablesTable.S3TablesTableSnapshotManagement,
	StorageClassConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3TablesTable.S3TablesTableStorageClassConfiguration,
	Tags: interface{},
	WithoutMetadata: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace that the table belongs to. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.openTableFormat">OpenTableFormat</a></code> | <code>*string</code> | Format of the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableBucketArn">TableBucketArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the specified table bucket. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableName">TableName</a></code> | <code>*string</code> | The name for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.compaction">Compaction</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a></code> | Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.icebergMetadata">IcebergMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a></code> | Contains details about the metadata for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.snapshotManagement">SnapshotManagement</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a></code> | Contains details about the snapshot management settings for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.storageClassConfiguration">StorageClassConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a></code> | Specifies storage class settings for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tags">Tags</a></code> | <code>interface{}</code> | User tags (key-value pairs) to associate with the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.withoutMetadata">WithoutMetadata</a></code> | <code>*string</code> | Indicates that you don't want to specify a schema for the table. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace that the table belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#namespace S3TablesTable#namespace}

---

##### `OpenTableFormat`<sup>Required</sup> <a name="OpenTableFormat" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.openTableFormat"></a>

```go
OpenTableFormat *string
```

- *Type:* *string

Format of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#open_table_format S3TablesTable#open_table_format}

---

##### `TableBucketArn`<sup>Required</sup> <a name="TableBucketArn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableBucketArn"></a>

```go
TableBucketArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the specified table bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#table_bucket_arn S3TablesTable#table_bucket_arn}

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

The name for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#table_name S3TablesTable#table_name}

---

##### `Compaction`<sup>Optional</sup> <a name="Compaction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.compaction"></a>

```go
Compaction S3TablesTableCompaction
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompaction">S3TablesTableCompaction</a>

Settings governing the Compaction maintenance action. Contains details about the compaction settings for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#compaction S3TablesTable#compaction}

---

##### `IcebergMetadata`<sup>Optional</sup> <a name="IcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.icebergMetadata"></a>

```go
IcebergMetadata S3TablesTableIcebergMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata">S3TablesTableIcebergMetadata</a>

Contains details about the metadata for an Iceberg table.

Specify either IcebergSchema (for simple flat schemas with primitive types only) or IcebergSchemaV2 (for schemas with nested types like struct, list, map), but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#iceberg_metadata S3TablesTable#iceberg_metadata}

---

##### `SnapshotManagement`<sup>Optional</sup> <a name="SnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.snapshotManagement"></a>

```go
SnapshotManagement S3TablesTableSnapshotManagement
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement">S3TablesTableSnapshotManagement</a>

Contains details about the snapshot management settings for an Iceberg table.

A snapshot is expired when it exceeds MinSnapshotsToKeep and MaxSnapshotAgeHours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#snapshot_management S3TablesTable#snapshot_management}

---

##### `StorageClassConfiguration`<sup>Optional</sup> <a name="StorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.storageClassConfiguration"></a>

```go
StorageClassConfiguration S3TablesTableStorageClassConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration">S3TablesTableStorageClassConfiguration</a>

Specifies storage class settings for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#storage_class_configuration S3TablesTable#storage_class_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

User tags (key-value pairs) to associate with the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#tags S3TablesTable#tags}

---

##### `WithoutMetadata`<sup>Optional</sup> <a name="WithoutMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableConfig.property.withoutMetadata"></a>

```go
WithoutMetadata *string
```

- *Type:* *string

Indicates that you don't want to specify a schema for the table.

This property is mutually exclusive to 'IcebergMetadata', and its only possible value is 'Yes'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#without_metadata S3TablesTable#without_metadata}

---

### S3TablesTableIcebergMetadata <a name="S3TablesTableIcebergMetadata" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableIcebergMetadata {
	IcebergPartitionSpec: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec,
	IcebergSchema: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema,
	IcebergSchemaV2: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2,
	IcebergSortOrder: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder,
	TableProperties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergPartitionSpec">IcebergPartitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a></code> | Partition specification for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchema">IcebergSchema</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a></code> | Schema definition for flat tables with primitive types only. Mutually exclusive with IcebergSchemaV2. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchemaV2">IcebergSchemaV2</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a></code> | Schema definition that supports Apache Iceberg nested types (struct, list, map) and primitive types. Mutually exclusive with IcebergSchema. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSortOrder">IcebergSortOrder</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a></code> | Sort order specification for an Iceberg table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.tableProperties">TableProperties</a></code> | <code>*map[string]*string</code> | Iceberg table properties (e.g., format-version, write.parquet.compression-codec). |

---

##### `IcebergPartitionSpec`<sup>Optional</sup> <a name="IcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergPartitionSpec"></a>

```go
IcebergPartitionSpec S3TablesTableIcebergMetadataIcebergPartitionSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

Partition specification for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#iceberg_partition_spec S3TablesTable#iceberg_partition_spec}

---

##### `IcebergSchema`<sup>Optional</sup> <a name="IcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchema"></a>

```go
IcebergSchema S3TablesTableIcebergMetadataIcebergSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

Schema definition for flat tables with primitive types only. Mutually exclusive with IcebergSchemaV2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#iceberg_schema S3TablesTable#iceberg_schema}

---

##### `IcebergSchemaV2`<sup>Optional</sup> <a name="IcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSchemaV2"></a>

```go
IcebergSchemaV2 S3TablesTableIcebergMetadataIcebergSchemaV2
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

Schema definition that supports Apache Iceberg nested types (struct, list, map) and primitive types. Mutually exclusive with IcebergSchema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#iceberg_schema_v2 S3TablesTable#iceberg_schema_v2}

---

##### `IcebergSortOrder`<sup>Optional</sup> <a name="IcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.icebergSortOrder"></a>

```go
IcebergSortOrder S3TablesTableIcebergMetadataIcebergSortOrder
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

Sort order specification for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#iceberg_sort_order S3TablesTable#iceberg_sort_order}

---

##### `TableProperties`<sup>Optional</sup> <a name="TableProperties" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadata.property.tableProperties"></a>

```go
TableProperties *map[string]*string
```

- *Type:* *map[string]*string

Iceberg table properties (e.g., format-version, write.parquet.compression-codec).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#table_properties S3TablesTable#table_properties}

---

### S3TablesTableIcebergMetadataIcebergPartitionSpec <a name="S3TablesTableIcebergMetadataIcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableIcebergMetadataIcebergPartitionSpec {
	Fields: interface{},
	SpecId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.fields">Fields</a></code> | <code>interface{}</code> | List of partition fields. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.specId">SpecId</a></code> | <code>*f64</code> | The partition spec ID (defaults to 0 if not specified). |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

List of partition fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#fields S3TablesTable#fields}

---

##### `SpecId`<sup>Optional</sup> <a name="SpecId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec.property.specId"></a>

```go
SpecId *f64
```

- *Type:* *f64

The partition spec ID (defaults to 0 if not specified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#spec_id S3TablesTable#spec_id}

---

### S3TablesTableIcebergMetadataIcebergPartitionSpecFields <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields {
	FieldId: *f64,
	Name: *string,
	SourceId: *f64,
	Transform: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.fieldId">FieldId</a></code> | <code>*f64</code> | The partition field ID (auto-assigned starting from 1000 if not specified). |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.name">Name</a></code> | <code>*string</code> | The name of the partition field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.sourceId">SourceId</a></code> | <code>*f64</code> | The source column ID to partition on. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.transform">Transform</a></code> | <code>*string</code> | The partition transform function (identity, bucket[N], truncate[N], year, month, day, hour). |

---

##### `FieldId`<sup>Optional</sup> <a name="FieldId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.fieldId"></a>

```go
FieldId *f64
```

- *Type:* *f64

The partition field ID (auto-assigned starting from 1000 if not specified).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#field_id S3TablesTable#field_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the partition field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#name S3TablesTable#name}

---

##### `SourceId`<sup>Optional</sup> <a name="SourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.sourceId"></a>

```go
SourceId *f64
```

- *Type:* *f64

The source column ID to partition on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#source_id S3TablesTable#source_id}

---

##### `Transform`<sup>Optional</sup> <a name="Transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFields.property.transform"></a>

```go
Transform *string
```

- *Type:* *string

The partition transform function (identity, bucket[N], truncate[N], year, month, day, hour).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#transform S3TablesTable#transform}

---

### S3TablesTableIcebergMetadataIcebergSchema <a name="S3TablesTableIcebergMetadataIcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableIcebergMetadataIcebergSchema {
	SchemaFieldList: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema.property.schemaFieldList">SchemaFieldList</a></code> | <code>interface{}</code> | Contains details about the schema for an Iceberg table. |

---

##### `SchemaFieldList`<sup>Optional</sup> <a name="SchemaFieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema.property.schemaFieldList"></a>

```go
SchemaFieldList interface{}
```

- *Type:* interface{}

Contains details about the schema for an Iceberg table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#schema_field_list S3TablesTable#schema_field_list}

---

### S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct <a name="S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct {
	Id: *f64,
	Name: *string,
	Required: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.id">Id</a></code> | <code>*f64</code> | The unique identifier for the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.name">Name</a></code> | <code>*string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.required">Required</a></code> | <code>interface{}</code> | A Boolean value that specifies whether values are required for each row in this field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.type">Type</a></code> | <code>*string</code> | The field type. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.id"></a>

```go
Id *f64
```

- *Type:* *f64

The unique identifier for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#id S3TablesTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#name S3TablesTable#name}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

A Boolean value that specifies whether values are required for each row in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#required S3TablesTable#required}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStruct.property.type"></a>

```go
Type *string
```

- *Type:* *string

The field type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#type S3TablesTable#type}

---

### S3TablesTableIcebergMetadataIcebergSchemaV2 <a name="S3TablesTableIcebergMetadataIcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableIcebergMetadataIcebergSchemaV2 {
	IdentifierFieldIds: *[]*f64,
	SchemaId: *f64,
	SchemaV2FieldList: interface{},
	SchemaV2FieldType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.identifierFieldIds">IdentifierFieldIds</a></code> | <code>*[]*f64</code> | A list of field IDs that are used as the identifier fields for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaId">SchemaId</a></code> | <code>*f64</code> | An optional unique identifier for the schema. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldList">SchemaV2FieldList</a></code> | <code>interface{}</code> | The schema fields for the table. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldType">SchemaV2FieldType</a></code> | <code>*string</code> | The type of the top-level schema, which is always 'struct'. |

---

##### `IdentifierFieldIds`<sup>Optional</sup> <a name="IdentifierFieldIds" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.identifierFieldIds"></a>

```go
IdentifierFieldIds *[]*f64
```

- *Type:* *[]*f64

A list of field IDs that are used as the identifier fields for the table.

Identifier fields uniquely identify a row in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#identifier_field_ids S3TablesTable#identifier_field_ids}

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaId"></a>

```go
SchemaId *f64
```

- *Type:* *f64

An optional unique identifier for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#schema_id S3TablesTable#schema_id}

---

##### `SchemaV2FieldList`<sup>Optional</sup> <a name="SchemaV2FieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldList"></a>

```go
SchemaV2FieldList interface{}
```

- *Type:* interface{}

The schema fields for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#schema_v2_field_list S3TablesTable#schema_v2_field_list}

---

##### `SchemaV2FieldType`<sup>Optional</sup> <a name="SchemaV2FieldType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2.property.schemaV2FieldType"></a>

```go
SchemaV2FieldType *string
```

- *Type:* *string

The type of the top-level schema, which is always 'struct'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#schema_v2_field_type S3TablesTable#schema_v2_field_type}

---

### S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct <a name="S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct {
	Doc: *string,
	Id: *f64,
	Name: *string,
	Required: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.doc">Doc</a></code> | <code>*string</code> | Optional documentation for the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.id">Id</a></code> | <code>*f64</code> | The unique identifier for the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.name">Name</a></code> | <code>*string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.required">Required</a></code> | <code>interface{}</code> | A Boolean value that specifies whether values are required for each row in this field. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.type">Type</a></code> | <code>*string</code> | The field type. |

---

##### `Doc`<sup>Optional</sup> <a name="Doc" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.doc"></a>

```go
Doc *string
```

- *Type:* *string

Optional documentation for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#doc S3TablesTable#doc}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.id"></a>

```go
Id *f64
```

- *Type:* *f64

The unique identifier for the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#id S3TablesTable#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#name S3TablesTable#name}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

A Boolean value that specifies whether values are required for each row in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#required S3TablesTable#required}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStruct.property.type"></a>

```go
Type *string
```

- *Type:* *string

The field type.

For primitive types, use a string (e.g., 'int', 'string', 'long'). For nested types, use an object (e.g., {'type': 'struct', 'fields': [...]} for struct, {'type': 'list', 'element-id': N, 'element': 'type'} for list, {'type': 'map', 'key-id': N, 'key': 'type', 'value-id': N, 'value': 'type'} for map).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#type S3TablesTable#type}

---

### S3TablesTableIcebergMetadataIcebergSortOrder <a name="S3TablesTableIcebergMetadataIcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableIcebergMetadataIcebergSortOrder {
	Fields: interface{},
	OrderId: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.fields">Fields</a></code> | <code>interface{}</code> | List of sort fields. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.orderId">OrderId</a></code> | <code>*f64</code> | The sort order ID (defaults to 1 if not specified, 0 is reserved for unsorted). |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.fields"></a>

```go
Fields interface{}
```

- *Type:* interface{}

List of sort fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#fields S3TablesTable#fields}

---

##### `OrderId`<sup>Optional</sup> <a name="OrderId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder.property.orderId"></a>

```go
OrderId *f64
```

- *Type:* *f64

The sort order ID (defaults to 1 if not specified, 0 is reserved for unsorted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#order_id S3TablesTable#order_id}

---

### S3TablesTableIcebergMetadataIcebergSortOrderFields <a name="S3TablesTableIcebergMetadataIcebergSortOrderFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableIcebergMetadataIcebergSortOrderFields {
	Direction: *string,
	NullOrder: *string,
	SourceId: *f64,
	Transform: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.direction">Direction</a></code> | <code>*string</code> | Sort direction (asc or desc). |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.nullOrder">NullOrder</a></code> | <code>*string</code> | Null value ordering (nulls-first or nulls-last). |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.sourceId">SourceId</a></code> | <code>*f64</code> | The source column ID to sort on. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.transform">Transform</a></code> | <code>*string</code> | The sort transform function. |

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Sort direction (asc or desc).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#direction S3TablesTable#direction}

---

##### `NullOrder`<sup>Optional</sup> <a name="NullOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.nullOrder"></a>

```go
NullOrder *string
```

- *Type:* *string

Null value ordering (nulls-first or nulls-last).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#null_order S3TablesTable#null_order}

---

##### `SourceId`<sup>Optional</sup> <a name="SourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.sourceId"></a>

```go
SourceId *f64
```

- *Type:* *f64

The source column ID to sort on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#source_id S3TablesTable#source_id}

---

##### `Transform`<sup>Optional</sup> <a name="Transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFields.property.transform"></a>

```go
Transform *string
```

- *Type:* *string

The sort transform function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#transform S3TablesTable#transform}

---

### S3TablesTableSnapshotManagement <a name="S3TablesTableSnapshotManagement" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableSnapshotManagement {
	MaxSnapshotAgeHours: *f64,
	MinSnapshotsToKeep: *f64,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.maxSnapshotAgeHours">MaxSnapshotAgeHours</a></code> | <code>*f64</code> | The maximum age of a snapshot before it can be expired. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.minSnapshotsToKeep">MinSnapshotsToKeep</a></code> | <code>*f64</code> | The minimum number of snapshots to keep. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.status">Status</a></code> | <code>*string</code> | Indicates whether the SnapshotManagement maintenance action is enabled. |

---

##### `MaxSnapshotAgeHours`<sup>Optional</sup> <a name="MaxSnapshotAgeHours" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.maxSnapshotAgeHours"></a>

```go
MaxSnapshotAgeHours *f64
```

- *Type:* *f64

The maximum age of a snapshot before it can be expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#max_snapshot_age_hours S3TablesTable#max_snapshot_age_hours}

---

##### `MinSnapshotsToKeep`<sup>Optional</sup> <a name="MinSnapshotsToKeep" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.minSnapshotsToKeep"></a>

```go
MinSnapshotsToKeep *f64
```

- *Type:* *f64

The minimum number of snapshots to keep.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#min_snapshots_to_keep S3TablesTable#min_snapshots_to_keep}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagement.property.status"></a>

```go
Status *string
```

- *Type:* *string

Indicates whether the SnapshotManagement maintenance action is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#status S3TablesTable#status}

---

### S3TablesTableStorageClassConfiguration <a name="S3TablesTableStorageClassConfiguration" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableStorageClassConfiguration {
	StorageClass: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration.property.storageClass">StorageClass</a></code> | <code>*string</code> | The storage class for the table. |

---

##### `StorageClass`<sup>Optional</sup> <a name="StorageClass" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfiguration.property.storageClass"></a>

```go
StorageClass *string
```

- *Type:* *string

The storage class for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/s3tables_table#storage_class S3TablesTable#storage_class}

---

### S3TablesTableTags <a name="S3TablesTableTags" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

&s3tablestable.S3TablesTableTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.key">Key</a></code> | <code>*string</code> | Tag key must be between 1 to 128 characters in length. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.value">Value</a></code> | <code>*string</code> | Tag value must be between 0 to 256 characters in length. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Tag key must be between 1 to 128 characters in length.

Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Tag value must be between 0 to 256 characters in length.

Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and

---

## Classes <a name="Classes" id="Classes"></a>

### S3TablesTableCompactionOutputReference <a name="S3TablesTableCompactionOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableCompactionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3TablesTableCompactionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetTargetFileSizeMb">ResetTargetFileSizeMb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTargetFileSizeMb` <a name="ResetTargetFileSizeMb" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.resetTargetFileSizeMb"></a>

```go
func ResetTargetFileSizeMb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMbInput">TargetFileSizeMbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMb">TargetFileSizeMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TargetFileSizeMbInput`<sup>Optional</sup> <a name="TargetFileSizeMbInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMbInput"></a>

```go
func TargetFileSizeMbInput() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TargetFileSizeMb`<sup>Required</sup> <a name="TargetFileSizeMb" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.targetFileSizeMb"></a>

```go
func TargetFileSizeMb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableCompactionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get"></a>

```go
func Get(index *f64) S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetFieldId">ResetFieldId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetSourceId">ResetSourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetTransform">ResetTransform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldId` <a name="ResetFieldId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetFieldId"></a>

```go
func ResetFieldId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSourceId` <a name="ResetSourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetSourceId"></a>

```go
func ResetSourceId()
```

##### `ResetTransform` <a name="ResetTransform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.resetTransform"></a>

```go
func ResetTransform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldIdInput">FieldIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceIdInput">SourceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transformInput">TransformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldId">FieldId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transform">Transform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldIdInput`<sup>Optional</sup> <a name="FieldIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldIdInput"></a>

```go
func FieldIdInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceIdInput`<sup>Optional</sup> <a name="SourceIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceIdInput"></a>

```go
func SourceIdInput() *f64
```

- *Type:* *f64

---

##### `TransformInput`<sup>Optional</sup> <a name="TransformInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transformInput"></a>

```go
func TransformInput() *string
```

- *Type:* *string

---

##### `FieldId`<sup>Required</sup> <a name="FieldId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.fieldId"></a>

```go
func FieldId() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.sourceId"></a>

```go
func SourceId() *f64
```

- *Type:* *f64

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.transform"></a>

```go
func Transform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference <a name="S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetSpecId">ResetSpecId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetFields"></a>

```go
func ResetFields()
```

##### `ResetSpecId` <a name="ResetSpecId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.resetSpecId"></a>

```go
func ResetSpecId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList">S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specIdInput">SpecIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specId">SpecId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fields"></a>

```go
func Fields() S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList">S3TablesTableIcebergMetadataIcebergPartitionSpecFieldsList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `SpecIdInput`<sup>Optional</sup> <a name="SpecIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specIdInput"></a>

```go
func SpecIdInput() *f64
```

- *Type:* *f64

---

##### `SpecId`<sup>Required</sup> <a name="SpecId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.specId"></a>

```go
func SpecId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableIcebergMetadataIcebergSchemaOutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableIcebergMetadataIcebergSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3TablesTableIcebergMetadataIcebergSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.putSchemaFieldList">PutSchemaFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resetSchemaFieldList">ResetSchemaFieldList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaFieldList` <a name="PutSchemaFieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.putSchemaFieldList"></a>

```go
func PutSchemaFieldList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.putSchemaFieldList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetSchemaFieldList` <a name="ResetSchemaFieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.resetSchemaFieldList"></a>

```go
func ResetSchemaFieldList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldList">SchemaFieldList</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldListInput">SchemaFieldListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaFieldList`<sup>Required</sup> <a name="SchemaFieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldList"></a>

```go
func SchemaFieldList() S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList</a>

---

##### `SchemaFieldListInput`<sup>Optional</sup> <a name="SchemaFieldListInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.schemaFieldListInput"></a>

```go
func SchemaFieldListInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList <a name="S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get"></a>

```go
func Get(index *f64) S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.idInput">IdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.idInput"></a>

```go
func IdInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaSchemaFieldListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableIcebergMetadataIcebergSchemaV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.putSchemaV2FieldList">PutSchemaV2FieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetIdentifierFieldIds">ResetIdentifierFieldIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldList">ResetSchemaV2FieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldType">ResetSchemaV2FieldType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchemaV2FieldList` <a name="PutSchemaV2FieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.putSchemaV2FieldList"></a>

```go
func PutSchemaV2FieldList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.putSchemaV2FieldList.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetIdentifierFieldIds` <a name="ResetIdentifierFieldIds" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetIdentifierFieldIds"></a>

```go
func ResetIdentifierFieldIds()
```

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaId"></a>

```go
func ResetSchemaId()
```

##### `ResetSchemaV2FieldList` <a name="ResetSchemaV2FieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldList"></a>

```go
func ResetSchemaV2FieldList()
```

##### `ResetSchemaV2FieldType` <a name="ResetSchemaV2FieldType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.resetSchemaV2FieldType"></a>

```go
func ResetSchemaV2FieldType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldList">SchemaV2FieldList</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIdsInput">IdentifierFieldIdsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldListInput">SchemaV2FieldListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldTypeInput">SchemaV2FieldTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIds">IdentifierFieldIds</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaId">SchemaId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldType">SchemaV2FieldType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SchemaV2FieldList`<sup>Required</sup> <a name="SchemaV2FieldList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldList"></a>

```go
func SchemaV2FieldList() S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList">S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList</a>

---

##### `IdentifierFieldIdsInput`<sup>Optional</sup> <a name="IdentifierFieldIdsInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIdsInput"></a>

```go
func IdentifierFieldIdsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaIdInput"></a>

```go
func SchemaIdInput() *f64
```

- *Type:* *f64

---

##### `SchemaV2FieldListInput`<sup>Optional</sup> <a name="SchemaV2FieldListInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldListInput"></a>

```go
func SchemaV2FieldListInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaV2FieldTypeInput`<sup>Optional</sup> <a name="SchemaV2FieldTypeInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldTypeInput"></a>

```go
func SchemaV2FieldTypeInput() *string
```

- *Type:* *string

---

##### `IdentifierFieldIds`<sup>Required</sup> <a name="IdentifierFieldIds" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.identifierFieldIds"></a>

```go
func IdentifierFieldIds() *[]*f64
```

- *Type:* *[]*f64

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaId"></a>

```go
func SchemaId() *f64
```

- *Type:* *f64

---

##### `SchemaV2FieldType`<sup>Required</sup> <a name="SchemaV2FieldType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.schemaV2FieldType"></a>

```go
func SchemaV2FieldType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList <a name="S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get"></a>

```go
func Get(index *f64) S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference <a name="S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetDoc">ResetDoc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDoc` <a name="ResetDoc" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetDoc"></a>

```go
func ResetDoc()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.docInput">DocInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.idInput">IdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.doc">Doc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.id">Id</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocInput`<sup>Optional</sup> <a name="DocInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.docInput"></a>

```go
func DocInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.idInput"></a>

```go
func IdInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Doc`<sup>Required</sup> <a name="Doc" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.doc"></a>

```go
func Doc() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.id"></a>

```go
func Id() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2SchemaV2FieldListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableIcebergMetadataIcebergSortOrderFieldsList <a name="S3TablesTableIcebergMetadataIcebergSortOrderFieldsList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableIcebergMetadataIcebergSortOrderFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3TablesTableIcebergMetadataIcebergSortOrderFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get"></a>

```go
func Get(index *f64) S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference <a name="S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetNullOrder">ResetNullOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetSourceId">ResetSourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetTransform">ResetTransform</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDirection` <a name="ResetDirection" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetNullOrder` <a name="ResetNullOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetNullOrder"></a>

```go
func ResetNullOrder()
```

##### `ResetSourceId` <a name="ResetSourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetSourceId"></a>

```go
func ResetSourceId()
```

##### `ResetTransform` <a name="ResetTransform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.resetTransform"></a>

```go
func ResetTransform()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrderInput">NullOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceIdInput">SourceIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transformInput">TransformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrder">NullOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceId">SourceId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transform">Transform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `NullOrderInput`<sup>Optional</sup> <a name="NullOrderInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrderInput"></a>

```go
func NullOrderInput() *string
```

- *Type:* *string

---

##### `SourceIdInput`<sup>Optional</sup> <a name="SourceIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceIdInput"></a>

```go
func SourceIdInput() *f64
```

- *Type:* *f64

---

##### `TransformInput`<sup>Optional</sup> <a name="TransformInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transformInput"></a>

```go
func TransformInput() *string
```

- *Type:* *string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `NullOrder`<sup>Required</sup> <a name="NullOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.nullOrder"></a>

```go
func NullOrder() *string
```

- *Type:* *string

---

##### `SourceId`<sup>Required</sup> <a name="SourceId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.sourceId"></a>

```go
func SourceId() *f64
```

- *Type:* *f64

---

##### `Transform`<sup>Required</sup> <a name="Transform" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.transform"></a>

```go
func Transform() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableIcebergMetadataIcebergSortOrderOutputReference <a name="S3TablesTableIcebergMetadataIcebergSortOrderOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableIcebergMetadataIcebergSortOrderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3TablesTableIcebergMetadataIcebergSortOrderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetOrderId">ResetOrderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.putFields"></a>

```go
func PutFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.putFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetFields"></a>

```go
func ResetFields()
```

##### `ResetOrderId` <a name="ResetOrderId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.resetOrderId"></a>

```go
func ResetOrderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList">S3TablesTableIcebergMetadataIcebergSortOrderFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderIdInput">OrderIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderId">OrderId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fields"></a>

```go
func Fields() S3TablesTableIcebergMetadataIcebergSortOrderFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderFieldsList">S3TablesTableIcebergMetadataIcebergSortOrderFieldsList</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.fieldsInput"></a>

```go
func FieldsInput() interface{}
```

- *Type:* interface{}

---

##### `OrderIdInput`<sup>Optional</sup> <a name="OrderIdInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderIdInput"></a>

```go
func OrderIdInput() *f64
```

- *Type:* *f64

---

##### `OrderId`<sup>Required</sup> <a name="OrderId" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.orderId"></a>

```go
func OrderId() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableIcebergMetadataOutputReference <a name="S3TablesTableIcebergMetadataOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableIcebergMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3TablesTableIcebergMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergPartitionSpec">PutIcebergPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchema">PutIcebergSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2">PutIcebergSchemaV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSortOrder">PutIcebergSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergPartitionSpec">ResetIcebergPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchema">ResetIcebergSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchemaV2">ResetIcebergSchemaV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSortOrder">ResetIcebergSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetTableProperties">ResetTableProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcebergPartitionSpec` <a name="PutIcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergPartitionSpec"></a>

```go
func PutIcebergPartitionSpec(value S3TablesTableIcebergMetadataIcebergPartitionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpec">S3TablesTableIcebergMetadataIcebergPartitionSpec</a>

---

##### `PutIcebergSchema` <a name="PutIcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchema"></a>

```go
func PutIcebergSchema(value S3TablesTableIcebergMetadataIcebergSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchema">S3TablesTableIcebergMetadataIcebergSchema</a>

---

##### `PutIcebergSchemaV2` <a name="PutIcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2"></a>

```go
func PutIcebergSchemaV2(value S3TablesTableIcebergMetadataIcebergSchemaV2)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSchemaV2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2">S3TablesTableIcebergMetadataIcebergSchemaV2</a>

---

##### `PutIcebergSortOrder` <a name="PutIcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSortOrder"></a>

```go
func PutIcebergSortOrder(value S3TablesTableIcebergMetadataIcebergSortOrder)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.putIcebergSortOrder.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrder">S3TablesTableIcebergMetadataIcebergSortOrder</a>

---

##### `ResetIcebergPartitionSpec` <a name="ResetIcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergPartitionSpec"></a>

```go
func ResetIcebergPartitionSpec()
```

##### `ResetIcebergSchema` <a name="ResetIcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchema"></a>

```go
func ResetIcebergSchema()
```

##### `ResetIcebergSchemaV2` <a name="ResetIcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSchemaV2"></a>

```go
func ResetIcebergSchemaV2()
```

##### `ResetIcebergSortOrder` <a name="ResetIcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetIcebergSortOrder"></a>

```go
func ResetIcebergSortOrder()
```

##### `ResetTableProperties` <a name="ResetTableProperties" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.resetTableProperties"></a>

```go
func ResetTableProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpec">IcebergPartitionSpec</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference">S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchema">IcebergSchema</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference">S3TablesTableIcebergMetadataIcebergSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2">IcebergSchemaV2</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference">S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrder">IcebergSortOrder</a></code> | <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference">S3TablesTableIcebergMetadataIcebergSortOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpecInput">IcebergPartitionSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaInput">IcebergSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2Input">IcebergSchemaV2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrderInput">IcebergSortOrderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tablePropertiesInput">TablePropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tableProperties">TableProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IcebergPartitionSpec`<sup>Required</sup> <a name="IcebergPartitionSpec" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpec"></a>

```go
func IcebergPartitionSpec() S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference">S3TablesTableIcebergMetadataIcebergPartitionSpecOutputReference</a>

---

##### `IcebergSchema`<sup>Required</sup> <a name="IcebergSchema" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchema"></a>

```go
func IcebergSchema() S3TablesTableIcebergMetadataIcebergSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaOutputReference">S3TablesTableIcebergMetadataIcebergSchemaOutputReference</a>

---

##### `IcebergSchemaV2`<sup>Required</sup> <a name="IcebergSchemaV2" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2"></a>

```go
func IcebergSchemaV2() S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference">S3TablesTableIcebergMetadataIcebergSchemaV2OutputReference</a>

---

##### `IcebergSortOrder`<sup>Required</sup> <a name="IcebergSortOrder" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrder"></a>

```go
func IcebergSortOrder() S3TablesTableIcebergMetadataIcebergSortOrderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataIcebergSortOrderOutputReference">S3TablesTableIcebergMetadataIcebergSortOrderOutputReference</a>

---

##### `IcebergPartitionSpecInput`<sup>Optional</sup> <a name="IcebergPartitionSpecInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergPartitionSpecInput"></a>

```go
func IcebergPartitionSpecInput() interface{}
```

- *Type:* interface{}

---

##### `IcebergSchemaInput`<sup>Optional</sup> <a name="IcebergSchemaInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaInput"></a>

```go
func IcebergSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `IcebergSchemaV2Input`<sup>Optional</sup> <a name="IcebergSchemaV2Input" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSchemaV2Input"></a>

```go
func IcebergSchemaV2Input() interface{}
```

- *Type:* interface{}

---

##### `IcebergSortOrderInput`<sup>Optional</sup> <a name="IcebergSortOrderInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.icebergSortOrderInput"></a>

```go
func IcebergSortOrderInput() interface{}
```

- *Type:* interface{}

---

##### `TablePropertiesInput`<sup>Optional</sup> <a name="TablePropertiesInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tablePropertiesInput"></a>

```go
func TablePropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TableProperties`<sup>Required</sup> <a name="TableProperties" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.tableProperties"></a>

```go
func TableProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableIcebergMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableSnapshotManagementOutputReference <a name="S3TablesTableSnapshotManagementOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableSnapshotManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3TablesTableSnapshotManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMaxSnapshotAgeHours">ResetMaxSnapshotAgeHours</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMinSnapshotsToKeep">ResetMinSnapshotsToKeep</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxSnapshotAgeHours` <a name="ResetMaxSnapshotAgeHours" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMaxSnapshotAgeHours"></a>

```go
func ResetMaxSnapshotAgeHours()
```

##### `ResetMinSnapshotsToKeep` <a name="ResetMinSnapshotsToKeep" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetMinSnapshotsToKeep"></a>

```go
func ResetMinSnapshotsToKeep()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHoursInput">MaxSnapshotAgeHoursInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeepInput">MinSnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHours">MaxSnapshotAgeHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeep">MinSnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxSnapshotAgeHoursInput`<sup>Optional</sup> <a name="MaxSnapshotAgeHoursInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHoursInput"></a>

```go
func MaxSnapshotAgeHoursInput() *f64
```

- *Type:* *f64

---

##### `MinSnapshotsToKeepInput`<sup>Optional</sup> <a name="MinSnapshotsToKeepInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeepInput"></a>

```go
func MinSnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `MaxSnapshotAgeHours`<sup>Required</sup> <a name="MaxSnapshotAgeHours" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.maxSnapshotAgeHours"></a>

```go
func MaxSnapshotAgeHours() *f64
```

- *Type:* *f64

---

##### `MinSnapshotsToKeep`<sup>Required</sup> <a name="MinSnapshotsToKeep" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.minSnapshotsToKeep"></a>

```go
func MinSnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableSnapshotManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableStorageClassConfigurationOutputReference <a name="S3TablesTableStorageClassConfigurationOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableStorageClassConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3TablesTableStorageClassConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resetStorageClass">ResetStorageClass</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageClass` <a name="ResetStorageClass" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.resetStorageClass"></a>

```go
func ResetStorageClass()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClassInput">StorageClassInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClass">StorageClass</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageClassInput`<sup>Optional</sup> <a name="StorageClassInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClassInput"></a>

```go
func StorageClassInput() *string
```

- *Type:* *string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.storageClass"></a>

```go
func StorageClass() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableStorageClassConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableTagsList <a name="S3TablesTableTagsList" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3TablesTableTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.get"></a>

```go
func Get(index *f64) S3TablesTableTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3TablesTableTagsOutputReference <a name="S3TablesTableTagsOutputReference" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3tablestable"

s3tablestable.NewS3TablesTableTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3TablesTableTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3TablesTable.S3TablesTableTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



