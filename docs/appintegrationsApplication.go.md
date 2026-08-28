# `appintegrationsApplication` Submodule <a name="`appintegrationsApplication` Submodule" id="@cdktn/provider-awscc.appintegrationsApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppintegrationsApplication <a name="AppintegrationsApplication" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application awscc_appintegrations_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

appintegrationsapplication.NewAppintegrationsApplication(scope Construct, id *string, config AppintegrationsApplicationConfig) AppintegrationsApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig">AppintegrationsApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig">AppintegrationsApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig">PutApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig">PutApplicationSourceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig">PutIframeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationConfig">ResetApplicationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationType">ResetApplicationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIframeConfig">ResetIframeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetInitializationTimeout">ResetInitializationTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIsService">ResetIsService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApplicationConfig` <a name="PutApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig"></a>

```go
func PutApplicationConfig(value AppintegrationsApplicationApplicationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

---

##### `PutApplicationSourceConfig` <a name="PutApplicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig"></a>

```go
func PutApplicationSourceConfig(value AppintegrationsApplicationApplicationSourceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putApplicationSourceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

---

##### `PutIframeConfig` <a name="PutIframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig"></a>

```go
func PutIframeConfig(value AppintegrationsApplicationIframeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putIframeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetApplicationConfig` <a name="ResetApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationConfig"></a>

```go
func ResetApplicationConfig()
```

##### `ResetApplicationType` <a name="ResetApplicationType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetApplicationType"></a>

```go
func ResetApplicationType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIframeConfig` <a name="ResetIframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIframeConfig"></a>

```go
func ResetIframeConfig()
```

##### `ResetInitializationTimeout` <a name="ResetInitializationTimeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetInitializationTimeout"></a>

```go
func ResetInitializationTimeout()
```

##### `ResetIsService` <a name="ResetIsService" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetIsService"></a>

```go
func ResetIsService()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppintegrationsApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

appintegrationsapplication.AppintegrationsApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

appintegrationsapplication.AppintegrationsApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

appintegrationsapplication.AppintegrationsApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

appintegrationsapplication.AppintegrationsApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a AppintegrationsApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppintegrationsApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppintegrationsApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the AppintegrationsApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationArn">ApplicationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfig">ApplicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference">AppintegrationsApplicationApplicationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfig">ApplicationSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfig">IframeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference">AppintegrationsApplicationIframeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList">AppintegrationsApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfigInput">ApplicationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfigInput">ApplicationSourceConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationTypeInput">ApplicationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfigInput">IframeConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeoutInput">InitializationTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isServiceInput">IsServiceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissionsInput">PermissionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationType">ApplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeout">InitializationTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isService">IsService</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissions">Permissions</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationArn"></a>

```go
func ApplicationArn() *string
```

- *Type:* *string

---

##### `ApplicationConfig`<sup>Required</sup> <a name="ApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfig"></a>

```go
func ApplicationConfig() AppintegrationsApplicationApplicationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference">AppintegrationsApplicationApplicationConfigOutputReference</a>

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ApplicationSourceConfig`<sup>Required</sup> <a name="ApplicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfig"></a>

```go
func ApplicationSourceConfig() AppintegrationsApplicationApplicationSourceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IframeConfig`<sup>Required</sup> <a name="IframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfig"></a>

```go
func IframeConfig() AppintegrationsApplicationIframeConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference">AppintegrationsApplicationIframeConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tags"></a>

```go
func Tags() AppintegrationsApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList">AppintegrationsApplicationTagsList</a>

---

##### `ApplicationConfigInput`<sup>Optional</sup> <a name="ApplicationConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationConfigInput"></a>

```go
func ApplicationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationSourceConfigInput`<sup>Optional</sup> <a name="ApplicationSourceConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationSourceConfigInput"></a>

```go
func ApplicationSourceConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationTypeInput`<sup>Optional</sup> <a name="ApplicationTypeInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationTypeInput"></a>

```go
func ApplicationTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IframeConfigInput`<sup>Optional</sup> <a name="IframeConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.iframeConfigInput"></a>

```go
func IframeConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InitializationTimeoutInput`<sup>Optional</sup> <a name="InitializationTimeoutInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeoutInput"></a>

```go
func InitializationTimeoutInput() *f64
```

- *Type:* *f64

---

##### `IsServiceInput`<sup>Optional</sup> <a name="IsServiceInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isServiceInput"></a>

```go
func IsServiceInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissionsInput"></a>

```go
func PermissionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.applicationType"></a>

```go
func ApplicationType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InitializationTimeout`<sup>Required</sup> <a name="InitializationTimeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.initializationTimeout"></a>

```go
func InitializationTimeout() *f64
```

- *Type:* *f64

---

##### `IsService`<sup>Required</sup> <a name="IsService" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.isService"></a>

```go
func IsService() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.permissions"></a>

```go
func Permissions() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppintegrationsApplicationApplicationConfig <a name="AppintegrationsApplicationApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

&appintegrationsapplication.AppintegrationsApplicationApplicationConfig {
	ContactHandling: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.property.contactHandling">ContactHandling</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#contact_handling AppintegrationsApplication#contact_handling}. |

---

##### `ContactHandling`<sup>Optional</sup> <a name="ContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig.property.contactHandling"></a>

```go
ContactHandling AppintegrationsApplicationApplicationConfigContactHandling
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#contact_handling AppintegrationsApplication#contact_handling}.

---

### AppintegrationsApplicationApplicationConfigContactHandling <a name="AppintegrationsApplicationApplicationConfigContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

&appintegrationsapplication.AppintegrationsApplicationApplicationConfigContactHandling {
	Scope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#scope AppintegrationsApplication#scope}. |

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#scope AppintegrationsApplication#scope}.

---

### AppintegrationsApplicationApplicationSourceConfig <a name="AppintegrationsApplicationApplicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

&appintegrationsapplication.AppintegrationsApplicationApplicationSourceConfig {
	ExternalUrlConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.property.externalUrlConfig">ExternalUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#external_url_config AppintegrationsApplication#external_url_config}. |

---

##### `ExternalUrlConfig`<sup>Required</sup> <a name="ExternalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig.property.externalUrlConfig"></a>

```go
ExternalUrlConfig AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#external_url_config AppintegrationsApplication#external_url_config}.

---

### AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig <a name="AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

&appintegrationsapplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig {
	AccessUrl: *string,
	ApprovedOrigins: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.accessUrl">AccessUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#access_url AppintegrationsApplication#access_url}. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.approvedOrigins">ApprovedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#approved_origins AppintegrationsApplication#approved_origins}. |

---

##### `AccessUrl`<sup>Required</sup> <a name="AccessUrl" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.accessUrl"></a>

```go
AccessUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#access_url AppintegrationsApplication#access_url}.

---

##### `ApprovedOrigins`<sup>Optional</sup> <a name="ApprovedOrigins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig.property.approvedOrigins"></a>

```go
ApprovedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#approved_origins AppintegrationsApplication#approved_origins}.

---

### AppintegrationsApplicationConfig <a name="AppintegrationsApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

&appintegrationsapplication.AppintegrationsApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationSourceConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig,
	Name: *string,
	Namespace: *string,
	ApplicationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig,
	ApplicationType: *string,
	Description: *string,
	IframeConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig,
	InitializationTimeout: *f64,
	IsService: interface{},
	Permissions: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationSourceConfig">ApplicationSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a></code> | Application source config. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.name">Name</a></code> | <code>*string</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The namespace of the application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationConfig">ApplicationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a></code> | The application configuration. Cannot be used when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationType">ApplicationType</a></code> | <code>*string</code> | The type of application. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.description">Description</a></code> | <code>*string</code> | The application description. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.iframeConfig">IframeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a></code> | The iframe configuration. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.initializationTimeout">InitializationTimeout</a></code> | <code>*f64</code> | The initialization timeout in milliseconds. Required when IsService is true. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.isService">IsService</a></code> | <code>interface{}</code> | Indicates if the application is a service. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.permissions">Permissions</a></code> | <code>*[]*string</code> | The configuration of events or requests that the application has access to. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags (keys and values) associated with the application. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationSourceConfig`<sup>Required</sup> <a name="ApplicationSourceConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationSourceConfig"></a>

```go
ApplicationSourceConfig AppintegrationsApplicationApplicationSourceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfig">AppintegrationsApplicationApplicationSourceConfig</a>

Application source config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#application_source_config AppintegrationsApplication#application_source_config}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#name AppintegrationsApplication#name}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The namespace of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#namespace AppintegrationsApplication#namespace}

---

##### `ApplicationConfig`<sup>Optional</sup> <a name="ApplicationConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationConfig"></a>

```go
ApplicationConfig AppintegrationsApplicationApplicationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfig">AppintegrationsApplicationApplicationConfig</a>

The application configuration. Cannot be used when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#application_config AppintegrationsApplication#application_config}

---

##### `ApplicationType`<sup>Optional</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.applicationType"></a>

```go
ApplicationType *string
```

- *Type:* *string

The type of application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#application_type AppintegrationsApplication#application_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The application description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#description AppintegrationsApplication#description}

---

##### `IframeConfig`<sup>Optional</sup> <a name="IframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.iframeConfig"></a>

```go
IframeConfig AppintegrationsApplicationIframeConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig">AppintegrationsApplicationIframeConfig</a>

The iframe configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#iframe_config AppintegrationsApplication#iframe_config}

---

##### `InitializationTimeout`<sup>Optional</sup> <a name="InitializationTimeout" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.initializationTimeout"></a>

```go
InitializationTimeout *f64
```

- *Type:* *f64

The initialization timeout in milliseconds. Required when IsService is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#initialization_timeout AppintegrationsApplication#initialization_timeout}

---

##### `IsService`<sup>Optional</sup> <a name="IsService" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.isService"></a>

```go
IsService interface{}
```

- *Type:* interface{}

Indicates if the application is a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#is_service AppintegrationsApplication#is_service}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.permissions"></a>

```go
Permissions *[]*string
```

- *Type:* *[]*string

The configuration of events or requests that the application has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#permissions AppintegrationsApplication#permissions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags (keys and values) associated with the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#tags AppintegrationsApplication#tags}

---

### AppintegrationsApplicationIframeConfig <a name="AppintegrationsApplicationIframeConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

&appintegrationsapplication.AppintegrationsApplicationIframeConfig {
	Allow: *[]*string,
	Sandbox: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.allow">Allow</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#allow AppintegrationsApplication#allow}. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.sandbox">Sandbox</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#sandbox AppintegrationsApplication#sandbox}. |

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.allow"></a>

```go
Allow *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#allow AppintegrationsApplication#allow}.

---

##### `Sandbox`<sup>Optional</sup> <a name="Sandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfig.property.sandbox"></a>

```go
Sandbox *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#sandbox AppintegrationsApplication#sandbox}.

---

### AppintegrationsApplicationTags <a name="AppintegrationsApplicationTags" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

&appintegrationsapplication.AppintegrationsApplicationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.key">Key</a></code> | <code>*string</code> | A key to identify the tag. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.value">Value</a></code> | <code>*string</code> | Corresponding tag value for the key. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A key to identify the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#key AppintegrationsApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Corresponding tag value for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/appintegrations_application#value AppintegrationsApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppintegrationsApplicationApplicationConfigContactHandlingOutputReference <a name="AppintegrationsApplicationApplicationConfigContactHandlingOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

appintegrationsapplication.NewAppintegrationsApplicationApplicationConfigContactHandlingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppintegrationsApplicationApplicationConfigContactHandlingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resetScope">ResetScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.resetScope"></a>

```go
func ResetScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppintegrationsApplicationApplicationConfigOutputReference <a name="AppintegrationsApplicationApplicationConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

appintegrationsapplication.NewAppintegrationsApplicationApplicationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppintegrationsApplicationApplicationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling">PutContactHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resetContactHandling">ResetContactHandling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContactHandling` <a name="PutContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling"></a>

```go
func PutContactHandling(value AppintegrationsApplicationApplicationConfigContactHandling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.putContactHandling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandling">AppintegrationsApplicationApplicationConfigContactHandling</a>

---

##### `ResetContactHandling` <a name="ResetContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.resetContactHandling"></a>

```go
func ResetContactHandling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandling">ContactHandling</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference">AppintegrationsApplicationApplicationConfigContactHandlingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandlingInput">ContactHandlingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContactHandling`<sup>Required</sup> <a name="ContactHandling" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandling"></a>

```go
func ContactHandling() AppintegrationsApplicationApplicationConfigContactHandlingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigContactHandlingOutputReference">AppintegrationsApplicationApplicationConfigContactHandlingOutputReference</a>

---

##### `ContactHandlingInput`<sup>Optional</sup> <a name="ContactHandlingInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.contactHandlingInput"></a>

```go
func ContactHandlingInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference <a name="AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

appintegrationsapplication.NewAppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resetApprovedOrigins">ResetApprovedOrigins</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApprovedOrigins` <a name="ResetApprovedOrigins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.resetApprovedOrigins"></a>

```go
func ResetApprovedOrigins()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrlInput">AccessUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOriginsInput">ApprovedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrl">AccessUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOrigins">ApprovedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessUrlInput`<sup>Optional</sup> <a name="AccessUrlInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrlInput"></a>

```go
func AccessUrlInput() *string
```

- *Type:* *string

---

##### `ApprovedOriginsInput`<sup>Optional</sup> <a name="ApprovedOriginsInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOriginsInput"></a>

```go
func ApprovedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessUrl`<sup>Required</sup> <a name="AccessUrl" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.accessUrl"></a>

```go
func AccessUrl() *string
```

- *Type:* *string

---

##### `ApprovedOrigins`<sup>Required</sup> <a name="ApprovedOrigins" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.approvedOrigins"></a>

```go
func ApprovedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppintegrationsApplicationApplicationSourceConfigOutputReference <a name="AppintegrationsApplicationApplicationSourceConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

appintegrationsapplication.NewAppintegrationsApplicationApplicationSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppintegrationsApplicationApplicationSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig">PutExternalUrlConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalUrlConfig` <a name="PutExternalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig"></a>

```go
func PutExternalUrlConfig(value AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.putExternalUrlConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfig">ExternalUrlConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfigInput">ExternalUrlConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalUrlConfig`<sup>Required</sup> <a name="ExternalUrlConfig" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfig"></a>

```go
func ExternalUrlConfig() AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference">AppintegrationsApplicationApplicationSourceConfigExternalUrlConfigOutputReference</a>

---

##### `ExternalUrlConfigInput`<sup>Optional</sup> <a name="ExternalUrlConfigInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.externalUrlConfigInput"></a>

```go
func ExternalUrlConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationApplicationSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppintegrationsApplicationIframeConfigOutputReference <a name="AppintegrationsApplicationIframeConfigOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

appintegrationsapplication.NewAppintegrationsApplicationIframeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppintegrationsApplicationIframeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetSandbox">ResetSandbox</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllow` <a name="ResetAllow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetAllow"></a>

```go
func ResetAllow()
```

##### `ResetSandbox` <a name="ResetSandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.resetSandbox"></a>

```go
func ResetSandbox()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allowInput">AllowInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandboxInput">SandboxInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allow">Allow</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandbox">Sandbox</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allowInput"></a>

```go
func AllowInput() *[]*string
```

- *Type:* *[]*string

---

##### `SandboxInput`<sup>Optional</sup> <a name="SandboxInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandboxInput"></a>

```go
func SandboxInput() *[]*string
```

- *Type:* *[]*string

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.allow"></a>

```go
func Allow() *[]*string
```

- *Type:* *[]*string

---

##### `Sandbox`<sup>Required</sup> <a name="Sandbox" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.sandbox"></a>

```go
func Sandbox() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationIframeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppintegrationsApplicationTagsList <a name="AppintegrationsApplicationTagsList" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

appintegrationsapplication.NewAppintegrationsApplicationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppintegrationsApplicationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get"></a>

```go
func Get(index *f64) AppintegrationsApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppintegrationsApplicationTagsOutputReference <a name="AppintegrationsApplicationTagsOutputReference" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/appintegrationsapplication"

appintegrationsapplication.NewAppintegrationsApplicationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppintegrationsApplicationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appintegrationsApplication.AppintegrationsApplicationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



