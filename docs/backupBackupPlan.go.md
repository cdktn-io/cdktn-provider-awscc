# `backupBackupPlan` Submodule <a name="`backupBackupPlan` Submodule" id="@cdktn/provider-awscc.backupBackupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupBackupPlan <a name="BackupBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan awscc_backup_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlan(scope Construct, id *string, config BackupBackupPlanConfig) BackupBackupPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig">BackupBackupPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig">BackupBackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan">PutBackupPlan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetBackupPlanTags">ResetBackupPlanTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBackupPlan` <a name="PutBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan"></a>

```go
func PutBackupPlan(value BackupBackupPlanBackupPlan)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.putBackupPlan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

---

##### `ResetBackupPlanTags` <a name="ResetBackupPlanTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.resetBackupPlanTags"></a>

```go
func ResetBackupPlanTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupBackupPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.BackupBackupPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.BackupBackupPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.BackupBackupPlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.BackupBackupPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BackupBackupPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BackupBackupPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BackupBackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BackupBackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlan">BackupPlan</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference">BackupBackupPlanBackupPlanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanArn">BackupPlanArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanId">BackupPlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanInput">BackupPlanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTagsInput">BackupPlanTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTags">BackupPlanTags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlan"></a>

```go
func BackupPlan() BackupBackupPlanBackupPlanOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference">BackupBackupPlanBackupPlanOutputReference</a>

---

##### `BackupPlanArn`<sup>Required</sup> <a name="BackupPlanArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanArn"></a>

```go
func BackupPlanArn() *string
```

- *Type:* *string

---

##### `BackupPlanId`<sup>Required</sup> <a name="BackupPlanId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanId"></a>

```go
func BackupPlanId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `BackupPlanInput`<sup>Optional</sup> <a name="BackupPlanInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanInput"></a>

```go
func BackupPlanInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPlanTagsInput`<sup>Optional</sup> <a name="BackupPlanTagsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTagsInput"></a>

```go
func BackupPlanTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BackupPlanTags`<sup>Required</sup> <a name="BackupPlanTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.backupPlanTags"></a>

```go
func BackupPlanTags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupBackupPlanBackupPlan <a name="BackupBackupPlanBackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

&backupbackupplan.BackupBackupPlanBackupPlan {
	BackupPlanName: *string,
	BackupPlanRule: interface{},
	AdvancedBackupSettings: interface{},
	ScanSettings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanName">BackupPlanName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#backup_plan_name BackupBackupPlan#backup_plan_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanRule">BackupPlanRule</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#backup_plan_rule BackupBackupPlan#backup_plan_rule}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.advancedBackupSettings">AdvancedBackupSettings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#advanced_backup_settings BackupBackupPlan#advanced_backup_settings}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.scanSettings">ScanSettings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#scan_settings BackupBackupPlan#scan_settings}. |

---

##### `BackupPlanName`<sup>Required</sup> <a name="BackupPlanName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanName"></a>

```go
BackupPlanName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#backup_plan_name BackupBackupPlan#backup_plan_name}.

---

##### `BackupPlanRule`<sup>Required</sup> <a name="BackupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.backupPlanRule"></a>

```go
BackupPlanRule interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#backup_plan_rule BackupBackupPlan#backup_plan_rule}.

---

##### `AdvancedBackupSettings`<sup>Optional</sup> <a name="AdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.advancedBackupSettings"></a>

```go
AdvancedBackupSettings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#advanced_backup_settings BackupBackupPlan#advanced_backup_settings}.

---

##### `ScanSettings`<sup>Optional</sup> <a name="ScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan.property.scanSettings"></a>

```go
ScanSettings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#scan_settings BackupBackupPlan#scan_settings}.

---

### BackupBackupPlanBackupPlanAdvancedBackupSettings <a name="BackupBackupPlanBackupPlanAdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

&backupbackupplan.BackupBackupPlanBackupPlanAdvancedBackupSettings {
	BackupOptions: *string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.backupOptions">BackupOptions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#backup_options BackupBackupPlan#backup_options}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#resource_type BackupBackupPlan#resource_type}. |

---

##### `BackupOptions`<sup>Optional</sup> <a name="BackupOptions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.backupOptions"></a>

```go
BackupOptions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#backup_options BackupBackupPlan#backup_options}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettings.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#resource_type BackupBackupPlan#resource_type}.

---

### BackupBackupPlanBackupPlanBackupPlanRule <a name="BackupBackupPlanBackupPlanBackupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

&backupbackupplan.BackupBackupPlanBackupPlanBackupPlanRule {
	RuleName: *string,
	TargetBackupVault: *string,
	CompletionWindowMinutes: *f64,
	CopyActions: interface{},
	EnableContinuousBackup: interface{},
	IndexActions: interface{},
	Lifecycle: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle,
	RecoveryPointTags: *map[string]*string,
	ScanActions: interface{},
	ScheduleExpression: *string,
	ScheduleExpressionTimezone: *string,
	StartWindowMinutes: *f64,
	TargetLogicallyAirGappedBackupVaultArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.ruleName">RuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#rule_name BackupBackupPlan#rule_name}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetBackupVault">TargetBackupVault</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#target_backup_vault BackupBackupPlan#target_backup_vault}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.completionWindowMinutes">CompletionWindowMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#completion_window_minutes BackupBackupPlan#completion_window_minutes}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.copyActions">CopyActions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#copy_actions BackupBackupPlan#copy_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.enableContinuousBackup">EnableContinuousBackup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#enable_continuous_backup BackupBackupPlan#enable_continuous_backup}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.indexActions">IndexActions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#index_actions BackupBackupPlan#index_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.recoveryPointTags">RecoveryPointTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#recovery_point_tags BackupBackupPlan#recovery_point_tags}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scanActions">ScanActions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#scan_actions BackupBackupPlan#scan_actions}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#schedule_expression BackupBackupPlan#schedule_expression}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#schedule_expression_timezone BackupBackupPlan#schedule_expression_timezone}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.startWindowMinutes">StartWindowMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#start_window_minutes BackupBackupPlan#start_window_minutes}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetLogicallyAirGappedBackupVaultArn">TargetLogicallyAirGappedBackupVaultArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#target_logically_air_gapped_backup_vault_arn BackupBackupPlan#target_logically_air_gapped_backup_vault_arn}. |

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#rule_name BackupBackupPlan#rule_name}.

---

##### `TargetBackupVault`<sup>Required</sup> <a name="TargetBackupVault" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetBackupVault"></a>

```go
TargetBackupVault *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#target_backup_vault BackupBackupPlan#target_backup_vault}.

---

##### `CompletionWindowMinutes`<sup>Optional</sup> <a name="CompletionWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.completionWindowMinutes"></a>

```go
CompletionWindowMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#completion_window_minutes BackupBackupPlan#completion_window_minutes}.

---

##### `CopyActions`<sup>Optional</sup> <a name="CopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.copyActions"></a>

```go
CopyActions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#copy_actions BackupBackupPlan#copy_actions}.

---

##### `EnableContinuousBackup`<sup>Optional</sup> <a name="EnableContinuousBackup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.enableContinuousBackup"></a>

```go
EnableContinuousBackup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#enable_continuous_backup BackupBackupPlan#enable_continuous_backup}.

---

##### `IndexActions`<sup>Optional</sup> <a name="IndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.indexActions"></a>

```go
IndexActions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#index_actions BackupBackupPlan#index_actions}.

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.lifecycle"></a>

```go
Lifecycle BackupBackupPlanBackupPlanBackupPlanRuleLifecycle
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}.

---

##### `RecoveryPointTags`<sup>Optional</sup> <a name="RecoveryPointTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.recoveryPointTags"></a>

```go
RecoveryPointTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#recovery_point_tags BackupBackupPlan#recovery_point_tags}.

---

##### `ScanActions`<sup>Optional</sup> <a name="ScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scanActions"></a>

```go
ScanActions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#scan_actions BackupBackupPlan#scan_actions}.

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpression"></a>

```go
ScheduleExpression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#schedule_expression BackupBackupPlan#schedule_expression}.

---

##### `ScheduleExpressionTimezone`<sup>Optional</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.scheduleExpressionTimezone"></a>

```go
ScheduleExpressionTimezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#schedule_expression_timezone BackupBackupPlan#schedule_expression_timezone}.

---

##### `StartWindowMinutes`<sup>Optional</sup> <a name="StartWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.startWindowMinutes"></a>

```go
StartWindowMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#start_window_minutes BackupBackupPlan#start_window_minutes}.

---

##### `TargetLogicallyAirGappedBackupVaultArn`<sup>Optional</sup> <a name="TargetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRule.property.targetLogicallyAirGappedBackupVaultArn"></a>

```go
TargetLogicallyAirGappedBackupVaultArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#target_logically_air_gapped_backup_vault_arn BackupBackupPlan#target_logically_air_gapped_backup_vault_arn}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleCopyActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

&backupbackupplan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions {
	DestinationBackupVaultArn: *string,
	Lifecycle: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.destinationBackupVaultArn">DestinationBackupVaultArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#destination_backup_vault_arn BackupBackupPlan#destination_backup_vault_arn}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}. |

---

##### `DestinationBackupVaultArn`<sup>Optional</sup> <a name="DestinationBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.destinationBackupVaultArn"></a>

```go
DestinationBackupVaultArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#destination_backup_vault_arn BackupBackupPlan#destination_backup_vault_arn}.

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActions.property.lifecycle"></a>

```go
Lifecycle BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#lifecycle BackupBackupPlan#lifecycle}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

&backupbackupplan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle {
	DeleteAfterDays: *f64,
	MoveToColdStorageAfterDays: *f64,
	OptInToArchiveForSupportedResources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.moveToColdStorageAfterDays">MoveToColdStorageAfterDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}. |

---

##### `DeleteAfterDays`<sup>Optional</sup> <a name="DeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.deleteAfterDays"></a>

```go
DeleteAfterDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}.

---

##### `MoveToColdStorageAfterDays`<sup>Optional</sup> <a name="MoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.moveToColdStorageAfterDays"></a>

```go
MoveToColdStorageAfterDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}.

---

##### `OptInToArchiveForSupportedResources`<sup>Optional</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle.property.optInToArchiveForSupportedResources"></a>

```go
OptInToArchiveForSupportedResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleIndexActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

&backupbackupplan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions {
	ResourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}. |

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActions.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleLifecycle <a name="BackupBackupPlanBackupPlanBackupPlanRuleLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

&backupbackupplan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle {
	DeleteAfterDays: *f64,
	MoveToColdStorageAfterDays: *f64,
	OptInToArchiveForSupportedResources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.moveToColdStorageAfterDays">MoveToColdStorageAfterDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}. |

---

##### `DeleteAfterDays`<sup>Optional</sup> <a name="DeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.deleteAfterDays"></a>

```go
DeleteAfterDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#delete_after_days BackupBackupPlan#delete_after_days}.

---

##### `MoveToColdStorageAfterDays`<sup>Optional</sup> <a name="MoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.moveToColdStorageAfterDays"></a>

```go
MoveToColdStorageAfterDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#move_to_cold_storage_after_days BackupBackupPlan#move_to_cold_storage_after_days}.

---

##### `OptInToArchiveForSupportedResources`<sup>Optional</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle.property.optInToArchiveForSupportedResources"></a>

```go
OptInToArchiveForSupportedResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#opt_in_to_archive_for_supported_resources BackupBackupPlan#opt_in_to_archive_for_supported_resources}.

---

### BackupBackupPlanBackupPlanBackupPlanRuleScanActions <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

&backupbackupplan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions {
	MalwareScanner: *string,
	ScanMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.malwareScanner">MalwareScanner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.scanMode">ScanMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#scan_mode BackupBackupPlan#scan_mode}. |

---

##### `MalwareScanner`<sup>Optional</sup> <a name="MalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.malwareScanner"></a>

```go
MalwareScanner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}.

---

##### `ScanMode`<sup>Optional</sup> <a name="ScanMode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActions.property.scanMode"></a>

```go
ScanMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#scan_mode BackupBackupPlan#scan_mode}.

---

### BackupBackupPlanBackupPlanScanSettings <a name="BackupBackupPlanBackupPlanScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

&backupbackupplan.BackupBackupPlanBackupPlanScanSettings {
	MalwareScanner: *string,
	ResourceTypes: *[]*string,
	ScannerRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.malwareScanner">MalwareScanner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.scannerRoleArn">ScannerRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#scanner_role_arn BackupBackupPlan#scanner_role_arn}. |

---

##### `MalwareScanner`<sup>Optional</sup> <a name="MalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.malwareScanner"></a>

```go
MalwareScanner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#malware_scanner BackupBackupPlan#malware_scanner}.

---

##### `ResourceTypes`<sup>Optional</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#resource_types BackupBackupPlan#resource_types}.

---

##### `ScannerRoleArn`<sup>Optional</sup> <a name="ScannerRoleArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettings.property.scannerRoleArn"></a>

```go
ScannerRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#scanner_role_arn BackupBackupPlan#scanner_role_arn}.

---

### BackupBackupPlanConfig <a name="BackupBackupPlanConfig" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

&backupbackupplan.BackupBackupPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BackupPlan: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.backupBackupPlan.BackupBackupPlanBackupPlan,
	BackupPlanTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlan">BackupPlan</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlanTags">BackupPlanTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BackupPlan`<sup>Required</sup> <a name="BackupPlan" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlan"></a>

```go
BackupPlan BackupBackupPlanBackupPlan
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlan">BackupBackupPlanBackupPlan</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#backup_plan BackupBackupPlan#backup_plan}.

---

##### `BackupPlanTags`<sup>Optional</sup> <a name="BackupPlanTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanConfig.property.backupPlanTags"></a>

```go
BackupPlanTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_backup_plan#backup_plan_tags BackupBackupPlan#backup_plan_tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupBackupPlanBackupPlanAdvancedBackupSettingsList <a name="BackupBackupPlanBackupPlanAdvancedBackupSettingsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanAdvancedBackupSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupBackupPlanBackupPlanAdvancedBackupSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get"></a>

```go
func Get(index *f64) BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference <a name="BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetBackupOptions">ResetBackupOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackupOptions` <a name="ResetBackupOptions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetBackupOptions"></a>

```go
func ResetBackupOptions()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptionsInput">BackupOptionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions">BackupOptions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupOptionsInput`<sup>Optional</sup> <a name="BackupOptionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptionsInput"></a>

```go
func BackupOptionsInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `BackupOptions`<sup>Required</sup> <a name="BackupOptions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.backupOptions"></a>

```go
func BackupOptions() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetDeleteAfterDays">ResetDeleteAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetMoveToColdStorageAfterDays">ResetMoveToColdStorageAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetOptInToArchiveForSupportedResources">ResetOptInToArchiveForSupportedResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteAfterDays` <a name="ResetDeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetDeleteAfterDays"></a>

```go
func ResetDeleteAfterDays()
```

##### `ResetMoveToColdStorageAfterDays` <a name="ResetMoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetMoveToColdStorageAfterDays"></a>

```go
func ResetMoveToColdStorageAfterDays()
```

##### `ResetOptInToArchiveForSupportedResources` <a name="ResetOptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.resetOptInToArchiveForSupportedResources"></a>

```go
func ResetOptInToArchiveForSupportedResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDaysInput">DeleteAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDaysInput">MoveToColdStorageAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput">OptInToArchiveForSupportedResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays">MoveToColdStorageAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteAfterDaysInput`<sup>Optional</sup> <a name="DeleteAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDaysInput"></a>

```go
func DeleteAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `MoveToColdStorageAfterDaysInput`<sup>Optional</sup> <a name="MoveToColdStorageAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDaysInput"></a>

```go
func MoveToColdStorageAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `OptInToArchiveForSupportedResourcesInput`<sup>Optional</sup> <a name="OptInToArchiveForSupportedResourcesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput"></a>

```go
func OptInToArchiveForSupportedResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteAfterDays`<sup>Required</sup> <a name="DeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.deleteAfterDays"></a>

```go
func DeleteAfterDays() *f64
```

- *Type:* *f64

---

##### `MoveToColdStorageAfterDays`<sup>Required</sup> <a name="MoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```go
func MoveToColdStorageAfterDays() *f64
```

- *Type:* *f64

---

##### `OptInToArchiveForSupportedResources`<sup>Required</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```go
func OptInToArchiveForSupportedResources() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get"></a>

```go
func Get(index *f64) BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle">PutLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetDestinationBackupVaultArn">ResetDestinationBackupVaultArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetLifecycle">ResetLifecycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLifecycle` <a name="PutLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle"></a>

```go
func PutLifecycle(value BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycle</a>

---

##### `ResetDestinationBackupVaultArn` <a name="ResetDestinationBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetDestinationBackupVaultArn"></a>

```go
func ResetDestinationBackupVaultArn()
```

##### `ResetLifecycle` <a name="ResetLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.resetLifecycle"></a>

```go
func ResetLifecycle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArnInput">DestinationBackupVaultArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycleInput">LifecycleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn">DestinationBackupVaultArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycle"></a>

```go
func Lifecycle() BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsLifecycleOutputReference</a>

---

##### `DestinationBackupVaultArnInput`<sup>Optional</sup> <a name="DestinationBackupVaultArnInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArnInput"></a>

```go
func DestinationBackupVaultArnInput() *string
```

- *Type:* *string

---

##### `LifecycleInput`<sup>Optional</sup> <a name="LifecycleInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.lifecycleInput"></a>

```go
func LifecycleInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationBackupVaultArn`<sup>Required</sup> <a name="DestinationBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.destinationBackupVaultArn"></a>

```go
func DestinationBackupVaultArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get"></a>

```go
func Get(index *f64) BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetDeleteAfterDays">ResetDeleteAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetMoveToColdStorageAfterDays">ResetMoveToColdStorageAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetOptInToArchiveForSupportedResources">ResetOptInToArchiveForSupportedResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteAfterDays` <a name="ResetDeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetDeleteAfterDays"></a>

```go
func ResetDeleteAfterDays()
```

##### `ResetMoveToColdStorageAfterDays` <a name="ResetMoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetMoveToColdStorageAfterDays"></a>

```go
func ResetMoveToColdStorageAfterDays()
```

##### `ResetOptInToArchiveForSupportedResources` <a name="ResetOptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.resetOptInToArchiveForSupportedResources"></a>

```go
func ResetOptInToArchiveForSupportedResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDaysInput">DeleteAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDaysInput">MoveToColdStorageAfterDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput">OptInToArchiveForSupportedResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays">DeleteAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays">MoveToColdStorageAfterDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteAfterDaysInput`<sup>Optional</sup> <a name="DeleteAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDaysInput"></a>

```go
func DeleteAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `MoveToColdStorageAfterDaysInput`<sup>Optional</sup> <a name="MoveToColdStorageAfterDaysInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDaysInput"></a>

```go
func MoveToColdStorageAfterDaysInput() *f64
```

- *Type:* *f64

---

##### `OptInToArchiveForSupportedResourcesInput`<sup>Optional</sup> <a name="OptInToArchiveForSupportedResourcesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput"></a>

```go
func OptInToArchiveForSupportedResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteAfterDays`<sup>Required</sup> <a name="DeleteAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.deleteAfterDays"></a>

```go
func DeleteAfterDays() *f64
```

- *Type:* *f64

---

##### `MoveToColdStorageAfterDays`<sup>Required</sup> <a name="MoveToColdStorageAfterDays" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.moveToColdStorageAfterDays"></a>

```go
func MoveToColdStorageAfterDays() *f64
```

- *Type:* *f64

---

##### `OptInToArchiveForSupportedResources`<sup>Required</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```go
func OptInToArchiveForSupportedResources() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanBackupPlanRuleList <a name="BackupBackupPlanBackupPlanBackupPlanRuleList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanBackupPlanRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupBackupPlanBackupPlanBackupPlanRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get"></a>

```go
func Get(index *f64) BackupBackupPlanBackupPlanBackupPlanRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanBackupPlanRuleOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanBackupPlanRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupBackupPlanBackupPlanBackupPlanRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions">PutCopyActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions">PutIndexActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle">PutLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions">PutScanActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCompletionWindowMinutes">ResetCompletionWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCopyActions">ResetCopyActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetEnableContinuousBackup">ResetEnableContinuousBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetIndexActions">ResetIndexActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetLifecycle">ResetLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetRecoveryPointTags">ResetRecoveryPointTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScanActions">ResetScanActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpressionTimezone">ResetScheduleExpressionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetStartWindowMinutes">ResetStartWindowMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetTargetLogicallyAirGappedBackupVaultArn">ResetTargetLogicallyAirGappedBackupVaultArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCopyActions` <a name="PutCopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions"></a>

```go
func PutCopyActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putCopyActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIndexActions` <a name="PutIndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions"></a>

```go
func PutIndexActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putIndexActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLifecycle` <a name="PutLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle"></a>

```go
func PutLifecycle(value BackupBackupPlanBackupPlanBackupPlanRuleLifecycle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycle">BackupBackupPlanBackupPlanBackupPlanRuleLifecycle</a>

---

##### `PutScanActions` <a name="PutScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions"></a>

```go
func PutScanActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.putScanActions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompletionWindowMinutes` <a name="ResetCompletionWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCompletionWindowMinutes"></a>

```go
func ResetCompletionWindowMinutes()
```

##### `ResetCopyActions` <a name="ResetCopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetCopyActions"></a>

```go
func ResetCopyActions()
```

##### `ResetEnableContinuousBackup` <a name="ResetEnableContinuousBackup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetEnableContinuousBackup"></a>

```go
func ResetEnableContinuousBackup()
```

##### `ResetIndexActions` <a name="ResetIndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetIndexActions"></a>

```go
func ResetIndexActions()
```

##### `ResetLifecycle` <a name="ResetLifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetLifecycle"></a>

```go
func ResetLifecycle()
```

##### `ResetRecoveryPointTags` <a name="ResetRecoveryPointTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetRecoveryPointTags"></a>

```go
func ResetRecoveryPointTags()
```

##### `ResetScanActions` <a name="ResetScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScanActions"></a>

```go
func ResetScanActions()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpression"></a>

```go
func ResetScheduleExpression()
```

##### `ResetScheduleExpressionTimezone` <a name="ResetScheduleExpressionTimezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetScheduleExpressionTimezone"></a>

```go
func ResetScheduleExpressionTimezone()
```

##### `ResetStartWindowMinutes` <a name="ResetStartWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetStartWindowMinutes"></a>

```go
func ResetStartWindowMinutes()
```

##### `ResetTargetLogicallyAirGappedBackupVaultArn` <a name="ResetTargetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.resetTargetLogicallyAirGappedBackupVaultArn"></a>

```go
func ResetTargetLogicallyAirGappedBackupVaultArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions">CopyActions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions">IndexActions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions">ScanActions</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutesInput">CompletionWindowMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActionsInput">CopyActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackupInput">EnableContinuousBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActionsInput">IndexActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycleInput">LifecycleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTagsInput">RecoveryPointTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActionsInput">ScanActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezoneInput">ScheduleExpressionTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutesInput">StartWindowMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVaultInput">TargetBackupVaultInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArnInput">TargetLogicallyAirGappedBackupVaultArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes">CompletionWindowMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup">EnableContinuousBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags">RecoveryPointTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes">StartWindowMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault">TargetBackupVault</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn">TargetLogicallyAirGappedBackupVaultArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CopyActions`<sup>Required</sup> <a name="CopyActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActions"></a>

```go
func CopyActions() BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList">BackupBackupPlanBackupPlanBackupPlanRuleCopyActionsList</a>

---

##### `IndexActions`<sup>Required</sup> <a name="IndexActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActions"></a>

```go
func IndexActions() BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList">BackupBackupPlanBackupPlanBackupPlanRuleIndexActionsList</a>

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycle"></a>

```go
func Lifecycle() BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference">BackupBackupPlanBackupPlanBackupPlanRuleLifecycleOutputReference</a>

---

##### `ScanActions`<sup>Required</sup> <a name="ScanActions" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActions"></a>

```go
func ScanActions() BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList">BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList</a>

---

##### `CompletionWindowMinutesInput`<sup>Optional</sup> <a name="CompletionWindowMinutesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutesInput"></a>

```go
func CompletionWindowMinutesInput() *f64
```

- *Type:* *f64

---

##### `CopyActionsInput`<sup>Optional</sup> <a name="CopyActionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.copyActionsInput"></a>

```go
func CopyActionsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableContinuousBackupInput`<sup>Optional</sup> <a name="EnableContinuousBackupInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackupInput"></a>

```go
func EnableContinuousBackupInput() interface{}
```

- *Type:* interface{}

---

##### `IndexActionsInput`<sup>Optional</sup> <a name="IndexActionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.indexActionsInput"></a>

```go
func IndexActionsInput() interface{}
```

- *Type:* interface{}

---

##### `LifecycleInput`<sup>Optional</sup> <a name="LifecycleInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.lifecycleInput"></a>

```go
func LifecycleInput() interface{}
```

- *Type:* interface{}

---

##### `RecoveryPointTagsInput`<sup>Optional</sup> <a name="RecoveryPointTagsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTagsInput"></a>

```go
func RecoveryPointTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `ScanActionsInput`<sup>Optional</sup> <a name="ScanActionsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scanActionsInput"></a>

```go
func ScanActionsInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionInput"></a>

```go
func ScheduleExpressionInput() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="ScheduleExpressionTimezoneInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezoneInput"></a>

```go
func ScheduleExpressionTimezoneInput() *string
```

- *Type:* *string

---

##### `StartWindowMinutesInput`<sup>Optional</sup> <a name="StartWindowMinutesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutesInput"></a>

```go
func StartWindowMinutesInput() *f64
```

- *Type:* *f64

---

##### `TargetBackupVaultInput`<sup>Optional</sup> <a name="TargetBackupVaultInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVaultInput"></a>

```go
func TargetBackupVaultInput() *string
```

- *Type:* *string

---

##### `TargetLogicallyAirGappedBackupVaultArnInput`<sup>Optional</sup> <a name="TargetLogicallyAirGappedBackupVaultArnInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArnInput"></a>

```go
func TargetLogicallyAirGappedBackupVaultArnInput() *string
```

- *Type:* *string

---

##### `CompletionWindowMinutes`<sup>Required</sup> <a name="CompletionWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.completionWindowMinutes"></a>

```go
func CompletionWindowMinutes() *f64
```

- *Type:* *f64

---

##### `EnableContinuousBackup`<sup>Required</sup> <a name="EnableContinuousBackup" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.enableContinuousBackup"></a>

```go
func EnableContinuousBackup() interface{}
```

- *Type:* interface{}

---

##### `RecoveryPointTags`<sup>Required</sup> <a name="RecoveryPointTags" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.recoveryPointTags"></a>

```go
func RecoveryPointTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.scheduleExpressionTimezone"></a>

```go
func ScheduleExpressionTimezone() *string
```

- *Type:* *string

---

##### `StartWindowMinutes`<sup>Required</sup> <a name="StartWindowMinutes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.startWindowMinutes"></a>

```go
func StartWindowMinutes() *f64
```

- *Type:* *f64

---

##### `TargetBackupVault`<sup>Required</sup> <a name="TargetBackupVault" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetBackupVault"></a>

```go
func TargetBackupVault() *string
```

- *Type:* *string

---

##### `TargetLogicallyAirGappedBackupVaultArn`<sup>Required</sup> <a name="TargetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn"></a>

```go
func TargetLogicallyAirGappedBackupVaultArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanBackupPlanRuleScanActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get"></a>

```go
func Get(index *f64) BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference <a name="BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetMalwareScanner">ResetMalwareScanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetScanMode">ResetScanMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMalwareScanner` <a name="ResetMalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetMalwareScanner"></a>

```go
func ResetMalwareScanner()
```

##### `ResetScanMode` <a name="ResetScanMode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.resetScanMode"></a>

```go
func ResetScanMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScannerInput">MalwareScannerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanModeInput">ScanModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner">MalwareScanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode">ScanMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MalwareScannerInput`<sup>Optional</sup> <a name="MalwareScannerInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScannerInput"></a>

```go
func MalwareScannerInput() *string
```

- *Type:* *string

---

##### `ScanModeInput`<sup>Optional</sup> <a name="ScanModeInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanModeInput"></a>

```go
func ScanModeInput() *string
```

- *Type:* *string

---

##### `MalwareScanner`<sup>Required</sup> <a name="MalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.malwareScanner"></a>

```go
func MalwareScanner() *string
```

- *Type:* *string

---

##### `ScanMode`<sup>Required</sup> <a name="ScanMode" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.scanMode"></a>

```go
func ScanMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleScanActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanOutputReference <a name="BackupBackupPlanBackupPlanOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupBackupPlanBackupPlanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings">PutAdvancedBackupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule">PutBackupPlanRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings">PutScanSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetAdvancedBackupSettings">ResetAdvancedBackupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetScanSettings">ResetScanSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedBackupSettings` <a name="PutAdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings"></a>

```go
func PutAdvancedBackupSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putAdvancedBackupSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBackupPlanRule` <a name="PutBackupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule"></a>

```go
func PutBackupPlanRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putBackupPlanRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScanSettings` <a name="PutScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings"></a>

```go
func PutScanSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.putScanSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdvancedBackupSettings` <a name="ResetAdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetAdvancedBackupSettings"></a>

```go
func ResetAdvancedBackupSettings()
```

##### `ResetScanSettings` <a name="ResetScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.resetScanSettings"></a>

```go
func ResetScanSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings">AdvancedBackupSettings</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList">BackupBackupPlanBackupPlanAdvancedBackupSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRule">BackupPlanRule</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList">BackupBackupPlanBackupPlanBackupPlanRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettings">ScanSettings</a></code> | <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList">BackupBackupPlanBackupPlanScanSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettingsInput">AdvancedBackupSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanNameInput">BackupPlanNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRuleInput">BackupPlanRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettingsInput">ScanSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanName">BackupPlanName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvancedBackupSettings`<sup>Required</sup> <a name="AdvancedBackupSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettings"></a>

```go
func AdvancedBackupSettings() BackupBackupPlanBackupPlanAdvancedBackupSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanAdvancedBackupSettingsList">BackupBackupPlanBackupPlanAdvancedBackupSettingsList</a>

---

##### `BackupPlanRule`<sup>Required</sup> <a name="BackupPlanRule" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRule"></a>

```go
func BackupPlanRule() BackupBackupPlanBackupPlanBackupPlanRuleList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanBackupPlanRuleList">BackupBackupPlanBackupPlanBackupPlanRuleList</a>

---

##### `ScanSettings`<sup>Required</sup> <a name="ScanSettings" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettings"></a>

```go
func ScanSettings() BackupBackupPlanBackupPlanScanSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList">BackupBackupPlanBackupPlanScanSettingsList</a>

---

##### `AdvancedBackupSettingsInput`<sup>Optional</sup> <a name="AdvancedBackupSettingsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.advancedBackupSettingsInput"></a>

```go
func AdvancedBackupSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPlanNameInput`<sup>Optional</sup> <a name="BackupPlanNameInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanNameInput"></a>

```go
func BackupPlanNameInput() *string
```

- *Type:* *string

---

##### `BackupPlanRuleInput`<sup>Optional</sup> <a name="BackupPlanRuleInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanRuleInput"></a>

```go
func BackupPlanRuleInput() interface{}
```

- *Type:* interface{}

---

##### `ScanSettingsInput`<sup>Optional</sup> <a name="ScanSettingsInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.scanSettingsInput"></a>

```go
func ScanSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPlanName`<sup>Required</sup> <a name="BackupPlanName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.backupPlanName"></a>

```go
func BackupPlanName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanScanSettingsList <a name="BackupBackupPlanBackupPlanScanSettingsList" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanScanSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupBackupPlanBackupPlanScanSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get"></a>

```go
func Get(index *f64) BackupBackupPlanBackupPlanScanSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupBackupPlanBackupPlanScanSettingsOutputReference <a name="BackupBackupPlanBackupPlanScanSettingsOutputReference" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupbackupplan"

backupbackupplan.NewBackupBackupPlanBackupPlanScanSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupBackupPlanBackupPlanScanSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetMalwareScanner">ResetMalwareScanner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetResourceTypes">ResetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetScannerRoleArn">ResetScannerRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMalwareScanner` <a name="ResetMalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetMalwareScanner"></a>

```go
func ResetMalwareScanner()
```

##### `ResetResourceTypes` <a name="ResetResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetResourceTypes"></a>

```go
func ResetResourceTypes()
```

##### `ResetScannerRoleArn` <a name="ResetScannerRoleArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.resetScannerRoleArn"></a>

```go
func ResetScannerRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScannerInput">MalwareScannerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArnInput">ScannerRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner">MalwareScanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn">ScannerRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MalwareScannerInput`<sup>Optional</sup> <a name="MalwareScannerInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScannerInput"></a>

```go
func MalwareScannerInput() *string
```

- *Type:* *string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScannerRoleArnInput`<sup>Optional</sup> <a name="ScannerRoleArnInput" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArnInput"></a>

```go
func ScannerRoleArnInput() *string
```

- *Type:* *string

---

##### `MalwareScanner`<sup>Required</sup> <a name="MalwareScanner" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.malwareScanner"></a>

```go
func MalwareScanner() *string
```

- *Type:* *string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ScannerRoleArn`<sup>Required</sup> <a name="ScannerRoleArn" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.scannerRoleArn"></a>

```go
func ScannerRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupBackupPlan.BackupBackupPlanBackupPlanScanSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



