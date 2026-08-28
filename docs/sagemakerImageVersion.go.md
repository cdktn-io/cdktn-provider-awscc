# `sagemakerImageVersion` Submodule <a name="`sagemakerImageVersion` Submodule" id="@cdktn/provider-awscc.sagemakerImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerImageVersion <a name="SagemakerImageVersion" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version awscc_sagemaker_image_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerimageversion"

sagemakerimageversion.NewSagemakerImageVersion(scope Construct, id *string, config SagemakerImageVersionConfig) SagemakerImageVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig">SagemakerImageVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig">SagemakerImageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetAliases">ResetAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetHorovod">ResetHorovod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetJobType">ResetJobType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetMlFramework">ResetMlFramework</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetProcessor">ResetProcessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetProgrammingLang">ResetProgrammingLang</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetReleaseNotes">ResetReleaseNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetVendorGuidance">ResetVendorGuidance</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAliases` <a name="ResetAliases" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetAliases"></a>

```go
func ResetAliases()
```

##### `ResetHorovod` <a name="ResetHorovod" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetHorovod"></a>

```go
func ResetHorovod()
```

##### `ResetJobType` <a name="ResetJobType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetJobType"></a>

```go
func ResetJobType()
```

##### `ResetMlFramework` <a name="ResetMlFramework" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetMlFramework"></a>

```go
func ResetMlFramework()
```

##### `ResetProcessor` <a name="ResetProcessor" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetProcessor"></a>

```go
func ResetProcessor()
```

##### `ResetProgrammingLang` <a name="ResetProgrammingLang" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetProgrammingLang"></a>

```go
func ResetProgrammingLang()
```

##### `ResetReleaseNotes` <a name="ResetReleaseNotes" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetReleaseNotes"></a>

```go
func ResetReleaseNotes()
```

##### `ResetVendorGuidance` <a name="ResetVendorGuidance" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.resetVendorGuidance"></a>

```go
func ResetVendorGuidance()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerImageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerimageversion"

sagemakerimageversion.SagemakerImageVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerimageversion"

sagemakerimageversion.SagemakerImageVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerimageversion"

sagemakerimageversion.SagemakerImageVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerimageversion"

sagemakerimageversion.SagemakerImageVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerImageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerImageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.containerImage">ContainerImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageArn">ImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageVersionArn">ImageVersionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliasesInput">AliasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.baseImageInput">BaseImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.horovodInput">HorovodInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.jobTypeInput">JobTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.mlFrameworkInput">MlFrameworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.processorInput">ProcessorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.programmingLangInput">ProgrammingLangInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotesInput">ReleaseNotesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidanceInput">VendorGuidanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliases">Aliases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.baseImage">BaseImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.horovod">Horovod</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.jobType">JobType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.mlFramework">MlFramework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.processor">Processor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.programmingLang">ProgrammingLang</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotes">ReleaseNotes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidance">VendorGuidance</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerImage`<sup>Required</sup> <a name="ContainerImage" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.containerImage"></a>

```go
func ContainerImage() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageArn`<sup>Required</sup> <a name="ImageArn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageArn"></a>

```go
func ImageArn() *string
```

- *Type:* *string

---

##### `ImageVersionArn`<sup>Required</sup> <a name="ImageVersionArn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageVersionArn"></a>

```go
func ImageVersionArn() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliasesInput"></a>

```go
func AliasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `BaseImageInput`<sup>Optional</sup> <a name="BaseImageInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.baseImageInput"></a>

```go
func BaseImageInput() *string
```

- *Type:* *string

---

##### `HorovodInput`<sup>Optional</sup> <a name="HorovodInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.horovodInput"></a>

```go
func HorovodInput() interface{}
```

- *Type:* interface{}

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `JobTypeInput`<sup>Optional</sup> <a name="JobTypeInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.jobTypeInput"></a>

```go
func JobTypeInput() *string
```

- *Type:* *string

---

##### `MlFrameworkInput`<sup>Optional</sup> <a name="MlFrameworkInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.mlFrameworkInput"></a>

```go
func MlFrameworkInput() *string
```

- *Type:* *string

---

##### `ProcessorInput`<sup>Optional</sup> <a name="ProcessorInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.processorInput"></a>

```go
func ProcessorInput() *string
```

- *Type:* *string

---

##### `ProgrammingLangInput`<sup>Optional</sup> <a name="ProgrammingLangInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.programmingLangInput"></a>

```go
func ProgrammingLangInput() *string
```

- *Type:* *string

---

##### `ReleaseNotesInput`<sup>Optional</sup> <a name="ReleaseNotesInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotesInput"></a>

```go
func ReleaseNotesInput() *string
```

- *Type:* *string

---

##### `VendorGuidanceInput`<sup>Optional</sup> <a name="VendorGuidanceInput" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidanceInput"></a>

```go
func VendorGuidanceInput() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.aliases"></a>

```go
func Aliases() *[]*string
```

- *Type:* *[]*string

---

##### `BaseImage`<sup>Required</sup> <a name="BaseImage" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.baseImage"></a>

```go
func BaseImage() *string
```

- *Type:* *string

---

##### `Horovod`<sup>Required</sup> <a name="Horovod" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.horovod"></a>

```go
func Horovod() interface{}
```

- *Type:* interface{}

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `JobType`<sup>Required</sup> <a name="JobType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.jobType"></a>

```go
func JobType() *string
```

- *Type:* *string

---

##### `MlFramework`<sup>Required</sup> <a name="MlFramework" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.mlFramework"></a>

```go
func MlFramework() *string
```

- *Type:* *string

---

##### `Processor`<sup>Required</sup> <a name="Processor" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.processor"></a>

```go
func Processor() *string
```

- *Type:* *string

---

##### `ProgrammingLang`<sup>Required</sup> <a name="ProgrammingLang" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.programmingLang"></a>

```go
func ProgrammingLang() *string
```

- *Type:* *string

---

##### `ReleaseNotes`<sup>Required</sup> <a name="ReleaseNotes" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.releaseNotes"></a>

```go
func ReleaseNotes() *string
```

- *Type:* *string

---

##### `VendorGuidance`<sup>Required</sup> <a name="VendorGuidance" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.vendorGuidance"></a>

```go
func VendorGuidance() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerImageVersionConfig <a name="SagemakerImageVersionConfig" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakerimageversion"

&sagemakerimageversion.SagemakerImageVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BaseImage: *string,
	ImageName: *string,
	Alias: *string,
	Aliases: *[]*string,
	Horovod: interface{},
	JobType: *string,
	MlFramework: *string,
	Processor: *string,
	ProgrammingLang: *string,
	ReleaseNotes: *string,
	VendorGuidance: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.baseImage">BaseImage</a></code> | <code>*string</code> | The registry path of the container image on which this image version is based. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.imageName">ImageName</a></code> | <code>*string</code> | The name of the image this version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.alias">Alias</a></code> | <code>*string</code> | The alias of the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.aliases">Aliases</a></code> | <code>*[]*string</code> | List of aliases for the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.horovod">Horovod</a></code> | <code>interface{}</code> | Indicates Horovod compatibility. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.jobType">JobType</a></code> | <code>*string</code> | Indicates SageMaker job type compatibility. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.mlFramework">MlFramework</a></code> | <code>*string</code> | The machine learning framework vended in the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.processor">Processor</a></code> | <code>*string</code> | Indicates CPU or GPU compatibility. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.programmingLang">ProgrammingLang</a></code> | <code>*string</code> | The supported programming language and its version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.releaseNotes">ReleaseNotes</a></code> | <code>*string</code> | The maintainer description of the image version. |
| <code><a href="#@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.vendorGuidance">VendorGuidance</a></code> | <code>*string</code> | The availability of the image version specified by the maintainer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaseImage`<sup>Required</sup> <a name="BaseImage" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.baseImage"></a>

```go
BaseImage *string
```

- *Type:* *string

The registry path of the container image on which this image version is based.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#base_image SagemakerImageVersion#base_image}

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

The name of the image this version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#image_name SagemakerImageVersion#image_name}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

The alias of the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#alias SagemakerImageVersion#alias}

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.aliases"></a>

```go
Aliases *[]*string
```

- *Type:* *[]*string

List of aliases for the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#aliases SagemakerImageVersion#aliases}

---

##### `Horovod`<sup>Optional</sup> <a name="Horovod" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.horovod"></a>

```go
Horovod interface{}
```

- *Type:* interface{}

Indicates Horovod compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#horovod SagemakerImageVersion#horovod}

---

##### `JobType`<sup>Optional</sup> <a name="JobType" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.jobType"></a>

```go
JobType *string
```

- *Type:* *string

Indicates SageMaker job type compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#job_type SagemakerImageVersion#job_type}

---

##### `MlFramework`<sup>Optional</sup> <a name="MlFramework" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.mlFramework"></a>

```go
MlFramework *string
```

- *Type:* *string

The machine learning framework vended in the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#ml_framework SagemakerImageVersion#ml_framework}

---

##### `Processor`<sup>Optional</sup> <a name="Processor" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.processor"></a>

```go
Processor *string
```

- *Type:* *string

Indicates CPU or GPU compatibility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#processor SagemakerImageVersion#processor}

---

##### `ProgrammingLang`<sup>Optional</sup> <a name="ProgrammingLang" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.programmingLang"></a>

```go
ProgrammingLang *string
```

- *Type:* *string

The supported programming language and its version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#programming_lang SagemakerImageVersion#programming_lang}

---

##### `ReleaseNotes`<sup>Optional</sup> <a name="ReleaseNotes" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.releaseNotes"></a>

```go
ReleaseNotes *string
```

- *Type:* *string

The maintainer description of the image version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#release_notes SagemakerImageVersion#release_notes}

---

##### `VendorGuidance`<sup>Optional</sup> <a name="VendorGuidance" id="@cdktn/provider-awscc.sagemakerImageVersion.SagemakerImageVersionConfig.property.vendorGuidance"></a>

```go
VendorGuidance *string
```

- *Type:* *string

The availability of the image version specified by the maintainer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/sagemaker_image_version#vendor_guidance SagemakerImageVersion#vendor_guidance}

---



