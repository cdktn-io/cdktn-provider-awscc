# `connectDataTableRecord` Submodule <a name="`connectDataTableRecord` Submodule" id="@cdktn/provider-awscc.connectDataTableRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectDataTableRecord <a name="ConnectDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record awscc_connect_data_table_record}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

connectdatatablerecord.NewConnectDataTableRecord(scope Construct, id *string, config ConnectDataTableRecordConfig) ConnectDataTableRecord
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig">ConnectDataTableRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig">ConnectDataTableRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord">PutDataTableRecord</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataTableRecord` <a name="PutDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord"></a>

```go
func PutDataTableRecord(value ConnectDataTableRecordDataTableRecord)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.putDataTableRecord.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConnectDataTableRecord resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

connectdatatablerecord.ConnectDataTableRecord_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

connectdatatablerecord.ConnectDataTableRecord_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

connectdatatablerecord.ConnectDataTableRecord_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

connectdatatablerecord.ConnectDataTableRecord_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConnectDataTableRecord resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConnectDataTableRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConnectDataTableRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConnectDataTableRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecord">DataTableRecord</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference">ConnectDataTableRecordDataTableRecordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.recordId">RecordId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArnInput">DataTableArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecordInput">DataTableRecordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArn">DataTableArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataTableRecord`<sup>Required</sup> <a name="DataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecord"></a>

```go
func DataTableRecord() ConnectDataTableRecordDataTableRecordOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference">ConnectDataTableRecordDataTableRecordOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RecordId`<sup>Required</sup> <a name="RecordId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.recordId"></a>

```go
func RecordId() *string
```

- *Type:* *string

---

##### `DataTableArnInput`<sup>Optional</sup> <a name="DataTableArnInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArnInput"></a>

```go
func DataTableArnInput() *string
```

- *Type:* *string

---

##### `DataTableRecordInput`<sup>Optional</sup> <a name="DataTableRecordInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableRecordInput"></a>

```go
func DataTableRecordInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `DataTableArn`<sup>Required</sup> <a name="DataTableArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.dataTableArn"></a>

```go
func DataTableArn() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecord.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectDataTableRecordConfig <a name="ConnectDataTableRecordConfig" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

&connectdatatablerecord.ConnectDataTableRecordConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataTableArn: *string,
	DataTableRecord: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord,
	InstanceArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableArn">DataTableArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableRecord">DataTableRecord</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataTableArn`<sup>Required</sup> <a name="DataTableArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableArn"></a>

```go
DataTableArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_arn ConnectDataTableRecord#data_table_arn}.

---

##### `DataTableRecord`<sup>Required</sup> <a name="DataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.dataTableRecord"></a>

```go
DataTableRecord ConnectDataTableRecordDataTableRecord
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord">ConnectDataTableRecordDataTableRecord</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#data_table_record ConnectDataTableRecord#data_table_record}.

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#instance_arn ConnectDataTableRecord#instance_arn}.

---

### ConnectDataTableRecordDataTableRecord <a name="ConnectDataTableRecordDataTableRecord" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

&connectdatatablerecord.ConnectDataTableRecordDataTableRecord {
	Values: interface{},
	PrimaryValues: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.values">Values</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#values ConnectDataTableRecord#values}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.primaryValues">PrimaryValues</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#primary_values ConnectDataTableRecord#primary_values}. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.values"></a>

```go
Values interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#values ConnectDataTableRecord#values}.

---

##### `PrimaryValues`<sup>Optional</sup> <a name="PrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecord.property.primaryValues"></a>

```go
PrimaryValues interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#primary_values ConnectDataTableRecord#primary_values}.

---

### ConnectDataTableRecordDataTableRecordPrimaryValues <a name="ConnectDataTableRecordDataTableRecordPrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

&connectdatatablerecord.ConnectDataTableRecordDataTableRecordPrimaryValues {
	AttributeId: *string,
	AttributeValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeId">AttributeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}. |

---

##### `AttributeId`<sup>Optional</sup> <a name="AttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeId"></a>

```go
AttributeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}.

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValues.property.attributeValue"></a>

```go
AttributeValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}.

---

### ConnectDataTableRecordDataTableRecordValues <a name="ConnectDataTableRecordDataTableRecordValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

&connectdatatablerecord.ConnectDataTableRecordDataTableRecordValues {
	AttributeId: *string,
	AttributeValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeId">AttributeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}. |

---

##### `AttributeId`<sup>Optional</sup> <a name="AttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeId"></a>

```go
AttributeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_id ConnectDataTableRecord#attribute_id}.

---

##### `AttributeValue`<sup>Optional</sup> <a name="AttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValues.property.attributeValue"></a>

```go
AttributeValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/connect_data_table_record#attribute_value ConnectDataTableRecord#attribute_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectDataTableRecordDataTableRecordOutputReference <a name="ConnectDataTableRecordDataTableRecordOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

connectdatatablerecord.NewConnectDataTableRecordDataTableRecordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConnectDataTableRecordDataTableRecordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues">PutPrimaryValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues">PutValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resetPrimaryValues">ResetPrimaryValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimaryValues` <a name="PutPrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues"></a>

```go
func PutPrimaryValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putPrimaryValues.parameter.value"></a>

- *Type:* interface{}

---

##### `PutValues` <a name="PutValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues"></a>

```go
func PutValues(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.putValues.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPrimaryValues` <a name="ResetPrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.resetPrimaryValues"></a>

```go
func ResetPrimaryValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValues">PrimaryValues</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList">ConnectDataTableRecordDataTableRecordPrimaryValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.values">Values</a></code> | <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList">ConnectDataTableRecordDataTableRecordValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValuesInput">PrimaryValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.valuesInput">ValuesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryValues`<sup>Required</sup> <a name="PrimaryValues" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValues"></a>

```go
func PrimaryValues() ConnectDataTableRecordDataTableRecordPrimaryValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList">ConnectDataTableRecordDataTableRecordPrimaryValuesList</a>

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.values"></a>

```go
func Values() ConnectDataTableRecordDataTableRecordValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList">ConnectDataTableRecordDataTableRecordValuesList</a>

---

##### `PrimaryValuesInput`<sup>Optional</sup> <a name="PrimaryValuesInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.primaryValuesInput"></a>

```go
func PrimaryValuesInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.valuesInput"></a>

```go
func ValuesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectDataTableRecordDataTableRecordPrimaryValuesList <a name="ConnectDataTableRecordDataTableRecordPrimaryValuesList" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

connectdatatablerecord.NewConnectDataTableRecordDataTableRecordPrimaryValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectDataTableRecordDataTableRecordPrimaryValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get"></a>

```go
func Get(index *f64) ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference <a name="ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

connectdatatablerecord.NewConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeId">ResetAttributeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeId` <a name="ResetAttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeId"></a>

```go
func ResetAttributeId()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.resetAttributeValue"></a>

```go
func ResetAttributeValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeIdInput">AttributeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeId">AttributeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeIdInput`<sup>Optional</sup> <a name="AttributeIdInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeIdInput"></a>

```go
func AttributeIdInput() *string
```

- *Type:* *string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValueInput"></a>

```go
func AttributeValueInput() *string
```

- *Type:* *string

---

##### `AttributeId`<sup>Required</sup> <a name="AttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeId"></a>

```go
func AttributeId() *string
```

- *Type:* *string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.attributeValue"></a>

```go
func AttributeValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordPrimaryValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectDataTableRecordDataTableRecordValuesList <a name="ConnectDataTableRecordDataTableRecordValuesList" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

connectdatatablerecord.NewConnectDataTableRecordDataTableRecordValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ConnectDataTableRecordDataTableRecordValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get"></a>

```go
func Get(index *f64) ConnectDataTableRecordDataTableRecordValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConnectDataTableRecordDataTableRecordValuesOutputReference <a name="ConnectDataTableRecordDataTableRecordValuesOutputReference" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/connectdatatablerecord"

connectdatatablerecord.NewConnectDataTableRecordDataTableRecordValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ConnectDataTableRecordDataTableRecordValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeId">ResetAttributeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeValue">ResetAttributeValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeId` <a name="ResetAttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeId"></a>

```go
func ResetAttributeId()
```

##### `ResetAttributeValue` <a name="ResetAttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.resetAttributeValue"></a>

```go
func ResetAttributeValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeIdInput">AttributeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValueInput">AttributeValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeId">AttributeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValue">AttributeValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeIdInput`<sup>Optional</sup> <a name="AttributeIdInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeIdInput"></a>

```go
func AttributeIdInput() *string
```

- *Type:* *string

---

##### `AttributeValueInput`<sup>Optional</sup> <a name="AttributeValueInput" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValueInput"></a>

```go
func AttributeValueInput() *string
```

- *Type:* *string

---

##### `AttributeId`<sup>Required</sup> <a name="AttributeId" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeId"></a>

```go
func AttributeId() *string
```

- *Type:* *string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.attributeValue"></a>

```go
func AttributeValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.connectDataTableRecord.ConnectDataTableRecordDataTableRecordValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



