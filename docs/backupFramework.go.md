# `backupFramework` Submodule <a name="`backupFramework` Submodule" id="@cdktn/provider-awscc.backupFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupFramework <a name="BackupFramework" id="@cdktn/provider-awscc.backupFramework.BackupFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework awscc_backup_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.NewBackupFramework(scope Construct, id *string, config BackupFrameworkConfig) BackupFramework
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig">BackupFrameworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.backupFramework.BackupFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig">BackupFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.putFrameworkControls">PutFrameworkControls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.putFrameworkTags">PutFrameworkTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.resetFrameworkDescription">ResetFrameworkDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.resetFrameworkName">ResetFrameworkName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.resetFrameworkTags">ResetFrameworkTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupFramework.BackupFramework.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.backupFramework.BackupFramework.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.backupFramework.BackupFramework.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.backupFramework.BackupFramework.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.backupFramework.BackupFramework.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFramework.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.backupFramework.BackupFramework.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.backupFramework.BackupFramework.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.backupFramework.BackupFramework.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.backupFramework.BackupFramework.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupFramework.BackupFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.backupFramework.BackupFramework.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.backupFramework.BackupFramework.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupFramework.BackupFramework.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupFramework.BackupFramework.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.backupFramework.BackupFramework.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFrameworkControls` <a name="PutFrameworkControls" id="@cdktn/provider-awscc.backupFramework.BackupFramework.putFrameworkControls"></a>

```go
func PutFrameworkControls(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFramework.putFrameworkControls.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFrameworkTags` <a name="PutFrameworkTags" id="@cdktn/provider-awscc.backupFramework.BackupFramework.putFrameworkTags"></a>

```go
func PutFrameworkTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFramework.putFrameworkTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFrameworkDescription` <a name="ResetFrameworkDescription" id="@cdktn/provider-awscc.backupFramework.BackupFramework.resetFrameworkDescription"></a>

```go
func ResetFrameworkDescription()
```

##### `ResetFrameworkName` <a name="ResetFrameworkName" id="@cdktn/provider-awscc.backupFramework.BackupFramework.resetFrameworkName"></a>

```go
func ResetFrameworkName()
```

##### `ResetFrameworkTags` <a name="ResetFrameworkTags" id="@cdktn/provider-awscc.backupFramework.BackupFramework.resetFrameworkTags"></a>

```go
func ResetFrameworkTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BackupFramework resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.backupFramework.BackupFramework.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.BackupFramework_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupFramework.BackupFramework.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.backupFramework.BackupFramework.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.BackupFramework_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupFramework.BackupFramework.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFramework.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.BackupFramework_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.backupFramework.BackupFramework.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.backupFramework.BackupFramework.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.BackupFramework_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BackupFramework resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.backupFramework.BackupFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BackupFramework to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BackupFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.backupFramework.BackupFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BackupFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.deploymentStatus">DeploymentStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkArn">FrameworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkControls">FrameworkControls</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList">BackupFrameworkFrameworkControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkStatus">FrameworkStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkTags">FrameworkTags</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList">BackupFrameworkFrameworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkControlsInput">FrameworkControlsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkDescriptionInput">FrameworkDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkNameInput">FrameworkNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkTagsInput">FrameworkTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkDescription">FrameworkDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkName">FrameworkName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DeploymentStatus`<sup>Required</sup> <a name="DeploymentStatus" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.deploymentStatus"></a>

```go
func DeploymentStatus() *string
```

- *Type:* *string

---

##### `FrameworkArn`<sup>Required</sup> <a name="FrameworkArn" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkArn"></a>

```go
func FrameworkArn() *string
```

- *Type:* *string

---

##### `FrameworkControls`<sup>Required</sup> <a name="FrameworkControls" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkControls"></a>

```go
func FrameworkControls() BackupFrameworkFrameworkControlsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList">BackupFrameworkFrameworkControlsList</a>

---

##### `FrameworkStatus`<sup>Required</sup> <a name="FrameworkStatus" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkStatus"></a>

```go
func FrameworkStatus() *string
```

- *Type:* *string

---

##### `FrameworkTags`<sup>Required</sup> <a name="FrameworkTags" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkTags"></a>

```go
func FrameworkTags() BackupFrameworkFrameworkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList">BackupFrameworkFrameworkTagsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `FrameworkControlsInput`<sup>Optional</sup> <a name="FrameworkControlsInput" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkControlsInput"></a>

```go
func FrameworkControlsInput() interface{}
```

- *Type:* interface{}

---

##### `FrameworkDescriptionInput`<sup>Optional</sup> <a name="FrameworkDescriptionInput" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkDescriptionInput"></a>

```go
func FrameworkDescriptionInput() *string
```

- *Type:* *string

---

##### `FrameworkNameInput`<sup>Optional</sup> <a name="FrameworkNameInput" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkNameInput"></a>

```go
func FrameworkNameInput() *string
```

- *Type:* *string

---

##### `FrameworkTagsInput`<sup>Optional</sup> <a name="FrameworkTagsInput" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkTagsInput"></a>

```go
func FrameworkTagsInput() interface{}
```

- *Type:* interface{}

---

##### `FrameworkDescription`<sup>Required</sup> <a name="FrameworkDescription" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkDescription"></a>

```go
func FrameworkDescription() *string
```

- *Type:* *string

---

##### `FrameworkName`<sup>Required</sup> <a name="FrameworkName" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.frameworkName"></a>

```go
func FrameworkName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFramework.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.backupFramework.BackupFramework.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupFrameworkConfig <a name="BackupFrameworkConfig" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

&backupframework.BackupFrameworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FrameworkControls: interface{},
	FrameworkDescription: *string,
	FrameworkName: *string,
	FrameworkTags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkControls">FrameworkControls</a></code> | <code>interface{}</code> | Contains detailed information about all of the controls of a framework. Each framework must contain at least one control. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkDescription">FrameworkDescription</a></code> | <code>*string</code> | An optional description of the framework with a maximum 1,024 characters. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkName">FrameworkName</a></code> | <code>*string</code> | The unique name of a framework. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkTags">FrameworkTags</a></code> | <code>interface{}</code> | Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FrameworkControls`<sup>Required</sup> <a name="FrameworkControls" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkControls"></a>

```go
FrameworkControls interface{}
```

- *Type:* interface{}

Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#framework_controls BackupFramework#framework_controls}

---

##### `FrameworkDescription`<sup>Optional</sup> <a name="FrameworkDescription" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkDescription"></a>

```go
FrameworkDescription *string
```

- *Type:* *string

An optional description of the framework with a maximum 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#framework_description BackupFramework#framework_description}

---

##### `FrameworkName`<sup>Optional</sup> <a name="FrameworkName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkName"></a>

```go
FrameworkName *string
```

- *Type:* *string

The unique name of a framework.

This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#framework_name BackupFramework#framework_name}

---

##### `FrameworkTags`<sup>Optional</sup> <a name="FrameworkTags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkConfig.property.frameworkTags"></a>

```go
FrameworkTags interface{}
```

- *Type:* interface{}

Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#framework_tags BackupFramework#framework_tags}

---

### BackupFrameworkFrameworkControls <a name="BackupFrameworkFrameworkControls" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

&backupframework.BackupFrameworkFrameworkControls {
	ControlName: *string,
	ControlInputParameters: interface{},
	ControlScope: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.property.controlName">ControlName</a></code> | <code>*string</code> | The name of a control. This name is between 1 and 256 characters. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.property.controlInputParameters">ControlInputParameters</a></code> | <code>interface{}</code> | A list of ParameterName and ParameterValue pairs. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.property.controlScope">ControlScope</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope">BackupFrameworkFrameworkControlsControlScope</a></code> | The scope of a control. |

---

##### `ControlName`<sup>Required</sup> <a name="ControlName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.property.controlName"></a>

```go
ControlName *string
```

- *Type:* *string

The name of a control. This name is between 1 and 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#control_name BackupFramework#control_name}

---

##### `ControlInputParameters`<sup>Optional</sup> <a name="ControlInputParameters" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.property.controlInputParameters"></a>

```go
ControlInputParameters interface{}
```

- *Type:* interface{}

A list of ParameterName and ParameterValue pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#control_input_parameters BackupFramework#control_input_parameters}

---

##### `ControlScope`<sup>Optional</sup> <a name="ControlScope" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControls.property.controlScope"></a>

```go
ControlScope BackupFrameworkFrameworkControlsControlScope
```

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope">BackupFrameworkFrameworkControlsControlScope</a>

The scope of a control.

The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#control_scope BackupFramework#control_scope}

---

### BackupFrameworkFrameworkControlsControlInputParameters <a name="BackupFrameworkFrameworkControlsControlInputParameters" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

&backupframework.BackupFrameworkFrameworkControlsControlInputParameters {
	ParameterName: *string,
	ParameterValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters.property.parameterName">ParameterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#parameter_name BackupFramework#parameter_name}. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#parameter_value BackupFramework#parameter_value}. |

---

##### `ParameterName`<sup>Optional</sup> <a name="ParameterName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters.property.parameterName"></a>

```go
ParameterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#parameter_name BackupFramework#parameter_name}.

---

##### `ParameterValue`<sup>Optional</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParameters.property.parameterValue"></a>

```go
ParameterValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#parameter_value BackupFramework#parameter_value}.

---

### BackupFrameworkFrameworkControlsControlScope <a name="BackupFrameworkFrameworkControlsControlScope" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

&backupframework.BackupFrameworkFrameworkControlsControlScope {
	ComplianceResourceIds: *[]*string,
	ComplianceResourceTypes: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.property.complianceResourceIds">ComplianceResourceIds</a></code> | <code>*[]*string</code> | The ID of the only AWS resource that you want your control scope to contain. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.property.complianceResourceTypes">ComplianceResourceTypes</a></code> | <code>*[]*string</code> | Describes whether the control scope includes one or more types of resources, such as `EFS` or `RDS`. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.property.tags">Tags</a></code> | <code>interface{}</code> | Describes whether the control scope includes resources with one or more tags. Each tag is a key-value pair. |

---

##### `ComplianceResourceIds`<sup>Optional</sup> <a name="ComplianceResourceIds" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.property.complianceResourceIds"></a>

```go
ComplianceResourceIds *[]*string
```

- *Type:* *[]*string

The ID of the only AWS resource that you want your control scope to contain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#compliance_resource_ids BackupFramework#compliance_resource_ids}

---

##### `ComplianceResourceTypes`<sup>Optional</sup> <a name="ComplianceResourceTypes" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.property.complianceResourceTypes"></a>

```go
ComplianceResourceTypes *[]*string
```

- *Type:* *[]*string

Describes whether the control scope includes one or more types of resources, such as `EFS` or `RDS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#compliance_resource_types BackupFramework#compliance_resource_types}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Describes whether the control scope includes resources with one or more tags. Each tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#tags BackupFramework#tags}

---

### BackupFrameworkFrameworkControlsControlScopeTags <a name="BackupFrameworkFrameworkControlsControlScopeTags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

&backupframework.BackupFrameworkFrameworkControlsControlScopeTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#key BackupFramework#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#value BackupFramework#value}

---

### BackupFrameworkFrameworkTags <a name="BackupFrameworkFrameworkTags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

&backupframework.BackupFrameworkFrameworkTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#key BackupFramework#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/backup_framework#value BackupFramework#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupFrameworkFrameworkControlsControlInputParametersList <a name="BackupFrameworkFrameworkControlsControlInputParametersList" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.NewBackupFrameworkFrameworkControlsControlInputParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupFrameworkFrameworkControlsControlInputParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.get"></a>

```go
func Get(index *f64) BackupFrameworkFrameworkControlsControlInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupFrameworkFrameworkControlsControlInputParametersOutputReference <a name="BackupFrameworkFrameworkControlsControlInputParametersOutputReference" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.NewBackupFrameworkFrameworkControlsControlInputParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupFrameworkFrameworkControlsControlInputParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resetParameterName">ResetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resetParameterValue">ResetParameterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetParameterName` <a name="ResetParameterName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resetParameterName"></a>

```go
func ResetParameterName()
```

##### `ResetParameterValue` <a name="ResetParameterValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.resetParameterValue"></a>

```go
func ResetParameterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterNameInput">ParameterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterValueInput">ParameterValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterValue">ParameterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterNameInput`<sup>Optional</sup> <a name="ParameterNameInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterNameInput"></a>

```go
func ParameterNameInput() *string
```

- *Type:* *string

---

##### `ParameterValueInput`<sup>Optional</sup> <a name="ParameterValueInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterValueInput"></a>

```go
func ParameterValueInput() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `ParameterValue`<sup>Required</sup> <a name="ParameterValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.parameterValue"></a>

```go
func ParameterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupFrameworkFrameworkControlsControlScopeOutputReference <a name="BackupFrameworkFrameworkControlsControlScopeOutputReference" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.NewBackupFrameworkFrameworkControlsControlScopeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupFrameworkFrameworkControlsControlScopeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resetComplianceResourceIds">ResetComplianceResourceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resetComplianceResourceTypes">ResetComplianceResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComplianceResourceIds` <a name="ResetComplianceResourceIds" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resetComplianceResourceIds"></a>

```go
func ResetComplianceResourceIds()
```

##### `ResetComplianceResourceTypes` <a name="ResetComplianceResourceTypes" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resetComplianceResourceTypes"></a>

```go
func ResetComplianceResourceTypes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList">BackupFrameworkFrameworkControlsControlScopeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceIdsInput">ComplianceResourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceTypesInput">ComplianceResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceIds">ComplianceResourceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceTypes">ComplianceResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.tags"></a>

```go
func Tags() BackupFrameworkFrameworkControlsControlScopeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList">BackupFrameworkFrameworkControlsControlScopeTagsList</a>

---

##### `ComplianceResourceIdsInput`<sup>Optional</sup> <a name="ComplianceResourceIdsInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceIdsInput"></a>

```go
func ComplianceResourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ComplianceResourceTypesInput`<sup>Optional</sup> <a name="ComplianceResourceTypesInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceTypesInput"></a>

```go
func ComplianceResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ComplianceResourceIds`<sup>Required</sup> <a name="ComplianceResourceIds" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceIds"></a>

```go
func ComplianceResourceIds() *[]*string
```

- *Type:* *[]*string

---

##### `ComplianceResourceTypes`<sup>Required</sup> <a name="ComplianceResourceTypes" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.complianceResourceTypes"></a>

```go
func ComplianceResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupFrameworkFrameworkControlsControlScopeTagsList <a name="BackupFrameworkFrameworkControlsControlScopeTagsList" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.NewBackupFrameworkFrameworkControlsControlScopeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupFrameworkFrameworkControlsControlScopeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.get"></a>

```go
func Get(index *f64) BackupFrameworkFrameworkControlsControlScopeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupFrameworkFrameworkControlsControlScopeTagsOutputReference <a name="BackupFrameworkFrameworkControlsControlScopeTagsOutputReference" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.NewBackupFrameworkFrameworkControlsControlScopeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupFrameworkFrameworkControlsControlScopeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupFrameworkFrameworkControlsList <a name="BackupFrameworkFrameworkControlsList" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.NewBackupFrameworkFrameworkControlsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupFrameworkFrameworkControlsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.get"></a>

```go
func Get(index *f64) BackupFrameworkFrameworkControlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupFrameworkFrameworkControlsOutputReference <a name="BackupFrameworkFrameworkControlsOutputReference" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.NewBackupFrameworkFrameworkControlsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupFrameworkFrameworkControlsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.putControlInputParameters">PutControlInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.putControlScope">PutControlScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resetControlInputParameters">ResetControlInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resetControlScope">ResetControlScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControlInputParameters` <a name="PutControlInputParameters" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.putControlInputParameters"></a>

```go
func PutControlInputParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.putControlInputParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutControlScope` <a name="PutControlScope" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.putControlScope"></a>

```go
func PutControlScope(value BackupFrameworkFrameworkControlsControlScope)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.putControlScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScope">BackupFrameworkFrameworkControlsControlScope</a>

---

##### `ResetControlInputParameters` <a name="ResetControlInputParameters" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resetControlInputParameters"></a>

```go
func ResetControlInputParameters()
```

##### `ResetControlScope` <a name="ResetControlScope" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.resetControlScope"></a>

```go
func ResetControlScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlInputParameters">ControlInputParameters</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList">BackupFrameworkFrameworkControlsControlInputParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlScope">ControlScope</a></code> | <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference">BackupFrameworkFrameworkControlsControlScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlInputParametersInput">ControlInputParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlNameInput">ControlNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlScopeInput">ControlScopeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlName">ControlName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ControlInputParameters`<sup>Required</sup> <a name="ControlInputParameters" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlInputParameters"></a>

```go
func ControlInputParameters() BackupFrameworkFrameworkControlsControlInputParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlInputParametersList">BackupFrameworkFrameworkControlsControlInputParametersList</a>

---

##### `ControlScope`<sup>Required</sup> <a name="ControlScope" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlScope"></a>

```go
func ControlScope() BackupFrameworkFrameworkControlsControlScopeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsControlScopeOutputReference">BackupFrameworkFrameworkControlsControlScopeOutputReference</a>

---

##### `ControlInputParametersInput`<sup>Optional</sup> <a name="ControlInputParametersInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlInputParametersInput"></a>

```go
func ControlInputParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ControlNameInput`<sup>Optional</sup> <a name="ControlNameInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlNameInput"></a>

```go
func ControlNameInput() *string
```

- *Type:* *string

---

##### `ControlScopeInput`<sup>Optional</sup> <a name="ControlScopeInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlScopeInput"></a>

```go
func ControlScopeInput() interface{}
```

- *Type:* interface{}

---

##### `ControlName`<sup>Required</sup> <a name="ControlName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.controlName"></a>

```go
func ControlName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkControlsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupFrameworkFrameworkTagsList <a name="BackupFrameworkFrameworkTagsList" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.NewBackupFrameworkFrameworkTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupFrameworkFrameworkTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.get"></a>

```go
func Get(index *f64) BackupFrameworkFrameworkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupFrameworkFrameworkTagsOutputReference <a name="BackupFrameworkFrameworkTagsOutputReference" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/backupframework"

backupframework.NewBackupFrameworkFrameworkTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupFrameworkFrameworkTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.backupFramework.BackupFrameworkFrameworkTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



