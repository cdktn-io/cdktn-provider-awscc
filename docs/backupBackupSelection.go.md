# `backupBackupSelection` Submodule <a name="`backupBackupSelection` Submodule" id="@cdktn/provider-awscc.backupBackupSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupSelection <a name="BackupBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection awscc_backup_backup_selection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.NewBackupBackupSelection(scope Construct, id *string, config BackupBackupSelectionConfig) BackupBackupSelection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig">BackupBackupSelectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig">BackupBackupSelectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection">PutBackupSelection</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupSelection` <a name="PutBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection"></a>

```go
func PutBackupSelection(value BackupBackupSelectionBackupSelection)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.putBackupSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupBackupSelection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.BackupBackupSelection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.BackupBackupSelection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.BackupBackupSelection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.BackupBackupSelection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BackupBackupSelection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BackupBackupSelection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BackupBackupSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelection">BackupSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference">BackupBackupSelectionBackupSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionId">BackupSelectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.selectionId">SelectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanIdInput">BackupPlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionInput">BackupSelectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanId">BackupPlanId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupSelection`<sup>Required</sup> <a name="BackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelection"></a>

```go
func BackupSelection() BackupBackupSelectionBackupSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference">BackupBackupSelectionBackupSelectionOutputReference</a>

---

##### `BackupSelectionId`<sup>Required</sup> <a name="BackupSelectionId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionId"></a>

```go
func BackupSelectionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SelectionId`<sup>Required</sup> <a name="SelectionId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.selectionId"></a>

```go
func SelectionId() *string
```

- *Type:* *string

---

##### `BackupPlanIdInput`<sup>Optional</sup> <a name="BackupPlanIdInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanIdInput"></a>

```go
func BackupPlanIdInput() *string
```

- *Type:* *string

---

##### `BackupSelectionInput`<sup>Optional</sup> <a name="BackupSelectionInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupSelectionInput"></a>

```go
func BackupSelectionInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPlanId`<sup>Required</sup> <a name="BackupPlanId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.backupPlanId"></a>

```go
func BackupPlanId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupSelectionBackupSelection <a name="BackupBackupSelectionBackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

&backupbackupselection.BackupBackupSelectionBackupSelection {
	IamRoleArn: *string,
	SelectionName: *string,
	Conditions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions,
	ListOfTags: interface{},
	NotResources: *[]*string,
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#iam_role_arn BackupBackupSelection#iam_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.selectionName">SelectionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#selection_name BackupBackupSelection#selection_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#conditions BackupBackupSelection#conditions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.listOfTags">ListOfTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#list_of_tags BackupBackupSelection#list_of_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.notResources">NotResources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#not_resources BackupBackupSelection#not_resources}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.resources">Resources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#resources BackupBackupSelection#resources}. |

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.iamRoleArn"></a>

```go
IamRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#iam_role_arn BackupBackupSelection#iam_role_arn}.

---

##### `SelectionName`<sup>Required</sup> <a name="SelectionName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.selectionName"></a>

```go
SelectionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#selection_name BackupBackupSelection#selection_name}.

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.conditions"></a>

```go
Conditions BackupBackupSelectionBackupSelectionConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#conditions BackupBackupSelection#conditions}.

---

##### `ListOfTags`<sup>Optional</sup> <a name="ListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.listOfTags"></a>

```go
ListOfTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#list_of_tags BackupBackupSelection#list_of_tags}.

---

##### `NotResources`<sup>Optional</sup> <a name="NotResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.notResources"></a>

```go
NotResources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#not_resources BackupBackupSelection#not_resources}.

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#resources BackupBackupSelection#resources}.

---

### BackupBackupSelectionBackupSelectionConditions <a name="BackupBackupSelectionBackupSelectionConditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

&backupbackupselection.BackupBackupSelectionBackupSelectionConditions {
	StringEquals: interface{},
	StringLike: interface{},
	StringNotEquals: interface{},
	StringNotLike: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringEquals">StringEquals</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_equals BackupBackupSelection#string_equals}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringLike">StringLike</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_like BackupBackupSelection#string_like}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotEquals">StringNotEquals</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_not_equals BackupBackupSelection#string_not_equals}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotLike">StringNotLike</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_not_like BackupBackupSelection#string_not_like}. |

---

##### `StringEquals`<sup>Optional</sup> <a name="StringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringEquals"></a>

```go
StringEquals interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_equals BackupBackupSelection#string_equals}.

---

##### `StringLike`<sup>Optional</sup> <a name="StringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringLike"></a>

```go
StringLike interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_like BackupBackupSelection#string_like}.

---

##### `StringNotEquals`<sup>Optional</sup> <a name="StringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotEquals"></a>

```go
StringNotEquals interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_not_equals BackupBackupSelection#string_not_equals}.

---

##### `StringNotLike`<sup>Optional</sup> <a name="StringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions.property.stringNotLike"></a>

```go
StringNotLike interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#string_not_like BackupBackupSelection#string_not_like}.

---

### BackupBackupSelectionBackupSelectionConditionsStringEquals <a name="BackupBackupSelectionBackupSelectionConditionsStringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

&backupbackupselection.BackupBackupSelectionBackupSelectionConditionsStringEquals {
	ConditionKey: *string,
	ConditionValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionKey">ConditionKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionValue">ConditionValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `ConditionKey`<sup>Optional</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionKey"></a>

```go
ConditionKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `ConditionValue`<sup>Optional</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEquals.property.conditionValue"></a>

```go
ConditionValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringLike <a name="BackupBackupSelectionBackupSelectionConditionsStringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

&backupbackupselection.BackupBackupSelectionBackupSelectionConditionsStringLike {
	ConditionKey: *string,
	ConditionValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionKey">ConditionKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionValue">ConditionValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `ConditionKey`<sup>Optional</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionKey"></a>

```go
ConditionKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `ConditionValue`<sup>Optional</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLike.property.conditionValue"></a>

```go
ConditionValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringNotEquals <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

&backupbackupselection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals {
	ConditionKey: *string,
	ConditionValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionKey">ConditionKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionValue">ConditionValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `ConditionKey`<sup>Optional</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionKey"></a>

```go
ConditionKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `ConditionValue`<sup>Optional</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEquals.property.conditionValue"></a>

```go
ConditionValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionConditionsStringNotLike <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

&backupbackupselection.BackupBackupSelectionBackupSelectionConditionsStringNotLike {
	ConditionKey: *string,
	ConditionValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionKey">ConditionKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionValue">ConditionValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `ConditionKey`<sup>Optional</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionKey"></a>

```go
ConditionKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `ConditionValue`<sup>Optional</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLike.property.conditionValue"></a>

```go
ConditionValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionBackupSelectionListOfTags <a name="BackupBackupSelectionBackupSelectionListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

&backupbackupselection.BackupBackupSelectionBackupSelectionListOfTags {
	ConditionKey: *string,
	ConditionType: *string,
	ConditionValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionKey">ConditionKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionType">ConditionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_type BackupBackupSelection#condition_type}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionValue">ConditionValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}. |

---

##### `ConditionKey`<sup>Optional</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionKey"></a>

```go
ConditionKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_key BackupBackupSelection#condition_key}.

---

##### `ConditionType`<sup>Optional</sup> <a name="ConditionType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionType"></a>

```go
ConditionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_type BackupBackupSelection#condition_type}.

---

##### `ConditionValue`<sup>Optional</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTags.property.conditionValue"></a>

```go
ConditionValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#condition_value BackupBackupSelection#condition_value}.

---

### BackupBackupSelectionConfig <a name="BackupBackupSelectionConfig" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

&backupbackupselection.BackupBackupSelectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BackupPlanId: *string,
	BackupSelection: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.backupBackupSelection.BackupBackupSelectionBackupSelection,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupPlanId">BackupPlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupSelection">BackupSelection</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPlanId`<sup>Required</sup> <a name="BackupPlanId" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupPlanId"></a>

```go
BackupPlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#backup_plan_id BackupBackupSelection#backup_plan_id}.

---

##### `BackupSelection`<sup>Required</sup> <a name="BackupSelection" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionConfig.property.backupSelection"></a>

```go
BackupSelection BackupBackupSelectionBackupSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelection">BackupBackupSelectionBackupSelection</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/backup_backup_selection#backup_selection BackupBackupSelection#backup_selection}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupSelectionBackupSelectionConditionsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.NewBackupBackupSelectionBackupSelectionConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupBackupSelectionBackupSelectionConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals">PutStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike">PutStringLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals">PutStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike">PutStringNotLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringEquals">ResetStringEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringLike">ResetStringLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotEquals">ResetStringNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotLike">ResetStringNotLike</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStringEquals` <a name="PutStringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals"></a>

```go
func PutStringEquals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringEquals.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringLike` <a name="PutStringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike"></a>

```go
func PutStringLike(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringLike.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringNotEquals` <a name="PutStringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals"></a>

```go
func PutStringNotEquals(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotEquals.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStringNotLike` <a name="PutStringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike"></a>

```go
func PutStringNotLike(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.putStringNotLike.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetStringEquals` <a name="ResetStringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringEquals"></a>

```go
func ResetStringEquals()
```

##### `ResetStringLike` <a name="ResetStringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringLike"></a>

```go
func ResetStringLike()
```

##### `ResetStringNotEquals` <a name="ResetStringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotEquals"></a>

```go
func ResetStringNotEquals()
```

##### `ResetStringNotLike` <a name="ResetStringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.resetStringNotLike"></a>

```go
func ResetStringNotLike()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEquals">StringEquals</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList">BackupBackupSelectionBackupSelectionConditionsStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLike">StringLike</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList">BackupBackupSelectionBackupSelectionConditionsStringLikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEquals">StringNotEquals</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList">BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLike">StringNotLike</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList">BackupBackupSelectionBackupSelectionConditionsStringNotLikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEqualsInput">StringEqualsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLikeInput">StringLikeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEqualsInput">StringNotEqualsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLikeInput">StringNotLikeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StringEquals`<sup>Required</sup> <a name="StringEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEquals"></a>

```go
func StringEquals() BackupBackupSelectionBackupSelectionConditionsStringEqualsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList">BackupBackupSelectionBackupSelectionConditionsStringEqualsList</a>

---

##### `StringLike`<sup>Required</sup> <a name="StringLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLike"></a>

```go
func StringLike() BackupBackupSelectionBackupSelectionConditionsStringLikeList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList">BackupBackupSelectionBackupSelectionConditionsStringLikeList</a>

---

##### `StringNotEquals`<sup>Required</sup> <a name="StringNotEquals" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEquals"></a>

```go
func StringNotEquals() BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList">BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList</a>

---

##### `StringNotLike`<sup>Required</sup> <a name="StringNotLike" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLike"></a>

```go
func StringNotLike() BackupBackupSelectionBackupSelectionConditionsStringNotLikeList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList">BackupBackupSelectionBackupSelectionConditionsStringNotLikeList</a>

---

##### `StringEqualsInput`<sup>Optional</sup> <a name="StringEqualsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringEqualsInput"></a>

```go
func StringEqualsInput() interface{}
```

- *Type:* interface{}

---

##### `StringLikeInput`<sup>Optional</sup> <a name="StringLikeInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringLikeInput"></a>

```go
func StringLikeInput() interface{}
```

- *Type:* interface{}

---

##### `StringNotEqualsInput`<sup>Optional</sup> <a name="StringNotEqualsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotEqualsInput"></a>

```go
func StringNotEqualsInput() interface{}
```

- *Type:* interface{}

---

##### `StringNotLikeInput`<sup>Optional</sup> <a name="StringNotLikeInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.stringNotLikeInput"></a>

```go
func StringNotLikeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupSelectionBackupSelectionConditionsStringEqualsList <a name="BackupBackupSelectionBackupSelectionConditionsStringEqualsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.NewBackupBackupSelectionBackupSelectionConditionsStringEqualsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupBackupSelectionBackupSelectionConditionsStringEqualsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get"></a>

```go
func Get(index *f64) BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.NewBackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionKey">ResetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionValue">ResetConditionValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionKey` <a name="ResetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionKey"></a>

```go
func ResetConditionKey()
```

##### `ResetConditionValue` <a name="ResetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.resetConditionValue"></a>

```go
func ResetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKeyInput">ConditionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValueInput">ConditionValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKey">ConditionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValue">ConditionValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionKeyInput`<sup>Optional</sup> <a name="ConditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKeyInput"></a>

```go
func ConditionKeyInput() *string
```

- *Type:* *string

---

##### `ConditionValueInput`<sup>Optional</sup> <a name="ConditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValueInput"></a>

```go
func ConditionValueInput() *string
```

- *Type:* *string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionKey"></a>

```go
func ConditionKey() *string
```

- *Type:* *string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.conditionValue"></a>

```go
func ConditionValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringEqualsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupSelectionBackupSelectionConditionsStringLikeList <a name="BackupBackupSelectionBackupSelectionConditionsStringLikeList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.NewBackupBackupSelectionBackupSelectionConditionsStringLikeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupBackupSelectionBackupSelectionConditionsStringLikeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get"></a>

```go
func Get(index *f64) BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.NewBackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionKey">ResetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionValue">ResetConditionValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionKey` <a name="ResetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionKey"></a>

```go
func ResetConditionKey()
```

##### `ResetConditionValue` <a name="ResetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.resetConditionValue"></a>

```go
func ResetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKeyInput">ConditionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValueInput">ConditionValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKey">ConditionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValue">ConditionValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionKeyInput`<sup>Optional</sup> <a name="ConditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKeyInput"></a>

```go
func ConditionKeyInput() *string
```

- *Type:* *string

---

##### `ConditionValueInput`<sup>Optional</sup> <a name="ConditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValueInput"></a>

```go
func ConditionValueInput() *string
```

- *Type:* *string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionKey"></a>

```go
func ConditionKey() *string
```

- *Type:* *string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.conditionValue"></a>

```go
func ConditionValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringLikeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.NewBackupBackupSelectionBackupSelectionConditionsStringNotEqualsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get"></a>

```go
func Get(index *f64) BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.NewBackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionKey">ResetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionValue">ResetConditionValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionKey` <a name="ResetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionKey"></a>

```go
func ResetConditionKey()
```

##### `ResetConditionValue` <a name="ResetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.resetConditionValue"></a>

```go
func ResetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKeyInput">ConditionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValueInput">ConditionValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKey">ConditionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValue">ConditionValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionKeyInput`<sup>Optional</sup> <a name="ConditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKeyInput"></a>

```go
func ConditionKeyInput() *string
```

- *Type:* *string

---

##### `ConditionValueInput`<sup>Optional</sup> <a name="ConditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValueInput"></a>

```go
func ConditionValueInput() *string
```

- *Type:* *string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionKey"></a>

```go
func ConditionKey() *string
```

- *Type:* *string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.conditionValue"></a>

```go
func ConditionValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotEqualsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupSelectionBackupSelectionConditionsStringNotLikeList <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLikeList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.NewBackupBackupSelectionBackupSelectionConditionsStringNotLikeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupBackupSelectionBackupSelectionConditionsStringNotLikeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get"></a>

```go
func Get(index *f64) BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference <a name="BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.NewBackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionKey">ResetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionValue">ResetConditionValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionKey` <a name="ResetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionKey"></a>

```go
func ResetConditionKey()
```

##### `ResetConditionValue` <a name="ResetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.resetConditionValue"></a>

```go
func ResetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKeyInput">ConditionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValueInput">ConditionValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKey">ConditionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValue">ConditionValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionKeyInput`<sup>Optional</sup> <a name="ConditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKeyInput"></a>

```go
func ConditionKeyInput() *string
```

- *Type:* *string

---

##### `ConditionValueInput`<sup>Optional</sup> <a name="ConditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValueInput"></a>

```go
func ConditionValueInput() *string
```

- *Type:* *string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionKey"></a>

```go
func ConditionKey() *string
```

- *Type:* *string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.conditionValue"></a>

```go
func ConditionValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsStringNotLikeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupSelectionBackupSelectionListOfTagsList <a name="BackupBackupSelectionBackupSelectionListOfTagsList" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.NewBackupBackupSelectionBackupSelectionListOfTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupBackupSelectionBackupSelectionListOfTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get"></a>

```go
func Get(index *f64) BackupBackupSelectionBackupSelectionListOfTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupSelectionBackupSelectionListOfTagsOutputReference <a name="BackupBackupSelectionBackupSelectionListOfTagsOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.NewBackupBackupSelectionBackupSelectionListOfTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupBackupSelectionBackupSelectionListOfTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionKey">ResetConditionKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionType">ResetConditionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionValue">ResetConditionValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionKey` <a name="ResetConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionKey"></a>

```go
func ResetConditionKey()
```

##### `ResetConditionType` <a name="ResetConditionType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionType"></a>

```go
func ResetConditionType()
```

##### `ResetConditionValue` <a name="ResetConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.resetConditionValue"></a>

```go
func ResetConditionValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKeyInput">ConditionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionTypeInput">ConditionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValueInput">ConditionValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKey">ConditionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionType">ConditionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValue">ConditionValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionKeyInput`<sup>Optional</sup> <a name="ConditionKeyInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKeyInput"></a>

```go
func ConditionKeyInput() *string
```

- *Type:* *string

---

##### `ConditionTypeInput`<sup>Optional</sup> <a name="ConditionTypeInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionTypeInput"></a>

```go
func ConditionTypeInput() *string
```

- *Type:* *string

---

##### `ConditionValueInput`<sup>Optional</sup> <a name="ConditionValueInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValueInput"></a>

```go
func ConditionValueInput() *string
```

- *Type:* *string

---

##### `ConditionKey`<sup>Required</sup> <a name="ConditionKey" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionKey"></a>

```go
func ConditionKey() *string
```

- *Type:* *string

---

##### `ConditionType`<sup>Required</sup> <a name="ConditionType" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionType"></a>

```go
func ConditionType() *string
```

- *Type:* *string

---

##### `ConditionValue`<sup>Required</sup> <a name="ConditionValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.conditionValue"></a>

```go
func ConditionValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupSelectionBackupSelectionOutputReference <a name="BackupBackupSelectionBackupSelectionOutputReference" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupselection"

backupbackupselection.NewBackupBackupSelectionBackupSelectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupBackupSelectionBackupSelectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags">PutListOfTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetListOfTags">ResetListOfTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetNotResources">ResetNotResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions"></a>

```go
func PutConditions(value BackupBackupSelectionBackupSelectionConditions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditions">BackupBackupSelectionBackupSelectionConditions</a>

---

##### `PutListOfTags` <a name="PutListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags"></a>

```go
func PutListOfTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.putListOfTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetListOfTags` <a name="ResetListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetListOfTags"></a>

```go
func ResetListOfTags()
```

##### `ResetNotResources` <a name="ResetNotResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetNotResources"></a>

```go
func ResetNotResources()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference">BackupBackupSelectionBackupSelectionConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTags">ListOfTags</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList">BackupBackupSelectionBackupSelectionListOfTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArnInput">IamRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTagsInput">ListOfTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResourcesInput">NotResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionNameInput">SelectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArn">IamRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResources">NotResources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionName">SelectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditions"></a>

```go
func Conditions() BackupBackupSelectionBackupSelectionConditionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionConditionsOutputReference">BackupBackupSelectionBackupSelectionConditionsOutputReference</a>

---

##### `ListOfTags`<sup>Required</sup> <a name="ListOfTags" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTags"></a>

```go
func ListOfTags() BackupBackupSelectionBackupSelectionListOfTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionListOfTagsList">BackupBackupSelectionBackupSelectionListOfTagsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `IamRoleArnInput`<sup>Optional</sup> <a name="IamRoleArnInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArnInput"></a>

```go
func IamRoleArnInput() *string
```

- *Type:* *string

---

##### `ListOfTagsInput`<sup>Optional</sup> <a name="ListOfTagsInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.listOfTagsInput"></a>

```go
func ListOfTagsInput() interface{}
```

- *Type:* interface{}

---

##### `NotResourcesInput`<sup>Optional</sup> <a name="NotResourcesInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResourcesInput"></a>

```go
func NotResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SelectionNameInput`<sup>Optional</sup> <a name="SelectionNameInput" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionNameInput"></a>

```go
func SelectionNameInput() *string
```

- *Type:* *string

---

##### `IamRoleArn`<sup>Required</sup> <a name="IamRoleArn" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.iamRoleArn"></a>

```go
func IamRoleArn() *string
```

- *Type:* *string

---

##### `NotResources`<sup>Required</sup> <a name="NotResources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.notResources"></a>

```go
func NotResources() *[]*string
```

- *Type:* *[]*string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `SelectionName`<sup>Required</sup> <a name="SelectionName" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.selectionName"></a>

```go
func SelectionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupSelection.BackupBackupSelectionBackupSelectionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



