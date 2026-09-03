# `ec2SecurityGroupEgress` Submodule <a name="`ec2SecurityGroupEgress` Submodule" id="@cdktn/provider-awscc.ec2SecurityGroupEgress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecurityGroupEgress <a name="Ec2SecurityGroupEgress" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group_egress awscc_ec2_security_group_egress}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2securitygroupegress"

ec2securitygroupegress.NewEc2SecurityGroupEgress(scope Construct, id *string, config Ec2SecurityGroupEgressConfig) Ec2SecurityGroupEgress
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig">Ec2SecurityGroupEgressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig">Ec2SecurityGroupEgressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetCidrIp">ResetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetCidrIpv6">ResetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDestinationPrefixListId">ResetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDestinationSecurityGroupId">ResetDestinationSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCidrIp` <a name="ResetCidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetCidrIp"></a>

```go
func ResetCidrIp()
```

##### `ResetCidrIpv6` <a name="ResetCidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetCidrIpv6"></a>

```go
func ResetCidrIpv6()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDestinationPrefixListId` <a name="ResetDestinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDestinationPrefixListId"></a>

```go
func ResetDestinationPrefixListId()
```

##### `ResetDestinationSecurityGroupId` <a name="ResetDestinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetDestinationSecurityGroupId"></a>

```go
func ResetDestinationSecurityGroupId()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.resetToPort"></a>

```go
func ResetToPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SecurityGroupEgress resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2securitygroupegress"

ec2securitygroupegress.Ec2SecurityGroupEgress_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2securitygroupegress"

ec2securitygroupegress.Ec2SecurityGroupEgress_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2securitygroupegress"

ec2securitygroupegress.Ec2SecurityGroupEgress_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2securitygroupegress"

ec2securitygroupegress.Ec2SecurityGroupEgress_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2SecurityGroupEgress resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2SecurityGroupEgress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2SecurityGroupEgress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group_egress#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecurityGroupEgress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.securityGroupEgressId">SecurityGroupEgressId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpInput">CidrIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpv6Input">CidrIpv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationPrefixListIdInput">DestinationPrefixListIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationSecurityGroupIdInput">DestinationSecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIp">CidrIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpv6">CidrIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationPrefixListId">DestinationPrefixListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationSecurityGroupId">DestinationSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecurityGroupEgressId`<sup>Required</sup> <a name="SecurityGroupEgressId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.securityGroupEgressId"></a>

```go
func SecurityGroupEgressId() *string
```

- *Type:* *string

---

##### `CidrIpInput`<sup>Optional</sup> <a name="CidrIpInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpInput"></a>

```go
func CidrIpInput() *string
```

- *Type:* *string

---

##### `CidrIpv6Input`<sup>Optional</sup> <a name="CidrIpv6Input" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpv6Input"></a>

```go
func CidrIpv6Input() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationPrefixListIdInput`<sup>Optional</sup> <a name="DestinationPrefixListIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationPrefixListIdInput"></a>

```go
func DestinationPrefixListIdInput() *string
```

- *Type:* *string

---

##### `DestinationSecurityGroupIdInput`<sup>Optional</sup> <a name="DestinationSecurityGroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationSecurityGroupIdInput"></a>

```go
func DestinationSecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `CidrIp`<sup>Required</sup> <a name="CidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIp"></a>

```go
func CidrIp() *string
```

- *Type:* *string

---

##### `CidrIpv6`<sup>Required</sup> <a name="CidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.cidrIpv6"></a>

```go
func CidrIpv6() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationPrefixListId`<sup>Required</sup> <a name="DestinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationPrefixListId"></a>

```go
func DestinationPrefixListId() *string
```

- *Type:* *string

---

##### `DestinationSecurityGroupId`<sup>Required</sup> <a name="DestinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.destinationSecurityGroupId"></a>

```go
func DestinationSecurityGroupId() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgress.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecurityGroupEgressConfig <a name="Ec2SecurityGroupEgressConfig" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2securitygroupegress"

&ec2securitygroupegress.Ec2SecurityGroupEgressConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GroupId: *string,
	IpProtocol: *string,
	CidrIp: *string,
	CidrIpv6: *string,
	Description: *string,
	DestinationPrefixListId: *string,
	DestinationSecurityGroupId: *string,
	FromPort: *f64,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.groupId">GroupId</a></code> | <code>*string</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | The IP protocol name (``tcp``, ``udp``, ``icmp``, ``icmpv6``) or number (see [Protocol Numbers](https://docs.aws.amazon.com/http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).  Use ``-1`` to specify all protocols. When authorizing security group rules, specifying ``-1`` or a protocol number other than ``tcp``, ``udp``, ``icmp``, or ``icmpv6`` allows traffic on all ports, regardless of any port range you specify. For ``tcp``, ``udp``, and ``icmp``, you must specify a port range. For ``icmpv6``, the port range is optional; if you omit the port range, traffic for all types and codes is allowed. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.cidrIp">CidrIp</a></code> | <code>*string</code> | The IPv4 address range, in CIDR format. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.cidrIpv6">CidrIpv6</a></code> | <code>*string</code> | The IPv6 address range, in CIDR format. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.description">Description</a></code> | <code>*string</code> | The description of an egress (outbound) security group rule. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.destinationPrefixListId">DestinationPrefixListId</a></code> | <code>*string</code> | The prefix list IDs for an AWS service. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.destinationSecurityGroupId">DestinationSecurityGroupId</a></code> | <code>*string</code> | The ID of the security group.  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.fromPort">FromPort</a></code> | <code>*f64</code> | If the protocol is TCP or UDP, this is the start of the port range. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.toPort">ToPort</a></code> | <code>*f64</code> | If the protocol is TCP or UDP, this is the end of the port range. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

The ID of the security group.

You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group_egress#group_id Ec2SecurityGroupEgress#group_id}

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

The IP protocol name (``tcp``, ``udp``, ``icmp``, ``icmpv6``) or number (see [Protocol Numbers](https://docs.aws.amazon.com/http://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml)).  Use ``-1`` to specify all protocols. When authorizing security group rules, specifying ``-1`` or a protocol number other than ``tcp``, ``udp``, ``icmp``, or ``icmpv6`` allows traffic on all ports, regardless of any port range you specify. For ``tcp``, ``udp``, and ``icmp``, you must specify a port range. For ``icmpv6``, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group_egress#ip_protocol Ec2SecurityGroupEgress#ip_protocol}

---

##### `CidrIp`<sup>Optional</sup> <a name="CidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.cidrIp"></a>

```go
CidrIp *string
```

- *Type:* *string

The IPv4 address range, in CIDR format.

You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group_egress#cidr_ip Ec2SecurityGroupEgress#cidr_ip}

---

##### `CidrIpv6`<sup>Optional</sup> <a name="CidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.cidrIpv6"></a>

```go
CidrIpv6 *string
```

- *Type:* *string

The IPv6 address range, in CIDR format.

You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.
For examples of rules that you can add to security groups for specific access scenarios, see [Security group rules for different use cases](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group_egress#cidr_ipv_6 Ec2SecurityGroupEgress#cidr_ipv_6}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of an egress (outbound) security group rule.

Constraints: Up to 255 characters in length. Allowed characters are a-z, A-Z, 0-9, spaces, and ._-:/()#,@[]+=;{}!$*

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group_egress#description Ec2SecurityGroupEgress#description}

---

##### `DestinationPrefixListId`<sup>Optional</sup> <a name="DestinationPrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.destinationPrefixListId"></a>

```go
DestinationPrefixListId *string
```

- *Type:* *string

The prefix list IDs for an AWS service.

This is the AWS service to access through a VPC endpoint from instances associated with the security group.
You must specify exactly one of the following: `CidrIp`, `CidrIpv6`, `DestinationPrefixListId`, or `DestinationSecurityGroupId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group_egress#destination_prefix_list_id Ec2SecurityGroupEgress#destination_prefix_list_id}

---

##### `DestinationSecurityGroupId`<sup>Optional</sup> <a name="DestinationSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.destinationSecurityGroupId"></a>

```go
DestinationSecurityGroupId *string
```

- *Type:* *string

The ID of the security group.  You must specify exactly one of the following: ``CidrIp``, ``CidrIpv6``, ``DestinationPrefixListId``, or ``DestinationSecurityGroupId``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group_egress#destination_security_group_id Ec2SecurityGroupEgress#destination_security_group_id}

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

If the protocol is TCP or UDP, this is the start of the port range.

If the protocol is ICMP or ICMPv6, this is the ICMP type or -1 (all ICMP types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group_egress#from_port Ec2SecurityGroupEgress#from_port}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2SecurityGroupEgress.Ec2SecurityGroupEgressConfig.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

If the protocol is TCP or UDP, this is the end of the port range.

If the protocol is ICMP or ICMPv6, this is the ICMP code or -1 (all ICMP codes). If the start port is -1 (all ICMP types), then the end port must be -1 (all ICMP codes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_security_group_egress#to_port Ec2SecurityGroupEgress#to_port}

---



