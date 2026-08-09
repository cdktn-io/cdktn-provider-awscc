# `dmsDataProvider` Submodule <a name="`dmsDataProvider` Submodule" id="@cdktn/provider-awscc.dmsDataProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsDataProvider <a name="DmsDataProvider" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider awscc_dms_data_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProvider(scope Construct, id *string, config DmsDataProviderConfig) DmsDataProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig">DmsDataProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig">DmsDataProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetDataProviderIdentifier">ResetDataProviderIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetDataProviderName">ResetDataProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetExactSettings">ResetExactSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings"></a>

```go
func PutSettings(value DmsDataProviderSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataProviderIdentifier` <a name="ResetDataProviderIdentifier" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetDataProviderIdentifier"></a>

```go
func ResetDataProviderIdentifier()
```

##### `ResetDataProviderName` <a name="ResetDataProviderName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetDataProviderName"></a>

```go
func ResetDataProviderName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExactSettings` <a name="ResetExactSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetExactSettings"></a>

```go
func ResetExactSettings()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.DmsDataProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.DmsDataProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.DmsDataProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.DmsDataProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DmsDataProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DmsDataProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DmsDataProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DmsDataProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderArn">DataProviderArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderCreationTime">DataProviderCreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference">DmsDataProviderSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList">DmsDataProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderIdentifierInput">DataProviderIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderNameInput">DataProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.exactSettingsInput">ExactSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.settingsInput">SettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderIdentifier">DataProviderIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderName">DataProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.exactSettings">ExactSettings</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataProviderArn`<sup>Required</sup> <a name="DataProviderArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderArn"></a>

```go
func DataProviderArn() *string
```

- *Type:* *string

---

##### `DataProviderCreationTime`<sup>Required</sup> <a name="DataProviderCreationTime" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderCreationTime"></a>

```go
func DataProviderCreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.settings"></a>

```go
func Settings() DmsDataProviderSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference">DmsDataProviderSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.tags"></a>

```go
func Tags() DmsDataProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList">DmsDataProviderTagsList</a>

---

##### `DataProviderIdentifierInput`<sup>Optional</sup> <a name="DataProviderIdentifierInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderIdentifierInput"></a>

```go
func DataProviderIdentifierInput() *string
```

- *Type:* *string

---

##### `DataProviderNameInput`<sup>Optional</sup> <a name="DataProviderNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderNameInput"></a>

```go
func DataProviderNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `ExactSettingsInput`<sup>Optional</sup> <a name="ExactSettingsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.exactSettingsInput"></a>

```go
func ExactSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.settingsInput"></a>

```go
func SettingsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DataProviderIdentifier`<sup>Required</sup> <a name="DataProviderIdentifier" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderIdentifier"></a>

```go
func DataProviderIdentifier() *string
```

- *Type:* *string

---

##### `DataProviderName`<sup>Required</sup> <a name="DataProviderName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.dataProviderName"></a>

```go
func DataProviderName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `ExactSettings`<sup>Required</sup> <a name="ExactSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.exactSettings"></a>

```go
func ExactSettings() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsDataProviderConfig <a name="DmsDataProviderConfig" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Engine: *string,
	DataProviderIdentifier: *string,
	DataProviderName: *string,
	Description: *string,
	ExactSettings: interface{},
	Settings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsDataProvider.DmsDataProviderSettings,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.engine">Engine</a></code> | <code>*string</code> | The property describes a data engine for the data provider. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.dataProviderIdentifier">DataProviderIdentifier</a></code> | <code>*string</code> | The property describes an identifier for the data provider. It is used for describing/deleting/modifying can be name/arn. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.dataProviderName">DataProviderName</a></code> | <code>*string</code> | The property describes a name to identify the data provider. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.description">Description</a></code> | <code>*string</code> | The optional description of the data provider. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.exactSettings">ExactSettings</a></code> | <code>interface{}</code> | The property describes the exact settings which can be modified. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a></code> | The property identifies the exact type of settings for the data provider. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

The property describes a data engine for the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#engine DmsDataProvider#engine}

---

##### `DataProviderIdentifier`<sup>Optional</sup> <a name="DataProviderIdentifier" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.dataProviderIdentifier"></a>

```go
DataProviderIdentifier *string
```

- *Type:* *string

The property describes an identifier for the data provider. It is used for describing/deleting/modifying can be name/arn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#data_provider_identifier DmsDataProvider#data_provider_identifier}

---

##### `DataProviderName`<sup>Optional</sup> <a name="DataProviderName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.dataProviderName"></a>

```go
DataProviderName *string
```

- *Type:* *string

The property describes a name to identify the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#data_provider_name DmsDataProvider#data_provider_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The optional description of the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#description DmsDataProvider#description}

---

##### `ExactSettings`<sup>Optional</sup> <a name="ExactSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.exactSettings"></a>

```go
ExactSettings interface{}
```

- *Type:* interface{}

The property describes the exact settings which can be modified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#exact_settings DmsDataProvider#exact_settings}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.settings"></a>

```go
Settings DmsDataProviderSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings">DmsDataProviderSettings</a>

The property identifies the exact type of settings for the data provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#settings DmsDataProvider#settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#tags DmsDataProvider#tags}

---

### DmsDataProviderSettings <a name="DmsDataProviderSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettings {
	DocDbSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings,
	IbmDb2LuwSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings,
	IbmDb2ZOsSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings,
	MariaDbSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings,
	MicrosoftSqlServerSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings,
	MongoDbSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings,
	MySqlSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings,
	OracleSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings,
	PostgreSqlSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings,
	RedshiftSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings,
	SybaseAseSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings">DocDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a></code> | DocDbSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings">IbmDb2LuwSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a></code> | IbmDb2LuwSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZOsSettings">IbmDb2ZOsSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings">DmsDataProviderSettingsIbmDb2ZOsSettings</a></code> | IbmDb2zOsSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings">MariaDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a></code> | MariaDbSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings">MicrosoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a></code> | MicrosoftSqlServerSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings">MongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a></code> | MongoDbSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.mySqlSettings">MySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings">DmsDataProviderSettingsMySqlSettings</a></code> | MySqlSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings">OracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a></code> | OracleSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.postgreSqlSettings">PostgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings">DmsDataProviderSettingsPostgreSqlSettings</a></code> | PostgreSqlSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a></code> | RedshiftSettings property identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings">SybaseAseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a></code> | SybaseAseSettings property identifier. |

---

##### `DocDbSettings`<sup>Optional</sup> <a name="DocDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.docDbSettings"></a>

```go
DocDbSettings DmsDataProviderSettingsDocDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>

DocDbSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#doc_db_settings DmsDataProvider#doc_db_settings}

---

##### `IbmDb2LuwSettings`<sup>Optional</sup> <a name="IbmDb2LuwSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2LuwSettings"></a>

```go
IbmDb2LuwSettings DmsDataProviderSettingsIbmDb2LuwSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>

IbmDb2LuwSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ibm_db_2_luw_settings DmsDataProvider#ibm_db_2_luw_settings}

---

##### `IbmDb2ZOsSettings`<sup>Optional</sup> <a name="IbmDb2ZOsSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.ibmDb2ZOsSettings"></a>

```go
IbmDb2ZOsSettings DmsDataProviderSettingsIbmDb2ZOsSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings">DmsDataProviderSettingsIbmDb2ZOsSettings</a>

IbmDb2zOsSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ibm_db_2_z_os_settings DmsDataProvider#ibm_db_2_z_os_settings}

---

##### `MariaDbSettings`<sup>Optional</sup> <a name="MariaDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.mariaDbSettings"></a>

```go
MariaDbSettings DmsDataProviderSettingsMariaDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>

MariaDbSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#maria_db_settings DmsDataProvider#maria_db_settings}

---

##### `MicrosoftSqlServerSettings`<sup>Optional</sup> <a name="MicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.microsoftSqlServerSettings"></a>

```go
MicrosoftSqlServerSettings DmsDataProviderSettingsMicrosoftSqlServerSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>

MicrosoftSqlServerSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#microsoft_sql_server_settings DmsDataProvider#microsoft_sql_server_settings}

---

##### `MongoDbSettings`<sup>Optional</sup> <a name="MongoDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.mongoDbSettings"></a>

```go
MongoDbSettings DmsDataProviderSettingsMongoDbSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>

MongoDbSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#mongo_db_settings DmsDataProvider#mongo_db_settings}

---

##### `MySqlSettings`<sup>Optional</sup> <a name="MySqlSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.mySqlSettings"></a>

```go
MySqlSettings DmsDataProviderSettingsMySqlSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings">DmsDataProviderSettingsMySqlSettings</a>

MySqlSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#my_sql_settings DmsDataProvider#my_sql_settings}

---

##### `OracleSettings`<sup>Optional</sup> <a name="OracleSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.oracleSettings"></a>

```go
OracleSettings DmsDataProviderSettingsOracleSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>

OracleSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#oracle_settings DmsDataProvider#oracle_settings}

---

##### `PostgreSqlSettings`<sup>Optional</sup> <a name="PostgreSqlSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.postgreSqlSettings"></a>

```go
PostgreSqlSettings DmsDataProviderSettingsPostgreSqlSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings">DmsDataProviderSettingsPostgreSqlSettings</a>

PostgreSqlSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#postgre_sql_settings DmsDataProvider#postgre_sql_settings}

---

##### `RedshiftSettings`<sup>Optional</sup> <a name="RedshiftSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.redshiftSettings"></a>

```go
RedshiftSettings DmsDataProviderSettingsRedshiftSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>

RedshiftSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#redshift_settings DmsDataProvider#redshift_settings}

---

##### `SybaseAseSettings`<sup>Optional</sup> <a name="SybaseAseSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettings.property.sybaseAseSettings"></a>

```go
SybaseAseSettings DmsDataProviderSettingsSybaseAseSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>

SybaseAseSettings property identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#sybase_ase_settings DmsDataProvider#sybase_ase_settings}

---

### DmsDataProviderSettingsDocDbSettings <a name="DmsDataProviderSettingsDocDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsDocDbSettings {
	CertificateArn: *string,
	DatabaseName: *string,
	Port: *f64,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2LuwSettings <a name="DmsDataProviderSettingsIbmDb2LuwSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsIbmDb2LuwSettings {
	CertificateArn: *string,
	DatabaseName: *string,
	Port: *f64,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsIbmDb2ZOsSettings <a name="DmsDataProviderSettingsIbmDb2ZOsSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsIbmDb2ZOsSettings {
	CertificateArn: *string,
	DatabaseName: *string,
	Port: *f64,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMariaDbSettings <a name="DmsDataProviderSettingsMariaDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsMariaDbSettings {
	CertificateArn: *string,
	Port: *f64,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMicrosoftSqlServerSettings <a name="DmsDataProviderSettingsMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsMicrosoftSqlServerSettings {
	CertificateArn: *string,
	DatabaseName: *string,
	Port: *f64,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMongoDbSettings <a name="DmsDataProviderSettingsMongoDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsMongoDbSettings {
	AuthMechanism: *string,
	AuthSource: *string,
	AuthType: *string,
	CertificateArn: *string,
	DatabaseName: *string,
	Port: *f64,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism">AuthMechanism</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource">AuthSource</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType">AuthType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `AuthMechanism`<sup>Optional</sup> <a name="AuthMechanism" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authMechanism"></a>

```go
AuthMechanism *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_mechanism DmsDataProvider#auth_mechanism}.

---

##### `AuthSource`<sup>Optional</sup> <a name="AuthSource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authSource"></a>

```go
AuthSource *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_source DmsDataProvider#auth_source}.

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#auth_type DmsDataProvider#auth_type}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsMySqlSettings <a name="DmsDataProviderSettingsMySqlSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsMySqlSettings {
	CertificateArn: *string,
	Port: *f64,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsOracleSettings <a name="DmsDataProviderSettingsOracleSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsOracleSettings {
	AsmServer: *string,
	CertificateArn: *string,
	DatabaseName: *string,
	Port: *f64,
	SecretsManagerOracleAsmAccessRoleArn: *string,
	SecretsManagerOracleAsmSecretId: *string,
	SecretsManagerSecurityDbEncryptionAccessRoleArn: *string,
	SecretsManagerSecurityDbEncryptionSecretId: *string,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer">AsmServer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn">SecretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId">SecretsManagerSecurityDbEncryptionSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `AsmServer`<sup>Optional</sup> <a name="AsmServer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.asmServer"></a>

```go
AsmServer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#asm_server DmsDataProvider#asm_server}.

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmAccessRoleArn"></a>

```go
SecretsManagerOracleAsmAccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_access_role_arn DmsDataProvider#secrets_manager_oracle_asm_access_role_arn}.

---

##### `SecretsManagerOracleAsmSecretId`<sup>Optional</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerOracleAsmSecretId"></a>

```go
SecretsManagerOracleAsmSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_oracle_asm_secret_id DmsDataProvider#secrets_manager_oracle_asm_secret_id}.

---

##### `SecretsManagerSecurityDbEncryptionAccessRoleArn`<sup>Optional</sup> <a name="SecretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```go
SecretsManagerSecurityDbEncryptionAccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_access_role_arn DmsDataProvider#secrets_manager_security_db_encryption_access_role_arn}.

---

##### `SecretsManagerSecurityDbEncryptionSecretId`<sup>Optional</sup> <a name="SecretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```go
SecretsManagerSecurityDbEncryptionSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#secrets_manager_security_db_encryption_secret_id DmsDataProvider#secrets_manager_security_db_encryption_secret_id}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsPostgreSqlSettings <a name="DmsDataProviderSettingsPostgreSqlSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsPostgreSqlSettings {
	CertificateArn: *string,
	DatabaseName: *string,
	Port: *f64,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderSettingsRedshiftSettings <a name="DmsDataProviderSettingsRedshiftSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsRedshiftSettings {
	DatabaseName: *string,
	Port: *f64,
	ServerName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

### DmsDataProviderSettingsSybaseAseSettings <a name="DmsDataProviderSettingsSybaseAseSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderSettingsSybaseAseSettings {
	CertificateArn: *string,
	DatabaseName: *string,
	EncryptPassword: interface{},
	Port: *f64,
	ServerName: *string,
	SslMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword">EncryptPassword</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName">ServerName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#certificate_arn DmsDataProvider#certificate_arn}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#database_name DmsDataProvider#database_name}.

---

##### `EncryptPassword`<sup>Optional</sup> <a name="EncryptPassword" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.encryptPassword"></a>

```go
EncryptPassword interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#encrypt_password DmsDataProvider#encrypt_password}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#port DmsDataProvider#port}.

---

##### `ServerName`<sup>Optional</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.serverName"></a>

```go
ServerName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#server_name DmsDataProvider#server_name}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#ssl_mode DmsDataProvider#ssl_mode}.

---

### DmsDataProviderTags <a name="DmsDataProviderTags" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

&dmsdataprovider.DmsDataProviderTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#key DmsDataProvider#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/dms_data_provider#value DmsDataProvider#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsDataProviderSettingsDocDbSettingsOutputReference <a name="DmsDataProviderSettingsDocDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsDocDbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDataProviderSettingsDocDbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsIbmDb2LuwSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference <a name="DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsMariaDbSettingsOutputReference <a name="DmsDataProviderSettingsMariaDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsMariaDbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDataProviderSettingsMariaDbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference <a name="DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsMongoDbSettingsOutputReference <a name="DmsDataProviderSettingsMongoDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsMongoDbSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDataProviderSettingsMongoDbSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism">ResetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource">ResetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthMechanism` <a name="ResetAuthMechanism" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthMechanism"></a>

```go
func ResetAuthMechanism()
```

##### `ResetAuthSource` <a name="ResetAuthSource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthSource"></a>

```go
func ResetAuthSource()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput">AuthMechanismInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput">AuthSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism">AuthMechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource">AuthSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthMechanismInput`<sup>Optional</sup> <a name="AuthMechanismInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanismInput"></a>

```go
func AuthMechanismInput() *string
```

- *Type:* *string

---

##### `AuthSourceInput`<sup>Optional</sup> <a name="AuthSourceInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSourceInput"></a>

```go
func AuthSourceInput() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `AuthMechanism`<sup>Required</sup> <a name="AuthMechanism" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authMechanism"></a>

```go
func AuthMechanism() *string
```

- *Type:* *string

---

##### `AuthSource`<sup>Required</sup> <a name="AuthSource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authSource"></a>

```go
func AuthSource() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Required</sup> <a name="AuthType" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsMySqlSettingsOutputReference <a name="DmsDataProviderSettingsMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsMySqlSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDataProviderSettingsMySqlSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsOracleSettingsOutputReference <a name="DmsDataProviderSettingsOracleSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsOracleSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDataProviderSettingsOracleSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer">ResetAsmServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn">ResetSecretsManagerOracleAsmAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId">ResetSecretsManagerOracleAsmSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn">ResetSecretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId">ResetSecretsManagerSecurityDbEncryptionSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAsmServer` <a name="ResetAsmServer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetAsmServer"></a>

```go
func ResetAsmServer()
```

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetSecretsManagerOracleAsmAccessRoleArn` <a name="ResetSecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn"></a>

```go
func ResetSecretsManagerOracleAsmAccessRoleArn()
```

##### `ResetSecretsManagerOracleAsmSecretId` <a name="ResetSecretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId"></a>

```go
func ResetSecretsManagerOracleAsmSecretId()
```

##### `ResetSecretsManagerSecurityDbEncryptionAccessRoleArn` <a name="ResetSecretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```go
func ResetSecretsManagerSecurityDbEncryptionAccessRoleArn()
```

##### `ResetSecretsManagerSecurityDbEncryptionSecretId` <a name="ResetSecretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSecretsManagerSecurityDbEncryptionSecretId"></a>

```go
func ResetSecretsManagerSecurityDbEncryptionSecretId()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput">AsmServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput">SecretsManagerOracleAsmAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput">SecretsManagerOracleAsmSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput">SecretsManagerSecurityDbEncryptionAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput">SecretsManagerSecurityDbEncryptionSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer">AsmServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">SecretsManagerOracleAsmAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">SecretsManagerOracleAsmSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn">SecretsManagerSecurityDbEncryptionAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId">SecretsManagerSecurityDbEncryptionSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AsmServerInput`<sup>Optional</sup> <a name="AsmServerInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServerInput"></a>

```go
func AsmServerInput() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `SecretsManagerOracleAsmAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerOracleAsmAccessRoleArnInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput"></a>

```go
func SecretsManagerOracleAsmAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerOracleAsmSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerOracleAsmSecretIdInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput"></a>

```go
func SecretsManagerOracleAsmSecretIdInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecurityDbEncryptionAccessRoleArnInput`<sup>Optional</sup> <a name="SecretsManagerSecurityDbEncryptionAccessRoleArnInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArnInput"></a>

```go
func SecretsManagerSecurityDbEncryptionAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretsManagerSecurityDbEncryptionSecretIdInput`<sup>Optional</sup> <a name="SecretsManagerSecurityDbEncryptionSecretIdInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretIdInput"></a>

```go
func SecretsManagerSecurityDbEncryptionSecretIdInput() *string
```

- *Type:* *string

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `AsmServer`<sup>Required</sup> <a name="AsmServer" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.asmServer"></a>

```go
func AsmServer() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SecretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```go
func SecretsManagerOracleAsmAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="SecretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```go
func SecretsManagerOracleAsmSecretId() *string
```

- *Type:* *string

---

##### `SecretsManagerSecurityDbEncryptionAccessRoleArn`<sup>Required</sup> <a name="SecretsManagerSecurityDbEncryptionAccessRoleArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionAccessRoleArn"></a>

```go
func SecretsManagerSecurityDbEncryptionAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretsManagerSecurityDbEncryptionSecretId`<sup>Required</sup> <a name="SecretsManagerSecurityDbEncryptionSecretId" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.secretsManagerSecurityDbEncryptionSecretId"></a>

```go
func SecretsManagerSecurityDbEncryptionSecretId() *string
```

- *Type:* *string

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsOutputReference <a name="DmsDataProviderSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDataProviderSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings">PutDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings">PutIbmDb2LuwSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZOsSettings">PutIbmDb2ZOsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings">PutMariaDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings">PutMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings">PutMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMySqlSettings">PutMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings">PutOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgreSqlSettings">PutPostgreSqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings">PutRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings">PutSybaseAseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings">ResetDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings">ResetIbmDb2LuwSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZOsSettings">ResetIbmDb2ZOsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings">ResetMariaDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings">ResetMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings">ResetMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMySqlSettings">ResetMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings">ResetOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgreSqlSettings">ResetPostgreSqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings">ResetRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings">ResetSybaseAseSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDocDbSettings` <a name="PutDocDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings"></a>

```go
func PutDocDbSettings(value DmsDataProviderSettingsDocDbSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putDocDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettings">DmsDataProviderSettingsDocDbSettings</a>

---

##### `PutIbmDb2LuwSettings` <a name="PutIbmDb2LuwSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings"></a>

```go
func PutIbmDb2LuwSettings(value DmsDataProviderSettingsIbmDb2LuwSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2LuwSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettings">DmsDataProviderSettingsIbmDb2LuwSettings</a>

---

##### `PutIbmDb2ZOsSettings` <a name="PutIbmDb2ZOsSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZOsSettings"></a>

```go
func PutIbmDb2ZOsSettings(value DmsDataProviderSettingsIbmDb2ZOsSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putIbmDb2ZOsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettings">DmsDataProviderSettingsIbmDb2ZOsSettings</a>

---

##### `PutMariaDbSettings` <a name="PutMariaDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings"></a>

```go
func PutMariaDbSettings(value DmsDataProviderSettingsMariaDbSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMariaDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettings">DmsDataProviderSettingsMariaDbSettings</a>

---

##### `PutMicrosoftSqlServerSettings` <a name="PutMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings"></a>

```go
func PutMicrosoftSqlServerSettings(value DmsDataProviderSettingsMicrosoftSqlServerSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMicrosoftSqlServerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettings">DmsDataProviderSettingsMicrosoftSqlServerSettings</a>

---

##### `PutMongoDbSettings` <a name="PutMongoDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings"></a>

```go
func PutMongoDbSettings(value DmsDataProviderSettingsMongoDbSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMongoDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettings">DmsDataProviderSettingsMongoDbSettings</a>

---

##### `PutMySqlSettings` <a name="PutMySqlSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMySqlSettings"></a>

```go
func PutMySqlSettings(value DmsDataProviderSettingsMySqlSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putMySqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettings">DmsDataProviderSettingsMySqlSettings</a>

---

##### `PutOracleSettings` <a name="PutOracleSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings"></a>

```go
func PutOracleSettings(value DmsDataProviderSettingsOracleSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putOracleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettings">DmsDataProviderSettingsOracleSettings</a>

---

##### `PutPostgreSqlSettings` <a name="PutPostgreSqlSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgreSqlSettings"></a>

```go
func PutPostgreSqlSettings(value DmsDataProviderSettingsPostgreSqlSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putPostgreSqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettings">DmsDataProviderSettingsPostgreSqlSettings</a>

---

##### `PutRedshiftSettings` <a name="PutRedshiftSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings"></a>

```go
func PutRedshiftSettings(value DmsDataProviderSettingsRedshiftSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putRedshiftSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettings">DmsDataProviderSettingsRedshiftSettings</a>

---

##### `PutSybaseAseSettings` <a name="PutSybaseAseSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings"></a>

```go
func PutSybaseAseSettings(value DmsDataProviderSettingsSybaseAseSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.putSybaseAseSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettings">DmsDataProviderSettingsSybaseAseSettings</a>

---

##### `ResetDocDbSettings` <a name="ResetDocDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetDocDbSettings"></a>

```go
func ResetDocDbSettings()
```

##### `ResetIbmDb2LuwSettings` <a name="ResetIbmDb2LuwSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2LuwSettings"></a>

```go
func ResetIbmDb2LuwSettings()
```

##### `ResetIbmDb2ZOsSettings` <a name="ResetIbmDb2ZOsSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetIbmDb2ZOsSettings"></a>

```go
func ResetIbmDb2ZOsSettings()
```

##### `ResetMariaDbSettings` <a name="ResetMariaDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMariaDbSettings"></a>

```go
func ResetMariaDbSettings()
```

##### `ResetMicrosoftSqlServerSettings` <a name="ResetMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMicrosoftSqlServerSettings"></a>

```go
func ResetMicrosoftSqlServerSettings()
```

##### `ResetMongoDbSettings` <a name="ResetMongoDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMongoDbSettings"></a>

```go
func ResetMongoDbSettings()
```

##### `ResetMySqlSettings` <a name="ResetMySqlSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetMySqlSettings"></a>

```go
func ResetMySqlSettings()
```

##### `ResetOracleSettings` <a name="ResetOracleSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetOracleSettings"></a>

```go
func ResetOracleSettings()
```

##### `ResetPostgreSqlSettings` <a name="ResetPostgreSqlSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetPostgreSqlSettings"></a>

```go
func ResetPostgreSqlSettings()
```

##### `ResetRedshiftSettings` <a name="ResetRedshiftSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetRedshiftSettings"></a>

```go
func ResetRedshiftSettings()
```

##### `ResetSybaseAseSettings` <a name="ResetSybaseAseSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.resetSybaseAseSettings"></a>

```go
func ResetSybaseAseSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings">DocDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference">DmsDataProviderSettingsDocDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings">IbmDb2LuwSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference">DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZOsSettings">IbmDb2ZOsSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference">DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings">MariaDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference">DmsDataProviderSettingsMariaDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings">MicrosoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference">DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings">MongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference">DmsDataProviderSettingsMongoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mySqlSettings">MySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference">DmsDataProviderSettingsMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings">OracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference">DmsDataProviderSettingsOracleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgreSqlSettings">PostgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference">DmsDataProviderSettingsPostgreSqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings">RedshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference">DmsDataProviderSettingsRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings">SybaseAseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference">DmsDataProviderSettingsSybaseAseSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput">DocDbSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput">IbmDb2LuwSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZOsSettingsInput">IbmDb2ZOsSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput">MariaDbSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput">MicrosoftSqlServerSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput">MongoDbSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mySqlSettingsInput">MySqlSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput">OracleSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgreSqlSettingsInput">PostgreSqlSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput">RedshiftSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput">SybaseAseSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocDbSettings`<sup>Required</sup> <a name="DocDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettings"></a>

```go
func DocDbSettings() DmsDataProviderSettingsDocDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsDocDbSettingsOutputReference">DmsDataProviderSettingsDocDbSettingsOutputReference</a>

---

##### `IbmDb2LuwSettings`<sup>Required</sup> <a name="IbmDb2LuwSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettings"></a>

```go
func IbmDb2LuwSettings() DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference">DmsDataProviderSettingsIbmDb2LuwSettingsOutputReference</a>

---

##### `IbmDb2ZOsSettings`<sup>Required</sup> <a name="IbmDb2ZOsSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZOsSettings"></a>

```go
func IbmDb2ZOsSettings() DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference">DmsDataProviderSettingsIbmDb2ZOsSettingsOutputReference</a>

---

##### `MariaDbSettings`<sup>Required</sup> <a name="MariaDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettings"></a>

```go
func MariaDbSettings() DmsDataProviderSettingsMariaDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMariaDbSettingsOutputReference">DmsDataProviderSettingsMariaDbSettingsOutputReference</a>

---

##### `MicrosoftSqlServerSettings`<sup>Required</sup> <a name="MicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettings"></a>

```go
func MicrosoftSqlServerSettings() DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference">DmsDataProviderSettingsMicrosoftSqlServerSettingsOutputReference</a>

---

##### `MongoDbSettings`<sup>Required</sup> <a name="MongoDbSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettings"></a>

```go
func MongoDbSettings() DmsDataProviderSettingsMongoDbSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMongoDbSettingsOutputReference">DmsDataProviderSettingsMongoDbSettingsOutputReference</a>

---

##### `MySqlSettings`<sup>Required</sup> <a name="MySqlSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mySqlSettings"></a>

```go
func MySqlSettings() DmsDataProviderSettingsMySqlSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsMySqlSettingsOutputReference">DmsDataProviderSettingsMySqlSettingsOutputReference</a>

---

##### `OracleSettings`<sup>Required</sup> <a name="OracleSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettings"></a>

```go
func OracleSettings() DmsDataProviderSettingsOracleSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOracleSettingsOutputReference">DmsDataProviderSettingsOracleSettingsOutputReference</a>

---

##### `PostgreSqlSettings`<sup>Required</sup> <a name="PostgreSqlSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgreSqlSettings"></a>

```go
func PostgreSqlSettings() DmsDataProviderSettingsPostgreSqlSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference">DmsDataProviderSettingsPostgreSqlSettingsOutputReference</a>

---

##### `RedshiftSettings`<sup>Required</sup> <a name="RedshiftSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettings"></a>

```go
func RedshiftSettings() DmsDataProviderSettingsRedshiftSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference">DmsDataProviderSettingsRedshiftSettingsOutputReference</a>

---

##### `SybaseAseSettings`<sup>Required</sup> <a name="SybaseAseSettings" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettings"></a>

```go
func SybaseAseSettings() DmsDataProviderSettingsSybaseAseSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference">DmsDataProviderSettingsSybaseAseSettingsOutputReference</a>

---

##### `DocDbSettingsInput`<sup>Optional</sup> <a name="DocDbSettingsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.docDbSettingsInput"></a>

```go
func DocDbSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `IbmDb2LuwSettingsInput`<sup>Optional</sup> <a name="IbmDb2LuwSettingsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2LuwSettingsInput"></a>

```go
func IbmDb2LuwSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `IbmDb2ZOsSettingsInput`<sup>Optional</sup> <a name="IbmDb2ZOsSettingsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.ibmDb2ZOsSettingsInput"></a>

```go
func IbmDb2ZOsSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `MariaDbSettingsInput`<sup>Optional</sup> <a name="MariaDbSettingsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mariaDbSettingsInput"></a>

```go
func MariaDbSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `MicrosoftSqlServerSettingsInput`<sup>Optional</sup> <a name="MicrosoftSqlServerSettingsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.microsoftSqlServerSettingsInput"></a>

```go
func MicrosoftSqlServerSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `MongoDbSettingsInput`<sup>Optional</sup> <a name="MongoDbSettingsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mongoDbSettingsInput"></a>

```go
func MongoDbSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `MySqlSettingsInput`<sup>Optional</sup> <a name="MySqlSettingsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.mySqlSettingsInput"></a>

```go
func MySqlSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `OracleSettingsInput`<sup>Optional</sup> <a name="OracleSettingsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.oracleSettingsInput"></a>

```go
func OracleSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `PostgreSqlSettingsInput`<sup>Optional</sup> <a name="PostgreSqlSettingsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.postgreSqlSettingsInput"></a>

```go
func PostgreSqlSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `RedshiftSettingsInput`<sup>Optional</sup> <a name="RedshiftSettingsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.redshiftSettingsInput"></a>

```go
func RedshiftSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `SybaseAseSettingsInput`<sup>Optional</sup> <a name="SybaseAseSettingsInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.sybaseAseSettingsInput"></a>

```go
func SybaseAseSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsPostgreSqlSettingsOutputReference <a name="DmsDataProviderSettingsPostgreSqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsPostgreSqlSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDataProviderSettingsPostgreSqlSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsPostgreSqlSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsRedshiftSettingsOutputReference <a name="DmsDataProviderSettingsRedshiftSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsRedshiftSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDataProviderSettingsRedshiftSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsRedshiftSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderSettingsSybaseAseSettingsOutputReference <a name="DmsDataProviderSettingsSybaseAseSettingsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderSettingsSybaseAseSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DmsDataProviderSettingsSybaseAseSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword">ResetEncryptPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName">ResetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode">ResetSslMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetEncryptPassword` <a name="ResetEncryptPassword" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetEncryptPassword"></a>

```go
func ResetEncryptPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetServerName` <a name="ResetServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetServerName"></a>

```go
func ResetServerName()
```

##### `ResetSslMode` <a name="ResetSslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.resetSslMode"></a>

```go
func ResetSslMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput">EncryptPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput">ServerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword">EncryptPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName">ServerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `EncryptPasswordInput`<sup>Optional</sup> <a name="EncryptPasswordInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPasswordInput"></a>

```go
func EncryptPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerNameInput`<sup>Optional</sup> <a name="ServerNameInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverNameInput"></a>

```go
func ServerNameInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `EncryptPassword`<sup>Required</sup> <a name="EncryptPassword" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.encryptPassword"></a>

```go
func EncryptPassword() interface{}
```

- *Type:* interface{}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerName`<sup>Required</sup> <a name="ServerName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.serverName"></a>

```go
func ServerName() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderSettingsSybaseAseSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderTagsList <a name="DmsDataProviderTagsList" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DmsDataProviderTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.get"></a>

```go
func Get(index *f64) DmsDataProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DmsDataProviderTagsOutputReference <a name="DmsDataProviderTagsOutputReference" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dmsdataprovider"

dmsdataprovider.NewDmsDataProviderTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DmsDataProviderTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dmsDataProvider.DmsDataProviderTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



