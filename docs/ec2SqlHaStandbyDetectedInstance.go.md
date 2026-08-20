# `ec2SqlHaStandbyDetectedInstance` Submodule <a name="`ec2SqlHaStandbyDetectedInstance` Submodule" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SqlHaStandbyDetectedInstance <a name="Ec2SqlHaStandbyDetectedInstance" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_sql_ha_standby_detected_instance awscc_ec2_sql_ha_standby_detected_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2sqlhastandbydetectedinstance"

ec2sqlhastandbydetectedinstance.NewEc2SqlHaStandbyDetectedInstance(scope Construct, id *string, config Ec2SqlHaStandbyDetectedInstanceConfig) Ec2SqlHaStandbyDetectedInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig">Ec2SqlHaStandbyDetectedInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig">Ec2SqlHaStandbyDetectedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.resetSqlServerCredentials">ResetSqlServerCredentials</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetSqlServerCredentials` <a name="ResetSqlServerCredentials" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.resetSqlServerCredentials"></a>

```go
func ResetSqlServerCredentials()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SqlHaStandbyDetectedInstance resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2sqlhastandbydetectedinstance"

ec2sqlhastandbydetectedinstance.Ec2SqlHaStandbyDetectedInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2sqlhastandbydetectedinstance"

ec2sqlhastandbydetectedinstance.Ec2SqlHaStandbyDetectedInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2sqlhastandbydetectedinstance"

ec2sqlhastandbydetectedinstance.Ec2SqlHaStandbyDetectedInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2sqlhastandbydetectedinstance"

ec2sqlhastandbydetectedinstance.Ec2SqlHaStandbyDetectedInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2SqlHaStandbyDetectedInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2SqlHaStandbyDetectedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2SqlHaStandbyDetectedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_sql_ha_standby_detected_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SqlHaStandbyDetectedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.haStatus">HaStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerLicenseUsage">SqlServerLicenseUsage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerCredentialsInput">SqlServerCredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerCredentials">SqlServerCredentials</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HaStatus`<sup>Required</sup> <a name="HaStatus" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.haStatus"></a>

```go
func HaStatus() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `SqlServerLicenseUsage`<sup>Required</sup> <a name="SqlServerLicenseUsage" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerLicenseUsage"></a>

```go
func SqlServerLicenseUsage() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `SqlServerCredentialsInput`<sup>Optional</sup> <a name="SqlServerCredentialsInput" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerCredentialsInput"></a>

```go
func SqlServerCredentialsInput() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `SqlServerCredentials`<sup>Required</sup> <a name="SqlServerCredentials" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.sqlServerCredentials"></a>

```go
func SqlServerCredentials() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SqlHaStandbyDetectedInstanceConfig <a name="Ec2SqlHaStandbyDetectedInstanceConfig" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2sqlhastandbydetectedinstance"

&ec2sqlhastandbydetectedinstance.Ec2SqlHaStandbyDetectedInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceId: *string,
	SqlServerCredentials: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | The ID of the EC2 instance to enable for SQL Server high availability standby detection. |
| <code><a href="#@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.sqlServerCredentials">SqlServerCredentials</a></code> | <code>*string</code> | The ARN of the AWS Secrets Manager secret containing SQL Server access credentials to the EC2 instance. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

The ID of the EC2 instance to enable for SQL Server high availability standby detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_sql_ha_standby_detected_instance#instance_id Ec2SqlHaStandbyDetectedInstance#instance_id}

---

##### `SqlServerCredentials`<sup>Optional</sup> <a name="SqlServerCredentials" id="@cdktn/provider-awscc.ec2SqlHaStandbyDetectedInstance.Ec2SqlHaStandbyDetectedInstanceConfig.property.sqlServerCredentials"></a>

```go
SqlServerCredentials *string
```

- *Type:* *string

The ARN of the AWS Secrets Manager secret containing SQL Server access credentials to the EC2 instance.

If not specified, AWS Systems Manager agent will use default local user credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_sql_ha_standby_detected_instance#sql_server_credentials Ec2SqlHaStandbyDetectedInstance#sql_server_credentials}

---



