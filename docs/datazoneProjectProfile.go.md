# `datazoneProjectProfile` Submodule <a name="`datazoneProjectProfile` Submodule" id="@cdktn/provider-awscc.datazoneProjectProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneProjectProfile <a name="DatazoneProjectProfile" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile awscc_datazone_project_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.NewDatazoneProjectProfile(scope Construct, id *string, config DatazoneProjectProfileConfig) DatazoneProjectProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig">DatazoneProjectProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig">DatazoneProjectProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putEnvironmentConfigurations">PutEnvironmentConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putProjectResourceTags">PutProjectResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetAllowCustomProjectResourceTags">ResetAllowCustomProjectResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDomainIdentifier">ResetDomainIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDomainUnitIdentifier">ResetDomainUnitIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetEnvironmentConfigurations">ResetEnvironmentConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetProjectResourceTags">ResetProjectResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetProjectResourceTagsDescription">ResetProjectResourceTagsDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetUseDefaultConfigurations">ResetUseDefaultConfigurations</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnvironmentConfigurations` <a name="PutEnvironmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putEnvironmentConfigurations"></a>

```go
func PutEnvironmentConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putEnvironmentConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProjectResourceTags` <a name="PutProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putProjectResourceTags"></a>

```go
func PutProjectResourceTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.putProjectResourceTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowCustomProjectResourceTags` <a name="ResetAllowCustomProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetAllowCustomProjectResourceTags"></a>

```go
func ResetAllowCustomProjectResourceTags()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDomainIdentifier` <a name="ResetDomainIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDomainIdentifier"></a>

```go
func ResetDomainIdentifier()
```

##### `ResetDomainUnitIdentifier` <a name="ResetDomainUnitIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetDomainUnitIdentifier"></a>

```go
func ResetDomainUnitIdentifier()
```

##### `ResetEnvironmentConfigurations` <a name="ResetEnvironmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetEnvironmentConfigurations"></a>

```go
func ResetEnvironmentConfigurations()
```

##### `ResetProjectResourceTags` <a name="ResetProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetProjectResourceTags"></a>

```go
func ResetProjectResourceTags()
```

##### `ResetProjectResourceTagsDescription` <a name="ResetProjectResourceTagsDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetProjectResourceTagsDescription"></a>

```go
func ResetProjectResourceTagsDescription()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetUseDefaultConfigurations` <a name="ResetUseDefaultConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.resetUseDefaultConfigurations"></a>

```go
func ResetUseDefaultConfigurations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneProjectProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.DatazoneProjectProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.DatazoneProjectProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.DatazoneProjectProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.DatazoneProjectProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatazoneProjectProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatazoneProjectProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatazoneProjectProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneProjectProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitId">DomainUnitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.environmentConfigurations">EnvironmentConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList">DatazoneProjectProfileEnvironmentConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectProfileId">ProjectProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTags">ProjectResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList">DatazoneProjectProfileProjectResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.allowCustomProjectResourceTagsInput">AllowCustomProjectResourceTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainIdentifierInput">DomainIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitIdentifierInput">DomainUnitIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.environmentConfigurationsInput">EnvironmentConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsDescriptionInput">ProjectResourceTagsDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsInput">ProjectResourceTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.useDefaultConfigurationsInput">UseDefaultConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.allowCustomProjectResourceTags">AllowCustomProjectResourceTags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitIdentifier">DomainUnitIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsDescription">ProjectResourceTagsDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.useDefaultConfigurations">UseDefaultConfigurations</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `DomainUnitId`<sup>Required</sup> <a name="DomainUnitId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitId"></a>

```go
func DomainUnitId() *string
```

- *Type:* *string

---

##### `EnvironmentConfigurations`<sup>Required</sup> <a name="EnvironmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.environmentConfigurations"></a>

```go
func EnvironmentConfigurations() DatazoneProjectProfileEnvironmentConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList">DatazoneProjectProfileEnvironmentConfigurationsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `ProjectProfileId`<sup>Required</sup> <a name="ProjectProfileId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectProfileId"></a>

```go
func ProjectProfileId() *string
```

- *Type:* *string

---

##### `ProjectResourceTags`<sup>Required</sup> <a name="ProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTags"></a>

```go
func ProjectResourceTags() DatazoneProjectProfileProjectResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList">DatazoneProjectProfileProjectResourceTagsList</a>

---

##### `AllowCustomProjectResourceTagsInput`<sup>Optional</sup> <a name="AllowCustomProjectResourceTagsInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.allowCustomProjectResourceTagsInput"></a>

```go
func AllowCustomProjectResourceTagsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainIdentifierInput`<sup>Optional</sup> <a name="DomainIdentifierInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainIdentifierInput"></a>

```go
func DomainIdentifierInput() *string
```

- *Type:* *string

---

##### `DomainUnitIdentifierInput`<sup>Optional</sup> <a name="DomainUnitIdentifierInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitIdentifierInput"></a>

```go
func DomainUnitIdentifierInput() *string
```

- *Type:* *string

---

##### `EnvironmentConfigurationsInput`<sup>Optional</sup> <a name="EnvironmentConfigurationsInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.environmentConfigurationsInput"></a>

```go
func EnvironmentConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectResourceTagsDescriptionInput`<sup>Optional</sup> <a name="ProjectResourceTagsDescriptionInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsDescriptionInput"></a>

```go
func ProjectResourceTagsDescriptionInput() *string
```

- *Type:* *string

---

##### `ProjectResourceTagsInput`<sup>Optional</sup> <a name="ProjectResourceTagsInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsInput"></a>

```go
func ProjectResourceTagsInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `UseDefaultConfigurationsInput`<sup>Optional</sup> <a name="UseDefaultConfigurationsInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.useDefaultConfigurationsInput"></a>

```go
func UseDefaultConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowCustomProjectResourceTags`<sup>Required</sup> <a name="AllowCustomProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.allowCustomProjectResourceTags"></a>

```go
func AllowCustomProjectResourceTags() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainIdentifier`<sup>Required</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainIdentifier"></a>

```go
func DomainIdentifier() *string
```

- *Type:* *string

---

##### `DomainUnitIdentifier`<sup>Required</sup> <a name="DomainUnitIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.domainUnitIdentifier"></a>

```go
func DomainUnitIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProjectResourceTagsDescription`<sup>Required</sup> <a name="ProjectResourceTagsDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.projectResourceTagsDescription"></a>

```go
func ProjectResourceTagsDescription() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UseDefaultConfigurations`<sup>Required</sup> <a name="UseDefaultConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.useDefaultConfigurations"></a>

```go
func UseDefaultConfigurations() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneProjectProfileConfig <a name="DatazoneProjectProfileConfig" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

&datazoneprojectprofile.DatazoneProjectProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AllowCustomProjectResourceTags: interface{},
	Description: *string,
	DomainIdentifier: *string,
	DomainUnitIdentifier: *string,
	EnvironmentConfigurations: interface{},
	ProjectResourceTags: interface{},
	ProjectResourceTagsDescription: *string,
	Status: *string,
	UseDefaultConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.allowCustomProjectResourceTags">AllowCustomProjectResourceTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#allow_custom_project_resource_tags DatazoneProjectProfile#allow_custom_project_resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.domainIdentifier">DomainIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#domain_identifier DatazoneProjectProfile#domain_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.domainUnitIdentifier">DomainUnitIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#domain_unit_identifier DatazoneProjectProfile#domain_unit_identifier}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.environmentConfigurations">EnvironmentConfigurations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#environment_configurations DatazoneProjectProfile#environment_configurations}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.projectResourceTags">ProjectResourceTags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#project_resource_tags DatazoneProjectProfile#project_resource_tags}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.projectResourceTagsDescription">ProjectResourceTagsDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#project_resource_tags_description DatazoneProjectProfile#project_resource_tags_description}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#status DatazoneProjectProfile#status}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.useDefaultConfigurations">UseDefaultConfigurations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#use_default_configurations DatazoneProjectProfile#use_default_configurations}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}.

---

##### `AllowCustomProjectResourceTags`<sup>Optional</sup> <a name="AllowCustomProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.allowCustomProjectResourceTags"></a>

```go
AllowCustomProjectResourceTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#allow_custom_project_resource_tags DatazoneProjectProfile#allow_custom_project_resource_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}.

---

##### `DomainIdentifier`<sup>Optional</sup> <a name="DomainIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.domainIdentifier"></a>

```go
DomainIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#domain_identifier DatazoneProjectProfile#domain_identifier}.

---

##### `DomainUnitIdentifier`<sup>Optional</sup> <a name="DomainUnitIdentifier" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.domainUnitIdentifier"></a>

```go
DomainUnitIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#domain_unit_identifier DatazoneProjectProfile#domain_unit_identifier}.

---

##### `EnvironmentConfigurations`<sup>Optional</sup> <a name="EnvironmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.environmentConfigurations"></a>

```go
EnvironmentConfigurations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#environment_configurations DatazoneProjectProfile#environment_configurations}.

---

##### `ProjectResourceTags`<sup>Optional</sup> <a name="ProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.projectResourceTags"></a>

```go
ProjectResourceTags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#project_resource_tags DatazoneProjectProfile#project_resource_tags}.

---

##### `ProjectResourceTagsDescription`<sup>Optional</sup> <a name="ProjectResourceTagsDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.projectResourceTagsDescription"></a>

```go
ProjectResourceTagsDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#project_resource_tags_description DatazoneProjectProfile#project_resource_tags_description}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#status DatazoneProjectProfile#status}.

---

##### `UseDefaultConfigurations`<sup>Optional</sup> <a name="UseDefaultConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileConfig.property.useDefaultConfigurations"></a>

```go
UseDefaultConfigurations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#use_default_configurations DatazoneProjectProfile#use_default_configurations}.

---

### DatazoneProjectProfileEnvironmentConfigurations <a name="DatazoneProjectProfileEnvironmentConfigurations" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

&datazoneprojectprofile.DatazoneProjectProfileEnvironmentConfigurations {
	AwsAccount: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount,
	AwsRegion: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion,
	ConfigurationParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters,
	DeploymentMode: *string,
	DeploymentOrder: *f64,
	Description: *string,
	EnvironmentBlueprintId: *string,
	EnvironmentConfigurationId: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.awsAccount">AwsAccount</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#aws_account DatazoneProjectProfile#aws_account}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.awsRegion">AwsRegion</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#aws_region DatazoneProjectProfile#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.configurationParameters">ConfigurationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#configuration_parameters DatazoneProjectProfile#configuration_parameters}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.deploymentMode">DeploymentMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#deployment_mode DatazoneProjectProfile#deployment_mode}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.deploymentOrder">DeploymentOrder</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#deployment_order DatazoneProjectProfile#deployment_order}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.environmentBlueprintId">EnvironmentBlueprintId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#environment_blueprint_id DatazoneProjectProfile#environment_blueprint_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.environmentConfigurationId">EnvironmentConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#environment_configuration_id DatazoneProjectProfile#environment_configuration_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}. |

---

##### `AwsAccount`<sup>Optional</sup> <a name="AwsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.awsAccount"></a>

```go
AwsAccount DatazoneProjectProfileEnvironmentConfigurationsAwsAccount
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#aws_account DatazoneProjectProfile#aws_account}.

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.awsRegion"></a>

```go
AwsRegion DatazoneProjectProfileEnvironmentConfigurationsAwsRegion
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#aws_region DatazoneProjectProfile#aws_region}.

---

##### `ConfigurationParameters`<sup>Optional</sup> <a name="ConfigurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.configurationParameters"></a>

```go
ConfigurationParameters DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#configuration_parameters DatazoneProjectProfile#configuration_parameters}.

---

##### `DeploymentMode`<sup>Optional</sup> <a name="DeploymentMode" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.deploymentMode"></a>

```go
DeploymentMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#deployment_mode DatazoneProjectProfile#deployment_mode}.

---

##### `DeploymentOrder`<sup>Optional</sup> <a name="DeploymentOrder" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.deploymentOrder"></a>

```go
DeploymentOrder *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#deployment_order DatazoneProjectProfile#deployment_order}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#description DatazoneProjectProfile#description}.

---

##### `EnvironmentBlueprintId`<sup>Optional</sup> <a name="EnvironmentBlueprintId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.environmentBlueprintId"></a>

```go
EnvironmentBlueprintId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#environment_blueprint_id DatazoneProjectProfile#environment_blueprint_id}.

---

##### `EnvironmentConfigurationId`<sup>Optional</sup> <a name="EnvironmentConfigurationId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.environmentConfigurationId"></a>

```go
EnvironmentConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#environment_configuration_id DatazoneProjectProfile#environment_configuration_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurations.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}.

---

### DatazoneProjectProfileEnvironmentConfigurationsAwsAccount <a name="DatazoneProjectProfileEnvironmentConfigurationsAwsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

&datazoneprojectprofile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount {
	AwsAccountId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#aws_account_id DatazoneProjectProfile#aws_account_id}. |

---

##### `AwsAccountId`<sup>Optional</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount.property.awsAccountId"></a>

```go
AwsAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#aws_account_id DatazoneProjectProfile#aws_account_id}.

---

### DatazoneProjectProfileEnvironmentConfigurationsAwsRegion <a name="DatazoneProjectProfileEnvironmentConfigurationsAwsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

&datazoneprojectprofile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion {
	RegionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion.property.regionName">RegionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#region_name DatazoneProjectProfile#region_name}. |

---

##### `RegionName`<sup>Optional</sup> <a name="RegionName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion.property.regionName"></a>

```go
RegionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#region_name DatazoneProjectProfile#region_name}.

---

### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

&datazoneprojectprofile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters {
	ParameterOverrides: interface{},
	ResolvedParameters: interface{},
	SsmPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.parameterOverrides">ParameterOverrides</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#parameter_overrides DatazoneProjectProfile#parameter_overrides}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.resolvedParameters">ResolvedParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#resolved_parameters DatazoneProjectProfile#resolved_parameters}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.ssmPath">SsmPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#ssm_path DatazoneProjectProfile#ssm_path}. |

---

##### `ParameterOverrides`<sup>Optional</sup> <a name="ParameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.parameterOverrides"></a>

```go
ParameterOverrides interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#parameter_overrides DatazoneProjectProfile#parameter_overrides}.

---

##### `ResolvedParameters`<sup>Optional</sup> <a name="ResolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.resolvedParameters"></a>

```go
ResolvedParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#resolved_parameters DatazoneProjectProfile#resolved_parameters}.

---

##### `SsmPath`<sup>Optional</sup> <a name="SsmPath" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters.property.ssmPath"></a>

```go
SsmPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#ssm_path DatazoneProjectProfile#ssm_path}.

---

### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

&datazoneprojectprofile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides {
	IsEditable: interface{},
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.isEditable">IsEditable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}. |

---

##### `IsEditable`<sup>Optional</sup> <a name="IsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.isEditable"></a>

```go
IsEditable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverrides.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}.

---

### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

&datazoneprojectprofile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters {
	IsEditable: interface{},
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.isEditable">IsEditable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}. |

---

##### `IsEditable`<sup>Optional</sup> <a name="IsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.isEditable"></a>

```go
IsEditable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#is_editable DatazoneProjectProfile#is_editable}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#name DatazoneProjectProfile#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}.

---

### DatazoneProjectProfileProjectResourceTags <a name="DatazoneProjectProfileProjectResourceTags" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

&datazoneprojectprofile.DatazoneProjectProfileProjectResourceTags {
	IsValueEditable: interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.isValueEditable">IsValueEditable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#is_value_editable DatazoneProjectProfile#is_value_editable}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#key DatazoneProjectProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}. |

---

##### `IsValueEditable`<sup>Optional</sup> <a name="IsValueEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.isValueEditable"></a>

```go
IsValueEditable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#is_value_editable DatazoneProjectProfile#is_value_editable}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#key DatazoneProjectProfile#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_project_profile#value DatazoneProjectProfile#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.NewDatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resetAwsAccountId">ResetAwsAccountId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsAccountId` <a name="ResetAwsAccountId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.resetAwsAccountId"></a>

```go
func ResetAwsAccountId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountIdInput">AwsAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountId">AwsAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccountIdInput`<sup>Optional</sup> <a name="AwsAccountIdInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountIdInput"></a>

```go
func AwsAccountIdInput() *string
```

- *Type:* *string

---

##### `AwsAccountId`<sup>Required</sup> <a name="AwsAccountId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.awsAccountId"></a>

```go
func AwsAccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.NewDatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resetRegionName">ResetRegionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegionName` <a name="ResetRegionName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.resetRegionName"></a>

```go
func ResetRegionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionNameInput">RegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionNameInput"></a>

```go
func RegionNameInput() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.NewDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putParameterOverrides">PutParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putResolvedParameters">PutResolvedParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetParameterOverrides">ResetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetResolvedParameters">ResetResolvedParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetSsmPath">ResetSsmPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameterOverrides` <a name="PutParameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putParameterOverrides"></a>

```go
func PutParameterOverrides(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putParameterOverrides.parameter.value"></a>

- *Type:* interface{}

---

##### `PutResolvedParameters` <a name="PutResolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putResolvedParameters"></a>

```go
func PutResolvedParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.putResolvedParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParameterOverrides` <a name="ResetParameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetParameterOverrides"></a>

```go
func ResetParameterOverrides()
```

##### `ResetResolvedParameters` <a name="ResetResolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetResolvedParameters"></a>

```go
func ResetResolvedParameters()
```

##### `ResetSsmPath` <a name="ResetSsmPath" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.resetSsmPath"></a>

```go
func ResetSsmPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverrides">ParameterOverrides</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParameters">ResolvedParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverridesInput">ParameterOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParametersInput">ResolvedParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPathInput">SsmPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPath">SsmPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParameterOverrides`<sup>Required</sup> <a name="ParameterOverrides" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverrides"></a>

```go
func ParameterOverrides() DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList</a>

---

##### `ResolvedParameters`<sup>Required</sup> <a name="ResolvedParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParameters"></a>

```go
func ResolvedParameters() DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList</a>

---

##### `ParameterOverridesInput`<sup>Optional</sup> <a name="ParameterOverridesInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.parameterOverridesInput"></a>

```go
func ParameterOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `ResolvedParametersInput`<sup>Optional</sup> <a name="ResolvedParametersInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.resolvedParametersInput"></a>

```go
func ResolvedParametersInput() interface{}
```

- *Type:* interface{}

---

##### `SsmPathInput`<sup>Optional</sup> <a name="SsmPathInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPathInput"></a>

```go
func SsmPathInput() *string
```

- *Type:* *string

---

##### `SsmPath`<sup>Required</sup> <a name="SsmPath" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.ssmPath"></a>

```go
func SsmPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.NewDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get"></a>

```go
func Get(index *f64) DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.NewDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetIsEditable">ResetIsEditable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEditable` <a name="ResetIsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetIsEditable"></a>

```go
func ResetIsEditable()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditableInput">IsEditableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditable">IsEditable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEditableInput`<sup>Optional</sup> <a name="IsEditableInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditableInput"></a>

```go
func IsEditableInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsEditable`<sup>Required</sup> <a name="IsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.isEditable"></a>

```go
func IsEditable() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersParameterOverridesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.NewDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get"></a>

```go
func Get(index *f64) DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.NewDatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetIsEditable">ResetIsEditable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsEditable` <a name="ResetIsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetIsEditable"></a>

```go
func ResetIsEditable()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditableInput">IsEditableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditable">IsEditable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEditableInput`<sup>Optional</sup> <a name="IsEditableInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditableInput"></a>

```go
func IsEditableInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsEditable`<sup>Required</sup> <a name="IsEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.isEditable"></a>

```go
func IsEditable() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersResolvedParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneProjectProfileEnvironmentConfigurationsList <a name="DatazoneProjectProfileEnvironmentConfigurationsList" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.NewDatazoneProjectProfileEnvironmentConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneProjectProfileEnvironmentConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.get"></a>

```go
func Get(index *f64) DatazoneProjectProfileEnvironmentConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneProjectProfileEnvironmentConfigurationsOutputReference <a name="DatazoneProjectProfileEnvironmentConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.NewDatazoneProjectProfileEnvironmentConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneProjectProfileEnvironmentConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsAccount">PutAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsRegion">PutAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putConfigurationParameters">PutConfigurationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetAwsAccount">ResetAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetConfigurationParameters">ResetConfigurationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDeploymentMode">ResetDeploymentMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDeploymentOrder">ResetDeploymentOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetEnvironmentBlueprintId">ResetEnvironmentBlueprintId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetEnvironmentConfigurationId">ResetEnvironmentConfigurationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAccount` <a name="PutAwsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsAccount"></a>

```go
func PutAwsAccount(value DatazoneProjectProfileEnvironmentConfigurationsAwsAccount)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsAccount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccount">DatazoneProjectProfileEnvironmentConfigurationsAwsAccount</a>

---

##### `PutAwsRegion` <a name="PutAwsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsRegion"></a>

```go
func PutAwsRegion(value DatazoneProjectProfileEnvironmentConfigurationsAwsRegion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putAwsRegion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegion">DatazoneProjectProfileEnvironmentConfigurationsAwsRegion</a>

---

##### `PutConfigurationParameters` <a name="PutConfigurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putConfigurationParameters"></a>

```go
func PutConfigurationParameters(value DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.putConfigurationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParameters</a>

---

##### `ResetAwsAccount` <a name="ResetAwsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetAwsAccount"></a>

```go
func ResetAwsAccount()
```

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetAwsRegion"></a>

```go
func ResetAwsRegion()
```

##### `ResetConfigurationParameters` <a name="ResetConfigurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetConfigurationParameters"></a>

```go
func ResetConfigurationParameters()
```

##### `ResetDeploymentMode` <a name="ResetDeploymentMode" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDeploymentMode"></a>

```go
func ResetDeploymentMode()
```

##### `ResetDeploymentOrder` <a name="ResetDeploymentOrder" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDeploymentOrder"></a>

```go
func ResetDeploymentOrder()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnvironmentBlueprintId` <a name="ResetEnvironmentBlueprintId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetEnvironmentBlueprintId"></a>

```go
func ResetEnvironmentBlueprintId()
```

##### `ResetEnvironmentConfigurationId` <a name="ResetEnvironmentConfigurationId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetEnvironmentConfigurationId"></a>

```go
func ResetEnvironmentConfigurationId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccount">AwsAccount</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference">DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegion">AwsRegion</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference">DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParameters">ConfigurationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccountInput">AwsAccountInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParametersInput">ConfigurationParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentModeInput">DeploymentModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrderInput">DeploymentOrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintIdInput">EnvironmentBlueprintIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationIdInput">EnvironmentConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentMode">DeploymentMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrder">DeploymentOrder</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintId">EnvironmentBlueprintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationId">EnvironmentConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AwsAccount`<sup>Required</sup> <a name="AwsAccount" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccount"></a>

```go
func AwsAccount() DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference">DatazoneProjectProfileEnvironmentConfigurationsAwsAccountOutputReference</a>

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegion"></a>

```go
func AwsRegion() DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference">DatazoneProjectProfileEnvironmentConfigurationsAwsRegionOutputReference</a>

---

##### `ConfigurationParameters`<sup>Required</sup> <a name="ConfigurationParameters" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParameters"></a>

```go
func ConfigurationParameters() DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference">DatazoneProjectProfileEnvironmentConfigurationsConfigurationParametersOutputReference</a>

---

##### `AwsAccountInput`<sup>Optional</sup> <a name="AwsAccountInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsAccountInput"></a>

```go
func AwsAccountInput() interface{}
```

- *Type:* interface{}

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.awsRegionInput"></a>

```go
func AwsRegionInput() interface{}
```

- *Type:* interface{}

---

##### `ConfigurationParametersInput`<sup>Optional</sup> <a name="ConfigurationParametersInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.configurationParametersInput"></a>

```go
func ConfigurationParametersInput() interface{}
```

- *Type:* interface{}

---

##### `DeploymentModeInput`<sup>Optional</sup> <a name="DeploymentModeInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentModeInput"></a>

```go
func DeploymentModeInput() *string
```

- *Type:* *string

---

##### `DeploymentOrderInput`<sup>Optional</sup> <a name="DeploymentOrderInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrderInput"></a>

```go
func DeploymentOrderInput() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnvironmentBlueprintIdInput`<sup>Optional</sup> <a name="EnvironmentBlueprintIdInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintIdInput"></a>

```go
func EnvironmentBlueprintIdInput() *string
```

- *Type:* *string

---

##### `EnvironmentConfigurationIdInput`<sup>Optional</sup> <a name="EnvironmentConfigurationIdInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationIdInput"></a>

```go
func EnvironmentConfigurationIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `DeploymentMode`<sup>Required</sup> <a name="DeploymentMode" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentMode"></a>

```go
func DeploymentMode() *string
```

- *Type:* *string

---

##### `DeploymentOrder`<sup>Required</sup> <a name="DeploymentOrder" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.deploymentOrder"></a>

```go
func DeploymentOrder() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnvironmentBlueprintId`<sup>Required</sup> <a name="EnvironmentBlueprintId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentBlueprintId"></a>

```go
func EnvironmentBlueprintId() *string
```

- *Type:* *string

---

##### `EnvironmentConfigurationId`<sup>Required</sup> <a name="EnvironmentConfigurationId" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.environmentConfigurationId"></a>

```go
func EnvironmentConfigurationId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileEnvironmentConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneProjectProfileProjectResourceTagsList <a name="DatazoneProjectProfileProjectResourceTagsList" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.NewDatazoneProjectProfileProjectResourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneProjectProfileProjectResourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.get"></a>

```go
func Get(index *f64) DatazoneProjectProfileProjectResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneProjectProfileProjectResourceTagsOutputReference <a name="DatazoneProjectProfileProjectResourceTagsOutputReference" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazoneprojectprofile"

datazoneprojectprofile.NewDatazoneProjectProfileProjectResourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneProjectProfileProjectResourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetIsValueEditable">ResetIsValueEditable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueEditable` <a name="ResetIsValueEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetIsValueEditable"></a>

```go
func ResetIsValueEditable()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditableInput">IsValueEditableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditable">IsValueEditable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueEditableInput`<sup>Optional</sup> <a name="IsValueEditableInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditableInput"></a>

```go
func IsValueEditableInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsValueEditable`<sup>Required</sup> <a name="IsValueEditable" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.isValueEditable"></a>

```go
func IsValueEditable() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneProjectProfile.DatazoneProjectProfileProjectResourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



