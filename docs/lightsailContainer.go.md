# `lightsailContainer` Submodule <a name="`lightsailContainer` Submodule" id="@cdktn/provider-awscc.lightsailContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailContainer <a name="LightsailContainer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container awscc_lightsail_container}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainer(scope Construct, id *string, config LightsailContainerConfig) LightsailContainer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig">LightsailContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig">LightsailContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putContainerServiceDeployment">PutContainerServiceDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPrivateRegistryAccess">PutPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPublicDomainNames">PutPublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetContainerServiceDeployment">ResetContainerServiceDeployment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetIsDisabled">ResetIsDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetPrivateRegistryAccess">ResetPrivateRegistryAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetPublicDomainNames">ResetPublicDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainerServiceDeployment` <a name="PutContainerServiceDeployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putContainerServiceDeployment"></a>

```go
func PutContainerServiceDeployment(value LightsailContainerContainerServiceDeployment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putContainerServiceDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a>

---

##### `PutPrivateRegistryAccess` <a name="PutPrivateRegistryAccess" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPrivateRegistryAccess"></a>

```go
func PutPrivateRegistryAccess(value LightsailContainerPrivateRegistryAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPrivateRegistryAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a>

---

##### `PutPublicDomainNames` <a name="PutPublicDomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPublicDomainNames"></a>

```go
func PutPublicDomainNames(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putPublicDomainNames.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContainerServiceDeployment` <a name="ResetContainerServiceDeployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetContainerServiceDeployment"></a>

```go
func ResetContainerServiceDeployment()
```

##### `ResetIsDisabled` <a name="ResetIsDisabled" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetIsDisabled"></a>

```go
func ResetIsDisabled()
```

##### `ResetPrivateRegistryAccess` <a name="ResetPrivateRegistryAccess" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetPrivateRegistryAccess"></a>

```go
func ResetPrivateRegistryAccess()
```

##### `ResetPublicDomainNames` <a name="ResetPublicDomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetPublicDomainNames"></a>

```go
func ResetPublicDomainNames()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailContainer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.LightsailContainer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.LightsailContainer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.LightsailContainer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.LightsailContainer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LightsailContainer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LightsailContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LightsailContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LightsailContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerArn">ContainerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerServiceDeployment">ContainerServiceDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference">LightsailContainerContainerServiceDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.principalArn">PrincipalArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.privateRegistryAccess">PrivateRegistryAccess</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference">LightsailContainerPrivateRegistryAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.publicDomainNames">PublicDomainNames</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList">LightsailContainerPublicDomainNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList">LightsailContainerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerServiceDeploymentInput">ContainerServiceDeploymentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.isDisabledInput">IsDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.powerInput">PowerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.privateRegistryAccessInput">PrivateRegistryAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.publicDomainNamesInput">PublicDomainNamesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.scaleInput">ScaleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.isDisabled">IsDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.power">Power</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.scale">Scale</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerArn`<sup>Required</sup> <a name="ContainerArn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerArn"></a>

```go
func ContainerArn() *string
```

- *Type:* *string

---

##### `ContainerServiceDeployment`<sup>Required</sup> <a name="ContainerServiceDeployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerServiceDeployment"></a>

```go
func ContainerServiceDeployment() LightsailContainerContainerServiceDeploymentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference">LightsailContainerContainerServiceDeploymentOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.principalArn"></a>

```go
func PrincipalArn() *string
```

- *Type:* *string

---

##### `PrivateRegistryAccess`<sup>Required</sup> <a name="PrivateRegistryAccess" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.privateRegistryAccess"></a>

```go
func PrivateRegistryAccess() LightsailContainerPrivateRegistryAccessOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference">LightsailContainerPrivateRegistryAccessOutputReference</a>

---

##### `PublicDomainNames`<sup>Required</sup> <a name="PublicDomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.publicDomainNames"></a>

```go
func PublicDomainNames() LightsailContainerPublicDomainNamesList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList">LightsailContainerPublicDomainNamesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tags"></a>

```go
func Tags() LightsailContainerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList">LightsailContainerTagsList</a>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `ContainerServiceDeploymentInput`<sup>Optional</sup> <a name="ContainerServiceDeploymentInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.containerServiceDeploymentInput"></a>

```go
func ContainerServiceDeploymentInput() interface{}
```

- *Type:* interface{}

---

##### `IsDisabledInput`<sup>Optional</sup> <a name="IsDisabledInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.isDisabledInput"></a>

```go
func IsDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `PowerInput`<sup>Optional</sup> <a name="PowerInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.powerInput"></a>

```go
func PowerInput() *string
```

- *Type:* *string

---

##### `PrivateRegistryAccessInput`<sup>Optional</sup> <a name="PrivateRegistryAccessInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.privateRegistryAccessInput"></a>

```go
func PrivateRegistryAccessInput() interface{}
```

- *Type:* interface{}

---

##### `PublicDomainNamesInput`<sup>Optional</sup> <a name="PublicDomainNamesInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.publicDomainNamesInput"></a>

```go
func PublicDomainNamesInput() interface{}
```

- *Type:* interface{}

---

##### `ScaleInput`<sup>Optional</sup> <a name="ScaleInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.scaleInput"></a>

```go
func ScaleInput() *f64
```

- *Type:* *f64

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `IsDisabled`<sup>Required</sup> <a name="IsDisabled" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.isDisabled"></a>

```go
func IsDisabled() interface{}
```

- *Type:* interface{}

---

##### `Power`<sup>Required</sup> <a name="Power" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.power"></a>

```go
func Power() *string
```

- *Type:* *string

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.scale"></a>

```go
func Scale() *f64
```

- *Type:* *f64

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailContainerConfig <a name="LightsailContainerConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

&lightsailcontainer.LightsailContainerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Power: *string,
	Scale: *f64,
	ServiceName: *string,
	ContainerServiceDeployment: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lightsailContainer.LightsailContainerContainerServiceDeployment,
	IsDisabled: interface{},
	PrivateRegistryAccess: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess,
	PublicDomainNames: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.power">Power</a></code> | <code>*string</code> | The power specification for the container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.scale">Scale</a></code> | <code>*f64</code> | The scale specification for the container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.serviceName">ServiceName</a></code> | <code>*string</code> | The name for the container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.containerServiceDeployment">ContainerServiceDeployment</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a></code> | Describes a container deployment configuration of an Amazon Lightsail container service. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.isDisabled">IsDisabled</a></code> | <code>interface{}</code> | A Boolean value to indicate whether the container service is disabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.privateRegistryAccess">PrivateRegistryAccess</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a></code> | A Boolean value to indicate whether the container service has access to private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.publicDomainNames">PublicDomainNames</a></code> | <code>interface{}</code> | The public domain names to use with the container service, such as example.com and www.example.com. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Power`<sup>Required</sup> <a name="Power" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.power"></a>

```go
Power *string
```

- *Type:* *string

The power specification for the container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#power LightsailContainer#power}

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.scale"></a>

```go
Scale *f64
```

- *Type:* *f64

The scale specification for the container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#scale LightsailContainer#scale}

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The name for the container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#service_name LightsailContainer#service_name}

---

##### `ContainerServiceDeployment`<sup>Optional</sup> <a name="ContainerServiceDeployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.containerServiceDeployment"></a>

```go
ContainerServiceDeployment LightsailContainerContainerServiceDeployment
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment">LightsailContainerContainerServiceDeployment</a>

Describes a container deployment configuration of an Amazon Lightsail container service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#container_service_deployment LightsailContainer#container_service_deployment}

---

##### `IsDisabled`<sup>Optional</sup> <a name="IsDisabled" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.isDisabled"></a>

```go
IsDisabled interface{}
```

- *Type:* interface{}

A Boolean value to indicate whether the container service is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#is_disabled LightsailContainer#is_disabled}

---

##### `PrivateRegistryAccess`<sup>Optional</sup> <a name="PrivateRegistryAccess" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.privateRegistryAccess"></a>

```go
PrivateRegistryAccess LightsailContainerPrivateRegistryAccess
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess">LightsailContainerPrivateRegistryAccess</a>

A Boolean value to indicate whether the container service has access to private container image repositories, such as Amazon Elastic Container Registry (Amazon ECR) private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#private_registry_access LightsailContainer#private_registry_access}

---

##### `PublicDomainNames`<sup>Optional</sup> <a name="PublicDomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.publicDomainNames"></a>

```go
PublicDomainNames interface{}
```

- *Type:* interface{}

The public domain names to use with the container service, such as example.com and www.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#public_domain_names LightsailContainer#public_domain_names}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#tags LightsailContainer#tags}

---

### LightsailContainerContainerServiceDeployment <a name="LightsailContainerContainerServiceDeployment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

&lightsailcontainer.LightsailContainerContainerServiceDeployment {
	Containers: interface{},
	PublicEndpoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.property.containers">Containers</a></code> | <code>interface{}</code> | An object that describes the configuration for the containers of the deployment. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.property.publicEndpoint">PublicEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a></code> | An object that describes the endpoint of the deployment. |

---

##### `Containers`<sup>Optional</sup> <a name="Containers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.property.containers"></a>

```go
Containers interface{}
```

- *Type:* interface{}

An object that describes the configuration for the containers of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#containers LightsailContainer#containers}

---

##### `PublicEndpoint`<sup>Optional</sup> <a name="PublicEndpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeployment.property.publicEndpoint"></a>

```go
PublicEndpoint LightsailContainerContainerServiceDeploymentPublicEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a>

An object that describes the endpoint of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#public_endpoint LightsailContainer#public_endpoint}

---

### LightsailContainerContainerServiceDeploymentContainers <a name="LightsailContainerContainerServiceDeploymentContainers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

&lightsailcontainer.LightsailContainerContainerServiceDeploymentContainers {
	Command: *[]*string,
	ContainerName: *string,
	Environment: interface{},
	Image: *string,
	Ports: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.command">Command</a></code> | <code>*[]*string</code> | The launch command for the container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.containerName">ContainerName</a></code> | <code>*string</code> | The name of the container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.environment">Environment</a></code> | <code>interface{}</code> | The environment variables of the container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.image">Image</a></code> | <code>*string</code> | The name of the image used for the container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.ports">Ports</a></code> | <code>interface{}</code> | The open firewall ports of the container. |

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.command"></a>

```go
Command *[]*string
```

- *Type:* *[]*string

The launch command for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#command LightsailContainer#command}

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

The name of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#container_name LightsailContainer#container_name}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.environment"></a>

```go
Environment interface{}
```

- *Type:* interface{}

The environment variables of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#environment LightsailContainer#environment}

---

##### `Image`<sup>Optional</sup> <a name="Image" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.image"></a>

```go
Image *string
```

- *Type:* *string

The name of the image used for the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#image LightsailContainer#image}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainers.property.ports"></a>

```go
Ports interface{}
```

- *Type:* interface{}

The open firewall ports of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#ports LightsailContainer#ports}

---

### LightsailContainerContainerServiceDeploymentContainersEnvironment <a name="LightsailContainerContainerServiceDeploymentContainersEnvironment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

&lightsailcontainer.LightsailContainerContainerServiceDeploymentContainersEnvironment {
	Value: *string,
	Variable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#value LightsailContainer#value}. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.property.variable">Variable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#variable LightsailContainer#variable}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#value LightsailContainer#value}.

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironment.property.variable"></a>

```go
Variable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#variable LightsailContainer#variable}.

---

### LightsailContainerContainerServiceDeploymentContainersPorts <a name="LightsailContainerContainerServiceDeploymentContainersPorts" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

&lightsailcontainer.LightsailContainerContainerServiceDeploymentContainersPorts {
	Port: *string,
	Protocol: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.property.port">Port</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#port LightsailContainer#port}. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#protocol LightsailContainer#protocol}. |

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.property.port"></a>

```go
Port *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#port LightsailContainer#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPorts.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#protocol LightsailContainer#protocol}.

---

### LightsailContainerContainerServiceDeploymentPublicEndpoint <a name="LightsailContainerContainerServiceDeploymentPublicEndpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

&lightsailcontainer.LightsailContainerContainerServiceDeploymentPublicEndpoint {
	ContainerName: *string,
	ContainerPort: *f64,
	HealthCheckConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.containerName">ContainerName</a></code> | <code>*string</code> | The name of the container for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | The port of the container to which traffic is forwarded to. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a></code> | An object that describes the health check configuration of the container. |

---

##### `ContainerName`<sup>Optional</sup> <a name="ContainerName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.containerName"></a>

```go
ContainerName *string
```

- *Type:* *string

The name of the container for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#container_name LightsailContainer#container_name}

---

##### `ContainerPort`<sup>Optional</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.containerPort"></a>

```go
ContainerPort *f64
```

- *Type:* *f64

The port of the container to which traffic is forwarded to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#container_port LightsailContainer#container_port}

---

##### `HealthCheckConfig`<sup>Optional</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint.property.healthCheckConfig"></a>

```go
HealthCheckConfig LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a>

An object that describes the health check configuration of the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#health_check_config LightsailContainer#health_check_config}

---

### LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig <a name="LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

&lightsailcontainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig {
	HealthyThreshold: *f64,
	IntervalSeconds: *f64,
	Path: *string,
	SuccessCodes: *string,
	TimeoutSeconds: *f64,
	UnhealthyThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | The number of consecutive health checks successes required before moving the container to the Healthy state. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | The approximate interval, in seconds, between health checks of an individual container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.path">Path</a></code> | <code>*string</code> | The path on the container on which to perform the health check. The default value is /. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.successCodes">SuccessCodes</a></code> | <code>*string</code> | The HTTP codes to use when checking for a successful response from a container. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | The amount of time, in seconds, during which no response means a failed health check. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | The number of consecutive health check failures required before moving the container to the Unhealthy state. |

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.healthyThreshold"></a>

```go
HealthyThreshold *f64
```

- *Type:* *f64

The number of consecutive health checks successes required before moving the container to the Healthy state.

The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#healthy_threshold LightsailContainer#healthy_threshold}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.intervalSeconds"></a>

```go
IntervalSeconds *f64
```

- *Type:* *f64

The approximate interval, in seconds, between health checks of an individual container.

You can specify between 5 and 300 seconds. The default value is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#interval_seconds LightsailContainer#interval_seconds}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The path on the container on which to perform the health check. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#path LightsailContainer#path}

---

##### `SuccessCodes`<sup>Optional</sup> <a name="SuccessCodes" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.successCodes"></a>

```go
SuccessCodes *string
```

- *Type:* *string

The HTTP codes to use when checking for a successful response from a container.

You can specify values between 200 and 499. You can specify multiple values (for example, 200,202) or a range of values (for example, 200-299).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#success_codes LightsailContainer#success_codes}

---

##### `TimeoutSeconds`<sup>Optional</sup> <a name="TimeoutSeconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.timeoutSeconds"></a>

```go
TimeoutSeconds *f64
```

- *Type:* *f64

The amount of time, in seconds, during which no response means a failed health check.

You can specify between 2 and 60 seconds. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#timeout_seconds LightsailContainer#timeout_seconds}

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig.property.unhealthyThreshold"></a>

```go
UnhealthyThreshold *f64
```

- *Type:* *f64

The number of consecutive health check failures required before moving the container to the Unhealthy state.

The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#unhealthy_threshold LightsailContainer#unhealthy_threshold}

---

### LightsailContainerPrivateRegistryAccess <a name="LightsailContainerPrivateRegistryAccess" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

&lightsailcontainer.LightsailContainerPrivateRegistryAccess {
	EcrImagePullerRole: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess.property.ecrImagePullerRole">EcrImagePullerRole</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a></code> | An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories. |

---

##### `EcrImagePullerRole`<sup>Optional</sup> <a name="EcrImagePullerRole" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccess.property.ecrImagePullerRole"></a>

```go
EcrImagePullerRole LightsailContainerPrivateRegistryAccessEcrImagePullerRole
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a>

An object to describe a request to activate or deactivate the role that you can use to grant an Amazon Lightsail container service access to Amazon Elastic Container Registry (Amazon ECR) private repositories.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#ecr_image_puller_role LightsailContainer#ecr_image_puller_role}

---

### LightsailContainerPrivateRegistryAccessEcrImagePullerRole <a name="LightsailContainerPrivateRegistryAccessEcrImagePullerRole" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

&lightsailcontainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole {
	IsActive: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole.property.isActive">IsActive</a></code> | <code>interface{}</code> | A Boolean value that indicates whether to activate the role. |

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole.property.isActive"></a>

```go
IsActive interface{}
```

- *Type:* interface{}

A Boolean value that indicates whether to activate the role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#is_active LightsailContainer#is_active}

---

### LightsailContainerPublicDomainNames <a name="LightsailContainerPublicDomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

&lightsailcontainer.LightsailContainerPublicDomainNames {
	CertificateName: *string,
	DomainNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.property.certificateName">CertificateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#certificate_name LightsailContainer#certificate_name}. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | An object that describes the configuration for the containers of the deployment. |

---

##### `CertificateName`<sup>Optional</sup> <a name="CertificateName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#certificate_name LightsailContainer#certificate_name}.

---

##### `DomainNames`<sup>Optional</sup> <a name="DomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNames.property.domainNames"></a>

```go
DomainNames *[]*string
```

- *Type:* *[]*string

An object that describes the configuration for the containers of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#domain_names LightsailContainer#domain_names}

---

### LightsailContainerTags <a name="LightsailContainerTags" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

&lightsailcontainer.LightsailContainerTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#key LightsailContainer#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_container#value LightsailContainer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailContainerContainerServiceDeploymentContainersEnvironmentList <a name="LightsailContainerContainerServiceDeploymentContainersEnvironmentList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerContainerServiceDeploymentContainersEnvironmentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailContainerContainerServiceDeploymentContainersEnvironmentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.get"></a>

```go
func Get(index *f64) LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference <a name="LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resetVariable">ResetVariable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.resetVariable"></a>

```go
func ResetVariable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variableInput">VariableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variable">Variable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variableInput"></a>

```go
func VariableInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.variable"></a>

```go
func Variable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerContainerServiceDeploymentContainersList <a name="LightsailContainerContainerServiceDeploymentContainersList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerContainerServiceDeploymentContainersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailContainerContainerServiceDeploymentContainersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.get"></a>

```go
func Get(index *f64) LightsailContainerContainerServiceDeploymentContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerContainerServiceDeploymentContainersOutputReference <a name="LightsailContainerContainerServiceDeploymentContainersOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerContainerServiceDeploymentContainersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailContainerContainerServiceDeploymentContainersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putEnvironment">PutEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putPorts">PutPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetImage">ResetImage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnvironment` <a name="PutEnvironment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putEnvironment"></a>

```go
func PutEnvironment(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putEnvironment.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPorts` <a name="PutPorts" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putPorts"></a>

```go
func PutPorts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.putPorts.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetCommand"></a>

```go
func ResetCommand()
```

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetContainerName"></a>

```go
func ResetContainerName()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetEnvironment"></a>

```go
func ResetEnvironment()
```

##### `ResetImage` <a name="ResetImage" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetImage"></a>

```go
func ResetImage()
```

##### `ResetPorts` <a name="ResetPorts" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.resetPorts"></a>

```go
func ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.environment">Environment</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList">LightsailContainerContainerServiceDeploymentContainersEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.ports">Ports</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList">LightsailContainerContainerServiceDeploymentContainersPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.commandInput">CommandInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.portsInput">PortsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.command">Command</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.environment"></a>

```go
func Environment() LightsailContainerContainerServiceDeploymentContainersEnvironmentList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersEnvironmentList">LightsailContainerContainerServiceDeploymentContainersEnvironmentList</a>

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.ports"></a>

```go
func Ports() LightsailContainerContainerServiceDeploymentContainersPortsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList">LightsailContainerContainerServiceDeploymentContainersPortsList</a>

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.commandInput"></a>

```go
func CommandInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.environmentInput"></a>

```go
func EnvironmentInput() interface{}
```

- *Type:* interface{}

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.portsInput"></a>

```go
func PortsInput() interface{}
```

- *Type:* interface{}

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.command"></a>

```go
func Command() *[]*string
```

- *Type:* *[]*string

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerContainerServiceDeploymentContainersPortsList <a name="LightsailContainerContainerServiceDeploymentContainersPortsList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerContainerServiceDeploymentContainersPortsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailContainerContainerServiceDeploymentContainersPortsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.get"></a>

```go
func Get(index *f64) LightsailContainerContainerServiceDeploymentContainersPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerContainerServiceDeploymentContainersPortsOutputReference <a name="LightsailContainerContainerServiceDeploymentContainersPortsOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerContainerServiceDeploymentContainersPortsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailContainerContainerServiceDeploymentContainersPortsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersPortsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerContainerServiceDeploymentOutputReference <a name="LightsailContainerContainerServiceDeploymentOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerContainerServiceDeploymentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailContainerContainerServiceDeploymentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putContainers">PutContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putPublicEndpoint">PutPublicEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resetContainers">ResetContainers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resetPublicEndpoint">ResetPublicEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainers` <a name="PutContainers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putContainers"></a>

```go
func PutContainers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putContainers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPublicEndpoint` <a name="PutPublicEndpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putPublicEndpoint"></a>

```go
func PutPublicEndpoint(value LightsailContainerContainerServiceDeploymentPublicEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.putPublicEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpoint">LightsailContainerContainerServiceDeploymentPublicEndpoint</a>

---

##### `ResetContainers` <a name="ResetContainers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resetContainers"></a>

```go
func ResetContainers()
```

##### `ResetPublicEndpoint` <a name="ResetPublicEndpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.resetPublicEndpoint"></a>

```go
func ResetPublicEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.containers">Containers</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList">LightsailContainerContainerServiceDeploymentContainersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpoint">PublicEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference">LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.containersInput">ContainersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpointInput">PublicEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Containers`<sup>Required</sup> <a name="Containers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.containers"></a>

```go
func Containers() LightsailContainerContainerServiceDeploymentContainersList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentContainersList">LightsailContainerContainerServiceDeploymentContainersList</a>

---

##### `PublicEndpoint`<sup>Required</sup> <a name="PublicEndpoint" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpoint"></a>

```go
func PublicEndpoint() LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference">LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference</a>

---

##### `ContainersInput`<sup>Optional</sup> <a name="ContainersInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.containersInput"></a>

```go
func ContainersInput() interface{}
```

- *Type:* interface{}

---

##### `PublicEndpointInput`<sup>Optional</sup> <a name="PublicEndpointInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.publicEndpointInput"></a>

```go
func PublicEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference <a name="LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetSuccessCodes">ResetSuccessCodes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetTimeoutSeconds">ResetTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetHealthyThreshold"></a>

```go
func ResetHealthyThreshold()
```

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetIntervalSeconds"></a>

```go
func ResetIntervalSeconds()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetSuccessCodes` <a name="ResetSuccessCodes" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetSuccessCodes"></a>

```go
func ResetSuccessCodes()
```

##### `ResetTimeoutSeconds` <a name="ResetTimeoutSeconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetTimeoutSeconds"></a>

```go
func ResetTimeoutSeconds()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.resetUnhealthyThreshold"></a>

```go
func ResetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodesInput">SuccessCodesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSecondsInput">TimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodes">SuccessCodes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSeconds">TimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThresholdInput"></a>

```go
func HealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSecondsInput"></a>

```go
func IntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `SuccessCodesInput`<sup>Optional</sup> <a name="SuccessCodesInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodesInput"></a>

```go
func SuccessCodesInput() *string
```

- *Type:* *string

---

##### `TimeoutSecondsInput`<sup>Optional</sup> <a name="TimeoutSecondsInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSecondsInput"></a>

```go
func TimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThresholdInput"></a>

```go
func UnhealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `SuccessCodes`<sup>Required</sup> <a name="SuccessCodes" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.successCodes"></a>

```go
func SuccessCodes() *string
```

- *Type:* *string

---

##### `TimeoutSeconds`<sup>Required</sup> <a name="TimeoutSeconds" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.timeoutSeconds"></a>

```go
func TimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference <a name="LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerContainerServiceDeploymentPublicEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig">PutHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetContainerName">ResetContainerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetContainerPort">ResetContainerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetHealthCheckConfig">ResetHealthCheckConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthCheckConfig` <a name="PutHealthCheckConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig"></a>

```go
func PutHealthCheckConfig(value LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfig</a>

---

##### `ResetContainerName` <a name="ResetContainerName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetContainerName"></a>

```go
func ResetContainerName()
```

##### `ResetContainerPort` <a name="ResetContainerPort" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetContainerPort"></a>

```go
func ResetContainerPort()
```

##### `ResetHealthCheckConfig` <a name="ResetHealthCheckConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.resetHealthCheckConfig"></a>

```go
func ResetHealthCheckConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerNameInput">ContainerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPortInput">ContainerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfigInput">HealthCheckConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerName">ContainerName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPort">ContainerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthCheckConfig`<sup>Required</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfig"></a>

```go
func HealthCheckConfig() LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference">LightsailContainerContainerServiceDeploymentPublicEndpointHealthCheckConfigOutputReference</a>

---

##### `ContainerNameInput`<sup>Optional</sup> <a name="ContainerNameInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerNameInput"></a>

```go
func ContainerNameInput() *string
```

- *Type:* *string

---

##### `ContainerPortInput`<sup>Optional</sup> <a name="ContainerPortInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPortInput"></a>

```go
func ContainerPortInput() *f64
```

- *Type:* *f64

---

##### `HealthCheckConfigInput`<sup>Optional</sup> <a name="HealthCheckConfigInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.healthCheckConfigInput"></a>

```go
func HealthCheckConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ContainerName`<sup>Required</sup> <a name="ContainerName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerName"></a>

```go
func ContainerName() *string
```

- *Type:* *string

---

##### `ContainerPort`<sup>Required</sup> <a name="ContainerPort" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.containerPort"></a>

```go
func ContainerPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerContainerServiceDeploymentPublicEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference <a name="LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive">ResetIsActive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsActive` <a name="ResetIsActive" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.resetIsActive"></a>

```go
func ResetIsActive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn">PrincipalArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput">IsActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive">IsActive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalArn`<sup>Required</sup> <a name="PrincipalArn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.principalArn"></a>

```go
func PrincipalArn() *string
```

- *Type:* *string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActiveInput"></a>

```go
func IsActiveInput() interface{}
```

- *Type:* interface{}

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.isActive"></a>

```go
func IsActive() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerPrivateRegistryAccessOutputReference <a name="LightsailContainerPrivateRegistryAccessOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerPrivateRegistryAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LightsailContainerPrivateRegistryAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.putEcrImagePullerRole">PutEcrImagePullerRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resetEcrImagePullerRole">ResetEcrImagePullerRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEcrImagePullerRole` <a name="PutEcrImagePullerRole" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.putEcrImagePullerRole"></a>

```go
func PutEcrImagePullerRole(value LightsailContainerPrivateRegistryAccessEcrImagePullerRole)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.putEcrImagePullerRole.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRole">LightsailContainerPrivateRegistryAccessEcrImagePullerRole</a>

---

##### `ResetEcrImagePullerRole` <a name="ResetEcrImagePullerRole" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.resetEcrImagePullerRole"></a>

```go
func ResetEcrImagePullerRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRole">EcrImagePullerRole</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput">EcrImagePullerRoleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EcrImagePullerRole`<sup>Required</sup> <a name="EcrImagePullerRole" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRole"></a>

```go
func EcrImagePullerRole() LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference">LightsailContainerPrivateRegistryAccessEcrImagePullerRoleOutputReference</a>

---

##### `EcrImagePullerRoleInput`<sup>Optional</sup> <a name="EcrImagePullerRoleInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.ecrImagePullerRoleInput"></a>

```go
func EcrImagePullerRoleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPrivateRegistryAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerPublicDomainNamesList <a name="LightsailContainerPublicDomainNamesList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerPublicDomainNamesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailContainerPublicDomainNamesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.get"></a>

```go
func Get(index *f64) LightsailContainerPublicDomainNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerPublicDomainNamesOutputReference <a name="LightsailContainerPublicDomainNamesOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerPublicDomainNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailContainerPublicDomainNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resetCertificateName">ResetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resetDomainNames">ResetDomainNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateName` <a name="ResetCertificateName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resetCertificateName"></a>

```go
func ResetCertificateName()
```

##### `ResetDomainNames` <a name="ResetDomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.resetDomainNames"></a>

```go
func ResetDomainNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.domainNamesInput">DomainNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.domainNames">DomainNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `DomainNamesInput`<sup>Optional</sup> <a name="DomainNamesInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.domainNamesInput"></a>

```go
func DomainNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `DomainNames`<sup>Required</sup> <a name="DomainNames" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.domainNames"></a>

```go
func DomainNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerPublicDomainNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerTagsList <a name="LightsailContainerTagsList" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LightsailContainerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.get"></a>

```go
func Get(index *f64) LightsailContainerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LightsailContainerTagsOutputReference <a name="LightsailContainerTagsOutputReference" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailcontainer"

lightsailcontainer.NewLightsailContainerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LightsailContainerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.lightsailContainer.LightsailContainerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



