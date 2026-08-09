# `ec2CustomerGateway` Submodule <a name="`ec2CustomerGateway` Submodule" id="@cdktn/provider-awscc.ec2CustomerGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2CustomerGateway <a name="Ec2CustomerGateway" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway awscc_ec2_customer_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2customergateway"

ec2customergateway.NewEc2CustomerGateway(scope Construct, id *string, config Ec2CustomerGatewayConfig) Ec2CustomerGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig">Ec2CustomerGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig">Ec2CustomerGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetBgpAsn">ResetBgpAsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetBgpAsnExtended">ResetBgpAsnExtended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetDeviceName">ResetDeviceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBgpAsn` <a name="ResetBgpAsn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetBgpAsn"></a>

```go
func ResetBgpAsn()
```

##### `ResetBgpAsnExtended` <a name="ResetBgpAsnExtended" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetBgpAsnExtended"></a>

```go
func ResetBgpAsnExtended()
```

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```

##### `ResetDeviceName` <a name="ResetDeviceName" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetDeviceName"></a>

```go
func ResetDeviceName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2CustomerGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2customergateway"

ec2customergateway.Ec2CustomerGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2customergateway"

ec2customergateway.Ec2CustomerGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2customergateway"

ec2customergateway.Ec2CustomerGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2customergateway"

ec2customergateway.Ec2CustomerGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2CustomerGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2CustomerGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2CustomerGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2CustomerGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.customerGatewayId">CustomerGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList">Ec2CustomerGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsnExtendedInput">BgpAsnExtendedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsnInput">BgpAsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsn">BgpAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsnExtended">BgpAsnExtended</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomerGatewayId`<sup>Required</sup> <a name="CustomerGatewayId" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.customerGatewayId"></a>

```go
func CustomerGatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.tags"></a>

```go
func Tags() Ec2CustomerGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList">Ec2CustomerGatewayTagsList</a>

---

##### `BgpAsnExtendedInput`<sup>Optional</sup> <a name="BgpAsnExtendedInput" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsnExtendedInput"></a>

```go
func BgpAsnExtendedInput() *f64
```

- *Type:* *f64

---

##### `BgpAsnInput`<sup>Optional</sup> <a name="BgpAsnInput" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsnInput"></a>

```go
func BgpAsnInput() *f64
```

- *Type:* *f64

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `BgpAsn`<sup>Required</sup> <a name="BgpAsn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsn"></a>

```go
func BgpAsn() *f64
```

- *Type:* *f64

---

##### `BgpAsnExtended`<sup>Required</sup> <a name="BgpAsnExtended" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.bgpAsnExtended"></a>

```go
func BgpAsnExtended() *f64
```

- *Type:* *f64

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2CustomerGatewayConfig <a name="Ec2CustomerGatewayConfig" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2customergateway"

&ec2customergateway.Ec2CustomerGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IpAddress: *string,
	Type: *string,
	BgpAsn: *f64,
	BgpAsnExtended: *f64,
	CertificateArn: *string,
	DeviceName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.ipAddress">IpAddress</a></code> | <code>*string</code> | The IP address for the customer gateway device's outside interface. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.type">Type</a></code> | <code>*string</code> | The type of VPN connection that this customer gateway supports (``ipsec.1``). |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.bgpAsn">BgpAsn</a></code> | <code>*f64</code> | For customer gateway devices that support BGP, specify the device's ASN. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.bgpAsnExtended">BgpAsnExtended</a></code> | <code>*f64</code> | For customer gateway devices that support BGP, specify the device's ASN. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for the customer gateway certificate. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.deviceName">DeviceName</a></code> | <code>*string</code> | The name of customer gateway device. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.tags">Tags</a></code> | <code>interface{}</code> | One or more tags for the customer gateway. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

The IP address for the customer gateway device's outside interface.

The address must be static. If `OutsideIpAddressType` in your VPN connection options is set to `PrivateIpv4`, you can use an RFC6598 or RFC1918 private IPv4 address. If `OutsideIpAddressType` is set to `Ipv6`, you can use an IPv6 address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#ip_address Ec2CustomerGateway#ip_address}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of VPN connection that this customer gateway supports (``ipsec.1``).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#type Ec2CustomerGateway#type}

---

##### `BgpAsn`<sup>Optional</sup> <a name="BgpAsn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.bgpAsn"></a>

```go
BgpAsn *f64
```

- *Type:* *f64

For customer gateway devices that support BGP, specify the device's ASN.

You must specify either `BgpAsn` or `BgpAsnExtended` when creating the customer gateway. If the ASN is larger than `2,147,483,647`, you must use `BgpAsnExtended`.
Default: 65000
Valid values: `1` to `2,147,483,647`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#bgp_asn Ec2CustomerGateway#bgp_asn}

---

##### `BgpAsnExtended`<sup>Optional</sup> <a name="BgpAsnExtended" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.bgpAsnExtended"></a>

```go
BgpAsnExtended *f64
```

- *Type:* *f64

For customer gateway devices that support BGP, specify the device's ASN.

You must specify either `BgpAsn` or `BgpAsnExtended` when creating the customer gateway. If the ASN is larger than `2,147,483,647`, you must use `BgpAsnExtended`.
Valid values: `2,147,483,648` to `4,294,967,295`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#bgp_asn_extended Ec2CustomerGateway#bgp_asn_extended}

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for the customer gateway certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#certificate_arn Ec2CustomerGateway#certificate_arn}

---

##### `DeviceName`<sup>Optional</sup> <a name="DeviceName" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

The name of customer gateway device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#device_name Ec2CustomerGateway#device_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

One or more tags for the customer gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#tags Ec2CustomerGateway#tags}

---

### Ec2CustomerGatewayTags <a name="Ec2CustomerGatewayTags" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2customergateway"

&ec2customergateway.Ec2CustomerGatewayTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags.property.key">Key</a></code> | <code>*string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#key Ec2CustomerGateway#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_customer_gateway#value Ec2CustomerGateway#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2CustomerGatewayTagsList <a name="Ec2CustomerGatewayTagsList" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2customergateway"

ec2customergateway.NewEc2CustomerGatewayTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2CustomerGatewayTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.get"></a>

```go
func Get(index *f64) Ec2CustomerGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2CustomerGatewayTagsOutputReference <a name="Ec2CustomerGatewayTagsOutputReference" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2customergateway"

ec2customergateway.NewEc2CustomerGatewayTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2CustomerGatewayTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2CustomerGateway.Ec2CustomerGatewayTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



