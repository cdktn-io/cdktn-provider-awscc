# `panoramaPackageVersion` Submodule <a name="`panoramaPackageVersion` Submodule" id="@cdktn/provider-awscc.panoramaPackageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PanoramaPackageVersion <a name="PanoramaPackageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package_version awscc_panorama_package_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/panoramapackageversion"

panoramapackageversion.NewPanoramaPackageVersion(scope Construct, id *string, config PanoramaPackageVersionConfig) PanoramaPackageVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig">PanoramaPackageVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig">PanoramaPackageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetMarkLatest">ResetMarkLatest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOwnerAccount">ResetOwnerAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetUpdatedLatestPatchVersion">ResetUpdatedLatestPatchVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetMarkLatest` <a name="ResetMarkLatest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetMarkLatest"></a>

```go
func ResetMarkLatest()
```

##### `ResetOwnerAccount` <a name="ResetOwnerAccount" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetOwnerAccount"></a>

```go
func ResetOwnerAccount()
```

##### `ResetUpdatedLatestPatchVersion` <a name="ResetUpdatedLatestPatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.resetUpdatedLatestPatchVersion"></a>

```go
func ResetUpdatedLatestPatchVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PanoramaPackageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/panoramapackageversion"

panoramapackageversion.PanoramaPackageVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/panoramapackageversion"

panoramapackageversion.PanoramaPackageVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/panoramapackageversion"

panoramapackageversion.PanoramaPackageVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/panoramapackageversion"

panoramapackageversion.PanoramaPackageVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PanoramaPackageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PanoramaPackageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PanoramaPackageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PanoramaPackageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.isLatestPatch">IsLatestPatch</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageArn">PackageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageName">PackageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.registeredTime">RegisteredTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.statusDescription">StatusDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatestInput">MarkLatestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccountInput">OwnerAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageIdInput">PackageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersionInput">PackageVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersionInput">PatchVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersionInput">UpdatedLatestPatchVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatest">MarkLatest</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccount">OwnerAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageId">PackageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersion">PatchVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersion">UpdatedLatestPatchVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLatestPatch`<sup>Required</sup> <a name="IsLatestPatch" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.isLatestPatch"></a>

```go
func IsLatestPatch() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PackageArn`<sup>Required</sup> <a name="PackageArn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageArn"></a>

```go
func PackageArn() *string
```

- *Type:* *string

---

##### `PackageName`<sup>Required</sup> <a name="PackageName" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageName"></a>

```go
func PackageName() *string
```

- *Type:* *string

---

##### `RegisteredTime`<sup>Required</sup> <a name="RegisteredTime" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.registeredTime"></a>

```go
func RegisteredTime() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusDescription`<sup>Required</sup> <a name="StatusDescription" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.statusDescription"></a>

```go
func StatusDescription() *string
```

- *Type:* *string

---

##### `MarkLatestInput`<sup>Optional</sup> <a name="MarkLatestInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatestInput"></a>

```go
func MarkLatestInput() interface{}
```

- *Type:* interface{}

---

##### `OwnerAccountInput`<sup>Optional</sup> <a name="OwnerAccountInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccountInput"></a>

```go
func OwnerAccountInput() *string
```

- *Type:* *string

---

##### `PackageIdInput`<sup>Optional</sup> <a name="PackageIdInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageIdInput"></a>

```go
func PackageIdInput() *string
```

- *Type:* *string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersionInput"></a>

```go
func PackageVersionInput() *string
```

- *Type:* *string

---

##### `PatchVersionInput`<sup>Optional</sup> <a name="PatchVersionInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersionInput"></a>

```go
func PatchVersionInput() *string
```

- *Type:* *string

---

##### `UpdatedLatestPatchVersionInput`<sup>Optional</sup> <a name="UpdatedLatestPatchVersionInput" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersionInput"></a>

```go
func UpdatedLatestPatchVersionInput() *string
```

- *Type:* *string

---

##### `MarkLatest`<sup>Required</sup> <a name="MarkLatest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.markLatest"></a>

```go
func MarkLatest() interface{}
```

- *Type:* interface{}

---

##### `OwnerAccount`<sup>Required</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.ownerAccount"></a>

```go
func OwnerAccount() *string
```

- *Type:* *string

---

##### `PackageId`<sup>Required</sup> <a name="PackageId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageId"></a>

```go
func PackageId() *string
```

- *Type:* *string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.packageVersion"></a>

```go
func PackageVersion() *string
```

- *Type:* *string

---

##### `PatchVersion`<sup>Required</sup> <a name="PatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.patchVersion"></a>

```go
func PatchVersion() *string
```

- *Type:* *string

---

##### `UpdatedLatestPatchVersion`<sup>Required</sup> <a name="UpdatedLatestPatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.updatedLatestPatchVersion"></a>

```go
func UpdatedLatestPatchVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PanoramaPackageVersionConfig <a name="PanoramaPackageVersionConfig" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/panoramapackageversion"

&panoramapackageversion.PanoramaPackageVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PackageId: *string,
	PackageVersion: *string,
	PatchVersion: *string,
	MarkLatest: interface{},
	OwnerAccount: *string,
	UpdatedLatestPatchVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageId">PackageId</a></code> | <code>*string</code> | A package ID. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | A package version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.patchVersion">PatchVersion</a></code> | <code>*string</code> | A patch version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.markLatest">MarkLatest</a></code> | <code>interface{}</code> | Whether to mark the new version as the latest version. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.ownerAccount">OwnerAccount</a></code> | <code>*string</code> | An owner account. |
| <code><a href="#@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.updatedLatestPatchVersion">UpdatedLatestPatchVersion</a></code> | <code>*string</code> | If the version was marked latest, the new version to maker as latest. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PackageId`<sup>Required</sup> <a name="PackageId" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageId"></a>

```go
PackageId *string
```

- *Type:* *string

A package ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package_version#package_id PanoramaPackageVersion#package_id}

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.packageVersion"></a>

```go
PackageVersion *string
```

- *Type:* *string

A package version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package_version#package_version PanoramaPackageVersion#package_version}

---

##### `PatchVersion`<sup>Required</sup> <a name="PatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.patchVersion"></a>

```go
PatchVersion *string
```

- *Type:* *string

A patch version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package_version#patch_version PanoramaPackageVersion#patch_version}

---

##### `MarkLatest`<sup>Optional</sup> <a name="MarkLatest" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.markLatest"></a>

```go
MarkLatest interface{}
```

- *Type:* interface{}

Whether to mark the new version as the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package_version#mark_latest PanoramaPackageVersion#mark_latest}

---

##### `OwnerAccount`<sup>Optional</sup> <a name="OwnerAccount" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.ownerAccount"></a>

```go
OwnerAccount *string
```

- *Type:* *string

An owner account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package_version#owner_account PanoramaPackageVersion#owner_account}

---

##### `UpdatedLatestPatchVersion`<sup>Optional</sup> <a name="UpdatedLatestPatchVersion" id="@cdktn/provider-awscc.panoramaPackageVersion.PanoramaPackageVersionConfig.property.updatedLatestPatchVersion"></a>

```go
UpdatedLatestPatchVersion *string
```

- *Type:* *string

If the version was marked latest, the new version to maker as latest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/panorama_package_version#updated_latest_patch_version PanoramaPackageVersion#updated_latest_patch_version}

---



