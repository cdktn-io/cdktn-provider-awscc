# `dmsDataMigration` Submodule <a name="`dmsDataMigration` Submodule" id="@cdktn/provider-awscc.dmsDataMigration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDataMigration <a name="DmsDataMigration" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration awscc_dms_data_migration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

dmsdatamigration.NewDmsDataMigration(scope Construct, id *string, config DmsDataMigrationConfig) DmsDataMigration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig">DmsDataMigrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig">DmsDataMigrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings">PutDataMigrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putSourceDataSettings">PutSourceDataSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationIdentifier">ResetDataMigrationIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationName">ResetDataMigrationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationSettings">ResetDataMigrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetSourceDataSettings">ResetSourceDataSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataMigrationSettings` <a name="PutDataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings"></a>

```go
func PutDataMigrationSettings(value DmsDataMigrationDataMigrationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putDataMigrationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

---

##### `PutSourceDataSettings` <a name="PutSourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putSourceDataSettings"></a>

```go
func PutSourceDataSettings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putSourceDataSettings.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataMigrationIdentifier` <a name="ResetDataMigrationIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationIdentifier"></a>

```go
func ResetDataMigrationIdentifier()
```

##### `ResetDataMigrationName` <a name="ResetDataMigrationName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationName"></a>

```go
func ResetDataMigrationName()
```

##### `ResetDataMigrationSettings` <a name="ResetDataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetDataMigrationSettings"></a>

```go
func ResetDataMigrationSettings()
```

##### `ResetSourceDataSettings` <a name="ResetSourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetSourceDataSettings"></a>

```go
func ResetSourceDataSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DmsDataMigration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

dmsdatamigration.DmsDataMigration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

dmsdatamigration.DmsDataMigration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

dmsdatamigration.DmsDataMigration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

dmsdatamigration.DmsDataMigration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DmsDataMigration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DmsDataMigration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DmsDataMigration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DmsDataMigration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationArn">DataMigrationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationCreateTime">DataMigrationCreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettings">DataMigrationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference">DmsDataMigrationDataMigrationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettings">SourceDataSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList">DmsDataMigrationSourceDataSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList">DmsDataMigrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifierInput">DataMigrationIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationNameInput">DataMigrationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettingsInput">DataMigrationSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationTypeInput">DataMigrationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifierInput">MigrationProjectIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArnInput">ServiceAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettingsInput">SourceDataSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifier">DataMigrationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationName">DataMigrationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationType">DataMigrationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifier">MigrationProjectIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataMigrationArn`<sup>Required</sup> <a name="DataMigrationArn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationArn"></a>

```go
func DataMigrationArn() *string
```

- *Type:* *string

---

##### `DataMigrationCreateTime`<sup>Required</sup> <a name="DataMigrationCreateTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationCreateTime"></a>

```go
func DataMigrationCreateTime() *string
```

- *Type:* *string

---

##### `DataMigrationSettings`<sup>Required</sup> <a name="DataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettings"></a>

```go
func DataMigrationSettings() DmsDataMigrationDataMigrationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference">DmsDataMigrationDataMigrationSettingsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SourceDataSettings`<sup>Required</sup> <a name="SourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettings"></a>

```go
func SourceDataSettings() DmsDataMigrationSourceDataSettingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList">DmsDataMigrationSourceDataSettingsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tags"></a>

```go
func Tags() DmsDataMigrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList">DmsDataMigrationTagsList</a>

---

##### `DataMigrationIdentifierInput`<sup>Optional</sup> <a name="DataMigrationIdentifierInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifierInput"></a>

```go
func DataMigrationIdentifierInput() *string
```

- *Type:* *string

---

##### `DataMigrationNameInput`<sup>Optional</sup> <a name="DataMigrationNameInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationNameInput"></a>

```go
func DataMigrationNameInput() *string
```

- *Type:* *string

---

##### `DataMigrationSettingsInput`<sup>Optional</sup> <a name="DataMigrationSettingsInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationSettingsInput"></a>

```go
func DataMigrationSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `DataMigrationTypeInput`<sup>Optional</sup> <a name="DataMigrationTypeInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationTypeInput"></a>

```go
func DataMigrationTypeInput() *string
```

- *Type:* *string

---

##### `MigrationProjectIdentifierInput`<sup>Optional</sup> <a name="MigrationProjectIdentifierInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifierInput"></a>

```go
func MigrationProjectIdentifierInput() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArnInput`<sup>Optional</sup> <a name="ServiceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArnInput"></a>

```go
func ServiceAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SourceDataSettingsInput`<sup>Optional</sup> <a name="SourceDataSettingsInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.sourceDataSettingsInput"></a>

```go
func SourceDataSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DataMigrationIdentifier`<sup>Required</sup> <a name="DataMigrationIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationIdentifier"></a>

```go
func DataMigrationIdentifier() *string
```

- *Type:* *string

---

##### `DataMigrationName`<sup>Required</sup> <a name="DataMigrationName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationName"></a>

```go
func DataMigrationName() *string
```

- *Type:* *string

---

##### `DataMigrationType`<sup>Required</sup> <a name="DataMigrationType" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.dataMigrationType"></a>

```go
func DataMigrationType() *string
```

- *Type:* *string

---

##### `MigrationProjectIdentifier`<sup>Required</sup> <a name="MigrationProjectIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.migrationProjectIdentifier"></a>

```go
func MigrationProjectIdentifier() *string
```

- *Type:* *string

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.serviceAccessRoleArn"></a>

```go
func ServiceAccessRoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDataMigrationConfig <a name="DmsDataMigrationConfig" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

&dmsdatamigration.DmsDataMigrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataMigrationType: *string,
	MigrationProjectIdentifier: *string,
	ServiceAccessRoleArn: *string,
	DataMigrationIdentifier: *string,
	DataMigrationName: *string,
	DataMigrationSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings,
	SourceDataSettings: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationType">DataMigrationType</a></code> | <code>*string</code> | The property describes the type of migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.migrationProjectIdentifier">MigrationProjectIdentifier</a></code> | <code>*string</code> | The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.serviceAccessRoleArn">ServiceAccessRoleArn</a></code> | <code>*string</code> | The property describes Amazon Resource Name (ARN) of the service access role. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationIdentifier">DataMigrationIdentifier</a></code> | <code>*string</code> | The property describes an ARN of the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationName">DataMigrationName</a></code> | <code>*string</code> | The property describes a name to identify the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationSettings">DataMigrationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a></code> | The property describes the settings for the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.sourceDataSettings">SourceDataSettings</a></code> | <code>interface{}</code> | The property describes the settings for the data migration. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataMigrationType`<sup>Required</sup> <a name="DataMigrationType" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationType"></a>

```go
DataMigrationType *string
```

- *Type:* *string

The property describes the type of migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#data_migration_type DmsDataMigration#data_migration_type}

---

##### `MigrationProjectIdentifier`<sup>Required</sup> <a name="MigrationProjectIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.migrationProjectIdentifier"></a>

```go
MigrationProjectIdentifier *string
```

- *Type:* *string

The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#migration_project_identifier DmsDataMigration#migration_project_identifier}

---

##### `ServiceAccessRoleArn`<sup>Required</sup> <a name="ServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.serviceAccessRoleArn"></a>

```go
ServiceAccessRoleArn *string
```

- *Type:* *string

The property describes Amazon Resource Name (ARN) of the service access role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#service_access_role_arn DmsDataMigration#service_access_role_arn}

---

##### `DataMigrationIdentifier`<sup>Optional</sup> <a name="DataMigrationIdentifier" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationIdentifier"></a>

```go
DataMigrationIdentifier *string
```

- *Type:* *string

The property describes an ARN of the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#data_migration_identifier DmsDataMigration#data_migration_identifier}

---

##### `DataMigrationName`<sup>Optional</sup> <a name="DataMigrationName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationName"></a>

```go
DataMigrationName *string
```

- *Type:* *string

The property describes a name to identify the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#data_migration_name DmsDataMigration#data_migration_name}

---

##### `DataMigrationSettings`<sup>Optional</sup> <a name="DataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.dataMigrationSettings"></a>

```go
DataMigrationSettings DmsDataMigrationDataMigrationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings">DmsDataMigrationDataMigrationSettings</a>

The property describes the settings for the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#data_migration_settings DmsDataMigration#data_migration_settings}

---

##### `SourceDataSettings`<sup>Optional</sup> <a name="SourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.sourceDataSettings"></a>

```go
SourceDataSettings interface{}
```

- *Type:* interface{}

The property describes the settings for the data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#source_data_settings DmsDataMigration#source_data_settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#tags DmsDataMigration#tags}

---

### DmsDataMigrationDataMigrationSettings <a name="DmsDataMigrationDataMigrationSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

&dmsdatamigration.DmsDataMigrationDataMigrationSettings {
	CloudwatchLogsEnabled: interface{},
	NumberOfJobs: *f64,
	SelectionRules: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.cloudwatchLogsEnabled">CloudwatchLogsEnabled</a></code> | <code>interface{}</code> | The property specifies whether to enable the CloudWatch log. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.numberOfJobs">NumberOfJobs</a></code> | <code>*f64</code> | The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.selectionRules">SelectionRules</a></code> | <code>*string</code> | The property specifies the rules of selecting objects for data migration. |

---

##### `CloudwatchLogsEnabled`<sup>Optional</sup> <a name="CloudwatchLogsEnabled" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.cloudwatchLogsEnabled"></a>

```go
CloudwatchLogsEnabled interface{}
```

- *Type:* interface{}

The property specifies whether to enable the CloudWatch log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#cloudwatch_logs_enabled DmsDataMigration#cloudwatch_logs_enabled}

---

##### `NumberOfJobs`<sup>Optional</sup> <a name="NumberOfJobs" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.numberOfJobs"></a>

```go
NumberOfJobs *f64
```

- *Type:* *f64

The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#number_of_jobs DmsDataMigration#number_of_jobs}

---

##### `SelectionRules`<sup>Optional</sup> <a name="SelectionRules" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettings.property.selectionRules"></a>

```go
SelectionRules *string
```

- *Type:* *string

The property specifies the rules of selecting objects for data migration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#selection_rules DmsDataMigration#selection_rules}

---

### DmsDataMigrationSourceDataSettings <a name="DmsDataMigrationSourceDataSettings" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

&dmsdatamigration.DmsDataMigrationSourceDataSettings {
	CdcStartPosition: *string,
	CdcStartTime: *string,
	CdcStopTime: *string,
	SlotName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartPosition">CdcStartPosition</a></code> | <code>*string</code> | The property is a point in the database engine's log that defines a time where you can begin CDC. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartTime">CdcStartTime</a></code> | <code>*string</code> | The property indicates the start time for a change data capture (CDC) operation. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStopTime">CdcStopTime</a></code> | <code>*string</code> | The property indicates the stop time for a change data capture (CDC) operation. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.slotName">SlotName</a></code> | <code>*string</code> | The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance. |

---

##### `CdcStartPosition`<sup>Optional</sup> <a name="CdcStartPosition" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartPosition"></a>

```go
CdcStartPosition *string
```

- *Type:* *string

The property is a point in the database engine's log that defines a time where you can begin CDC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#cdc_start_position DmsDataMigration#cdc_start_position}

---

##### `CdcStartTime`<sup>Optional</sup> <a name="CdcStartTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStartTime"></a>

```go
CdcStartTime *string
```

- *Type:* *string

The property indicates the start time for a change data capture (CDC) operation.

The value is server time in UTC format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#cdc_start_time DmsDataMigration#cdc_start_time}

---

##### `CdcStopTime`<sup>Optional</sup> <a name="CdcStopTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.cdcStopTime"></a>

```go
CdcStopTime *string
```

- *Type:* *string

The property indicates the stop time for a change data capture (CDC) operation.

The value is server time in UTC format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#cdc_stop_time DmsDataMigration#cdc_stop_time}

---

##### `SlotName`<sup>Optional</sup> <a name="SlotName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettings.property.slotName"></a>

```go
SlotName *string
```

- *Type:* *string

The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#slot_name DmsDataMigration#slot_name}

---

### DmsDataMigrationTags <a name="DmsDataMigrationTags" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

&dmsdatamigration.DmsDataMigrationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#key DmsDataMigration#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/dms_data_migration#value DmsDataMigration#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDataMigrationDataMigrationSettingsOutputReference <a name="DmsDataMigrationDataMigrationSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

dmsdatamigration.NewDmsDataMigrationDataMigrationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDataMigrationDataMigrationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetCloudwatchLogsEnabled">ResetCloudwatchLogsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetNumberOfJobs">ResetNumberOfJobs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetSelectionRules">ResetSelectionRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchLogsEnabled` <a name="ResetCloudwatchLogsEnabled" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetCloudwatchLogsEnabled"></a>

```go
func ResetCloudwatchLogsEnabled()
```

##### `ResetNumberOfJobs` <a name="ResetNumberOfJobs" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetNumberOfJobs"></a>

```go
func ResetNumberOfJobs()
```

##### `ResetSelectionRules` <a name="ResetSelectionRules" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.resetSelectionRules"></a>

```go
func ResetSelectionRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabledInput">CloudwatchLogsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobsInput">NumberOfJobsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRulesInput">SelectionRulesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabled">CloudwatchLogsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobs">NumberOfJobs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRules">SelectionRules</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsEnabledInput`<sup>Optional</sup> <a name="CloudwatchLogsEnabledInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabledInput"></a>

```go
func CloudwatchLogsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NumberOfJobsInput`<sup>Optional</sup> <a name="NumberOfJobsInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobsInput"></a>

```go
func NumberOfJobsInput() *f64
```

- *Type:* *f64

---

##### `SelectionRulesInput`<sup>Optional</sup> <a name="SelectionRulesInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRulesInput"></a>

```go
func SelectionRulesInput() *string
```

- *Type:* *string

---

##### `CloudwatchLogsEnabled`<sup>Required</sup> <a name="CloudwatchLogsEnabled" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.cloudwatchLogsEnabled"></a>

```go
func CloudwatchLogsEnabled() interface{}
```

- *Type:* interface{}

---

##### `NumberOfJobs`<sup>Required</sup> <a name="NumberOfJobs" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.numberOfJobs"></a>

```go
func NumberOfJobs() *f64
```

- *Type:* *f64

---

##### `SelectionRules`<sup>Required</sup> <a name="SelectionRules" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.selectionRules"></a>

```go
func SelectionRules() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationDataMigrationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataMigrationSourceDataSettingsList <a name="DmsDataMigrationSourceDataSettingsList" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

dmsdatamigration.NewDmsDataMigrationSourceDataSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataMigrationSourceDataSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.get"></a>

```go
func Get(index *f64) DmsDataMigrationSourceDataSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataMigrationSourceDataSettingsOutputReference <a name="DmsDataMigrationSourceDataSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

dmsdatamigration.NewDmsDataMigrationSourceDataSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataMigrationSourceDataSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartPosition">ResetCdcStartPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartTime">ResetCdcStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStopTime">ResetCdcStopTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetSlotName">ResetSlotName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCdcStartPosition` <a name="ResetCdcStartPosition" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartPosition"></a>

```go
func ResetCdcStartPosition()
```

##### `ResetCdcStartTime` <a name="ResetCdcStartTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStartTime"></a>

```go
func ResetCdcStartTime()
```

##### `ResetCdcStopTime` <a name="ResetCdcStopTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetCdcStopTime"></a>

```go
func ResetCdcStopTime()
```

##### `ResetSlotName` <a name="ResetSlotName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.resetSlotName"></a>

```go
func ResetSlotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPositionInput">CdcStartPositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTimeInput">CdcStartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTimeInput">CdcStopTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotNameInput">SlotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPosition">CdcStartPosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTime">CdcStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTime">CdcStopTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotName">SlotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CdcStartPositionInput`<sup>Optional</sup> <a name="CdcStartPositionInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPositionInput"></a>

```go
func CdcStartPositionInput() *string
```

- *Type:* *string

---

##### `CdcStartTimeInput`<sup>Optional</sup> <a name="CdcStartTimeInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTimeInput"></a>

```go
func CdcStartTimeInput() *string
```

- *Type:* *string

---

##### `CdcStopTimeInput`<sup>Optional</sup> <a name="CdcStopTimeInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTimeInput"></a>

```go
func CdcStopTimeInput() *string
```

- *Type:* *string

---

##### `SlotNameInput`<sup>Optional</sup> <a name="SlotNameInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotNameInput"></a>

```go
func SlotNameInput() *string
```

- *Type:* *string

---

##### `CdcStartPosition`<sup>Required</sup> <a name="CdcStartPosition" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartPosition"></a>

```go
func CdcStartPosition() *string
```

- *Type:* *string

---

##### `CdcStartTime`<sup>Required</sup> <a name="CdcStartTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStartTime"></a>

```go
func CdcStartTime() *string
```

- *Type:* *string

---

##### `CdcStopTime`<sup>Required</sup> <a name="CdcStopTime" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.cdcStopTime"></a>

```go
func CdcStopTime() *string
```

- *Type:* *string

---

##### `SlotName`<sup>Required</sup> <a name="SlotName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.slotName"></a>

```go
func SlotName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationSourceDataSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataMigrationTagsList <a name="DmsDataMigrationTagsList" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

dmsdatamigration.NewDmsDataMigrationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataMigrationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.get"></a>

```go
func Get(index *f64) DmsDataMigrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataMigrationTagsOutputReference <a name="DmsDataMigrationTagsOutputReference" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdatamigration"

dmsdatamigration.NewDmsDataMigrationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataMigrationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataMigration.DmsDataMigrationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



