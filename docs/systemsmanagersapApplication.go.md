# `systemsmanagersapApplication` Submodule <a name="`systemsmanagersapApplication` Submodule" id="@cdktn/provider-awscc.systemsmanagersapApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemsmanagersapApplication <a name="SystemsmanagersapApplication" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application awscc_systemsmanagersap_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

systemsmanagersapapplication.NewSystemsmanagersapApplication(scope Construct, id *string, config SystemsmanagersapApplicationConfig) SystemsmanagersapApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig">SystemsmanagersapApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig">SystemsmanagersapApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo">PutComponentsInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetComponentsInfo">ResetComponentsInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetDatabaseArn">ResetDatabaseArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetInstances">ResetInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSapInstanceNumber">ResetSapInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSid">ResetSid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComponentsInfo` <a name="PutComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo"></a>

```go
func PutComponentsInfo(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCredentials` <a name="PutCredentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials"></a>

```go
func PutCredentials(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComponentsInfo` <a name="ResetComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetComponentsInfo"></a>

```go
func ResetComponentsInfo()
```

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetCredentials"></a>

```go
func ResetCredentials()
```

##### `ResetDatabaseArn` <a name="ResetDatabaseArn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetDatabaseArn"></a>

```go
func ResetDatabaseArn()
```

##### `ResetInstances` <a name="ResetInstances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetInstances"></a>

```go
func ResetInstances()
```

##### `ResetSapInstanceNumber` <a name="ResetSapInstanceNumber" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSapInstanceNumber"></a>

```go
func ResetSapInstanceNumber()
```

##### `ResetSid` <a name="ResetSid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSid"></a>

```go
func ResetSid()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SystemsmanagersapApplication resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

systemsmanagersapapplication.SystemsmanagersapApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

systemsmanagersapapplication.SystemsmanagersapApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

systemsmanagersapapplication.SystemsmanagersapApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

systemsmanagersapapplication.SystemsmanagersapApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SystemsmanagersapApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SystemsmanagersapApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SystemsmanagersapApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SystemsmanagersapApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfo">ComponentsInfo</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList">SystemsmanagersapApplicationComponentsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList">SystemsmanagersapApplicationCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList">SystemsmanagersapApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationTypeInput">ApplicationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfoInput">ComponentsInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentialsInput">CredentialsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArnInput">DatabaseArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instancesInput">InstancesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumberInput">SapInstanceNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sidInput">SidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationType">ApplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArn">DatabaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instances">Instances</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumber">SapInstanceNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sid">Sid</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ComponentsInfo`<sup>Required</sup> <a name="ComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfo"></a>

```go
func ComponentsInfo() SystemsmanagersapApplicationComponentsInfoList
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList">SystemsmanagersapApplicationComponentsInfoList</a>

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentials"></a>

```go
func Credentials() SystemsmanagersapApplicationCredentialsList
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList">SystemsmanagersapApplicationCredentialsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tags"></a>

```go
func Tags() SystemsmanagersapApplicationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList">SystemsmanagersapApplicationTagsList</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `ApplicationTypeInput`<sup>Optional</sup> <a name="ApplicationTypeInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationTypeInput"></a>

```go
func ApplicationTypeInput() *string
```

- *Type:* *string

---

##### `ComponentsInfoInput`<sup>Optional</sup> <a name="ComponentsInfoInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfoInput"></a>

```go
func ComponentsInfoInput() interface{}
```

- *Type:* interface{}

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentialsInput"></a>

```go
func CredentialsInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseArnInput`<sup>Optional</sup> <a name="DatabaseArnInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArnInput"></a>

```go
func DatabaseArnInput() *string
```

- *Type:* *string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instancesInput"></a>

```go
func InstancesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SapInstanceNumberInput`<sup>Optional</sup> <a name="SapInstanceNumberInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumberInput"></a>

```go
func SapInstanceNumberInput() *string
```

- *Type:* *string

---

##### `SidInput`<sup>Optional</sup> <a name="SidInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sidInput"></a>

```go
func SidInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationType"></a>

```go
func ApplicationType() *string
```

- *Type:* *string

---

##### `DatabaseArn`<sup>Required</sup> <a name="DatabaseArn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArn"></a>

```go
func DatabaseArn() *string
```

- *Type:* *string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instances"></a>

```go
func Instances() *[]*string
```

- *Type:* *[]*string

---

##### `SapInstanceNumber`<sup>Required</sup> <a name="SapInstanceNumber" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumber"></a>

```go
func SapInstanceNumber() *string
```

- *Type:* *string

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sid"></a>

```go
func Sid() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SystemsmanagersapApplicationComponentsInfo <a name="SystemsmanagersapApplicationComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

&systemsmanagersapapplication.SystemsmanagersapApplicationComponentsInfo {
	ComponentType: *string,
	Ec2InstanceId: *string,
	Sid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.componentType">ComponentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#component_type SystemsmanagersapApplication#component_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.ec2InstanceId">Ec2InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#ec_2_instance_id SystemsmanagersapApplication#ec_2_instance_id}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.sid">Sid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}. |

---

##### `ComponentType`<sup>Optional</sup> <a name="ComponentType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.componentType"></a>

```go
ComponentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#component_type SystemsmanagersapApplication#component_type}.

---

##### `Ec2InstanceId`<sup>Optional</sup> <a name="Ec2InstanceId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.ec2InstanceId"></a>

```go
Ec2InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#ec_2_instance_id SystemsmanagersapApplication#ec_2_instance_id}.

---

##### `Sid`<sup>Optional</sup> <a name="Sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.sid"></a>

```go
Sid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}.

---

### SystemsmanagersapApplicationConfig <a name="SystemsmanagersapApplicationConfig" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

&systemsmanagersapapplication.SystemsmanagersapApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	ApplicationType: *string,
	ComponentsInfo: interface{},
	Credentials: interface{},
	DatabaseArn: *string,
	Instances: *[]*string,
	SapInstanceNumber: *string,
	Sid: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationType">ApplicationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.componentsInfo">ComponentsInfo</a></code> | <code>interface{}</code> | This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.credentials">Credentials</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.databaseArn">DatabaseArn</a></code> | <code>*string</code> | The ARN of the SAP HANA database. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.instances">Instances</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sapInstanceNumber">SapInstanceNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sid">Sid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags of a SystemsManagerSAP application. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}.

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationType"></a>

```go
ApplicationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}.

---

##### `ComponentsInfo`<sup>Optional</sup> <a name="ComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.componentsInfo"></a>

```go
ComponentsInfo interface{}
```

- *Type:* interface{}

This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#components_info SystemsmanagersapApplication#components_info}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.credentials"></a>

```go
Credentials interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}.

---

##### `DatabaseArn`<sup>Optional</sup> <a name="DatabaseArn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.databaseArn"></a>

```go
DatabaseArn *string
```

- *Type:* *string

The ARN of the SAP HANA database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#database_arn SystemsmanagersapApplication#database_arn}

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.instances"></a>

```go
Instances *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}.

---

##### `SapInstanceNumber`<sup>Optional</sup> <a name="SapInstanceNumber" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sapInstanceNumber"></a>

```go
SapInstanceNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}.

---

##### `Sid`<sup>Optional</sup> <a name="Sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sid"></a>

```go
Sid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags of a SystemsManagerSAP application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#tags SystemsmanagersapApplication#tags}

---

### SystemsmanagersapApplicationCredentials <a name="SystemsmanagersapApplicationCredentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

&systemsmanagersapapplication.SystemsmanagersapApplicationCredentials {
	CredentialType: *string,
	DatabaseName: *string,
	SecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.credentialType">CredentialType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#credential_type SystemsmanagersapApplication#credential_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#database_name SystemsmanagersapApplication#database_name}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.secretId">SecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#secret_id SystemsmanagersapApplication#secret_id}. |

---

##### `CredentialType`<sup>Optional</sup> <a name="CredentialType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.credentialType"></a>

```go
CredentialType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#credential_type SystemsmanagersapApplication#credential_type}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#database_name SystemsmanagersapApplication#database_name}.

---

##### `SecretId`<sup>Optional</sup> <a name="SecretId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.secretId"></a>

```go
SecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#secret_id SystemsmanagersapApplication#secret_id}.

---

### SystemsmanagersapApplicationTags <a name="SystemsmanagersapApplicationTags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

&systemsmanagersapapplication.SystemsmanagersapApplicationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#key SystemsmanagersapApplication#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/systemsmanagersap_application#value SystemsmanagersapApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SystemsmanagersapApplicationComponentsInfoList <a name="SystemsmanagersapApplicationComponentsInfoList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

systemsmanagersapapplication.NewSystemsmanagersapApplicationComponentsInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SystemsmanagersapApplicationComponentsInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get"></a>

```go
func Get(index *f64) SystemsmanagersapApplicationComponentsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SystemsmanagersapApplicationComponentsInfoOutputReference <a name="SystemsmanagersapApplicationComponentsInfoOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

systemsmanagersapapplication.NewSystemsmanagersapApplicationComponentsInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SystemsmanagersapApplicationComponentsInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetComponentType">ResetComponentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetEc2InstanceId">ResetEc2InstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetSid">ResetSid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComponentType` <a name="ResetComponentType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetComponentType"></a>

```go
func ResetComponentType()
```

##### `ResetEc2InstanceId` <a name="ResetEc2InstanceId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetEc2InstanceId"></a>

```go
func ResetEc2InstanceId()
```

##### `ResetSid` <a name="ResetSid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetSid"></a>

```go
func ResetSid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentTypeInput">ComponentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceIdInput">Ec2InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sidInput">SidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentType">ComponentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceId">Ec2InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sid">Sid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComponentTypeInput`<sup>Optional</sup> <a name="ComponentTypeInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentTypeInput"></a>

```go
func ComponentTypeInput() *string
```

- *Type:* *string

---

##### `Ec2InstanceIdInput`<sup>Optional</sup> <a name="Ec2InstanceIdInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceIdInput"></a>

```go
func Ec2InstanceIdInput() *string
```

- *Type:* *string

---

##### `SidInput`<sup>Optional</sup> <a name="SidInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sidInput"></a>

```go
func SidInput() *string
```

- *Type:* *string

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentType"></a>

```go
func ComponentType() *string
```

- *Type:* *string

---

##### `Ec2InstanceId`<sup>Required</sup> <a name="Ec2InstanceId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceId"></a>

```go
func Ec2InstanceId() *string
```

- *Type:* *string

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sid"></a>

```go
func Sid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SystemsmanagersapApplicationCredentialsList <a name="SystemsmanagersapApplicationCredentialsList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

systemsmanagersapapplication.NewSystemsmanagersapApplicationCredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SystemsmanagersapApplicationCredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get"></a>

```go
func Get(index *f64) SystemsmanagersapApplicationCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SystemsmanagersapApplicationCredentialsOutputReference <a name="SystemsmanagersapApplicationCredentialsOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

systemsmanagersapapplication.NewSystemsmanagersapApplicationCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SystemsmanagersapApplicationCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetCredentialType">ResetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetSecretId">ResetSecretId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialType` <a name="ResetCredentialType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetCredentialType"></a>

```go
func ResetCredentialType()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetSecretId` <a name="ResetSecretId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetSecretId"></a>

```go
func ResetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialTypeInput">CredentialTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretIdInput">SecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialTypeInput`<sup>Optional</sup> <a name="CredentialTypeInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialTypeInput"></a>

```go
func CredentialTypeInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretIdInput"></a>

```go
func SecretIdInput() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SystemsmanagersapApplicationTagsList <a name="SystemsmanagersapApplicationTagsList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

systemsmanagersapapplication.NewSystemsmanagersapApplicationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SystemsmanagersapApplicationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get"></a>

```go
func Get(index *f64) SystemsmanagersapApplicationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SystemsmanagersapApplicationTagsOutputReference <a name="SystemsmanagersapApplicationTagsOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/systemsmanagersapapplication"

systemsmanagersapapplication.NewSystemsmanagersapApplicationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SystemsmanagersapApplicationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



