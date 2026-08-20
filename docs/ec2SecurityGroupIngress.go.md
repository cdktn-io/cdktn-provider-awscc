# `ec2SecurityGroupIngress` Submodule <a name="`ec2SecurityGroupIngress` Submodule" id="@cdktn/provider-awscc.ec2SecurityGroupIngress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SecurityGroupIngress <a name="Ec2SecurityGroupIngress" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress awscc_ec2_security_group_ingress}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2securitygroupingress"

ec2securitygroupingress.NewEc2SecurityGroupIngress(scope Construct, id *string, config Ec2SecurityGroupIngressConfig) Ec2SecurityGroupIngress
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig">Ec2SecurityGroupIngressConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig">Ec2SecurityGroupIngressConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIp">ResetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIpv6">ResetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetFromPort">ResetFromPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupId">ResetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupName">ResetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourcePrefixListId">ResetSourcePrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupId">ResetSourceSecurityGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupName">ResetSourceSecurityGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupOwnerId">ResetSourceSecurityGroupOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetToPort">ResetToPort</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCidrIp` <a name="ResetCidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIp"></a>

```go
func ResetCidrIp()
```

##### `ResetCidrIpv6` <a name="ResetCidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetCidrIpv6"></a>

```go
func ResetCidrIpv6()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFromPort` <a name="ResetFromPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetFromPort"></a>

```go
func ResetFromPort()
```

##### `ResetGroupId` <a name="ResetGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupId"></a>

```go
func ResetGroupId()
```

##### `ResetGroupName` <a name="ResetGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetGroupName"></a>

```go
func ResetGroupName()
```

##### `ResetSourcePrefixListId` <a name="ResetSourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourcePrefixListId"></a>

```go
func ResetSourcePrefixListId()
```

##### `ResetSourceSecurityGroupId` <a name="ResetSourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupId"></a>

```go
func ResetSourceSecurityGroupId()
```

##### `ResetSourceSecurityGroupName` <a name="ResetSourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupName"></a>

```go
func ResetSourceSecurityGroupName()
```

##### `ResetSourceSecurityGroupOwnerId` <a name="ResetSourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetSourceSecurityGroupOwnerId"></a>

```go
func ResetSourceSecurityGroupOwnerId()
```

##### `ResetToPort` <a name="ResetToPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.resetToPort"></a>

```go
func ResetToPort()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SecurityGroupIngress resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2securitygroupingress"

ec2securitygroupingress.Ec2SecurityGroupIngress_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2securitygroupingress"

ec2securitygroupingress.Ec2SecurityGroupIngress_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2securitygroupingress"

ec2securitygroupingress.Ec2SecurityGroupIngress_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2securitygroupingress"

ec2securitygroupingress.Ec2SecurityGroupIngress_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2SecurityGroupIngress resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2SecurityGroupIngress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2SecurityGroupIngress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SecurityGroupIngress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.securityGroupIngressId">SecurityGroupIngressId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpInput">CidrIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6Input">CidrIpv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPortInput">FromPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupNameInput">GroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListIdInput">SourcePrefixListIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupIdInput">SourceSecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupNameInput">SourceSecurityGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerIdInput">SourceSecurityGroupOwnerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPortInput">ToPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIp">CidrIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6">CidrIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPort">FromPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupName">GroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListId">SourcePrefixListId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupId">SourceSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupName">SourceSecurityGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerId">SourceSecurityGroupOwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPort">ToPort</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SecurityGroupIngressId`<sup>Required</sup> <a name="SecurityGroupIngressId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.securityGroupIngressId"></a>

```go
func SecurityGroupIngressId() *string
```

- *Type:* *string

---

##### `CidrIpInput`<sup>Optional</sup> <a name="CidrIpInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpInput"></a>

```go
func CidrIpInput() *string
```

- *Type:* *string

---

##### `CidrIpv6Input`<sup>Optional</sup> <a name="CidrIpv6Input" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6Input"></a>

```go
func CidrIpv6Input() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FromPortInput`<sup>Optional</sup> <a name="FromPortInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPortInput"></a>

```go
func FromPortInput() *f64
```

- *Type:* *f64

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `GroupNameInput`<sup>Optional</sup> <a name="GroupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupNameInput"></a>

```go
func GroupNameInput() *string
```

- *Type:* *string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `SourcePrefixListIdInput`<sup>Optional</sup> <a name="SourcePrefixListIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListIdInput"></a>

```go
func SourcePrefixListIdInput() *string
```

- *Type:* *string

---

##### `SourceSecurityGroupIdInput`<sup>Optional</sup> <a name="SourceSecurityGroupIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupIdInput"></a>

```go
func SourceSecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `SourceSecurityGroupNameInput`<sup>Optional</sup> <a name="SourceSecurityGroupNameInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupNameInput"></a>

```go
func SourceSecurityGroupNameInput() *string
```

- *Type:* *string

---

##### `SourceSecurityGroupOwnerIdInput`<sup>Optional</sup> <a name="SourceSecurityGroupOwnerIdInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerIdInput"></a>

```go
func SourceSecurityGroupOwnerIdInput() *string
```

- *Type:* *string

---

##### `ToPortInput`<sup>Optional</sup> <a name="ToPortInput" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPortInput"></a>

```go
func ToPortInput() *f64
```

- *Type:* *f64

---

##### `CidrIp`<sup>Required</sup> <a name="CidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIp"></a>

```go
func CidrIp() *string
```

- *Type:* *string

---

##### `CidrIpv6`<sup>Required</sup> <a name="CidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.cidrIpv6"></a>

```go
func CidrIpv6() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FromPort`<sup>Required</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.fromPort"></a>

```go
func FromPort() *f64
```

- *Type:* *f64

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.groupName"></a>

```go
func GroupName() *string
```

- *Type:* *string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `SourcePrefixListId`<sup>Required</sup> <a name="SourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourcePrefixListId"></a>

```go
func SourcePrefixListId() *string
```

- *Type:* *string

---

##### `SourceSecurityGroupId`<sup>Required</sup> <a name="SourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupId"></a>

```go
func SourceSecurityGroupId() *string
```

- *Type:* *string

---

##### `SourceSecurityGroupName`<sup>Required</sup> <a name="SourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupName"></a>

```go
func SourceSecurityGroupName() *string
```

- *Type:* *string

---

##### `SourceSecurityGroupOwnerId`<sup>Required</sup> <a name="SourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.sourceSecurityGroupOwnerId"></a>

```go
func SourceSecurityGroupOwnerId() *string
```

- *Type:* *string

---

##### `ToPort`<sup>Required</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.toPort"></a>

```go
func ToPort() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngress.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SecurityGroupIngressConfig <a name="Ec2SecurityGroupIngressConfig" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2securitygroupingress"

&ec2securitygroupingress.Ec2SecurityGroupIngressConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IpProtocol: *string,
	CidrIp: *string,
	CidrIpv6: *string,
	Description: *string,
	FromPort: *f64,
	GroupId: *string,
	GroupName: *string,
	SourcePrefixListId: *string,
	SourceSecurityGroupId: *string,
	SourceSecurityGroupName: *string,
	SourceSecurityGroupOwnerId: *string,
	ToPort: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers). |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIp">CidrIp</a></code> | <code>*string</code> | The IPv4 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIpv6">CidrIpv6</a></code> | <code>*string</code> | [VPC only] The IPv6 ranges. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.description">Description</a></code> | <code>*string</code> | Updates the description of an ingress (inbound) security group rule. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.fromPort">FromPort</a></code> | <code>*f64</code> | The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupId">GroupId</a></code> | <code>*string</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupName">GroupName</a></code> | <code>*string</code> | The name of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourcePrefixListId">SourcePrefixListId</a></code> | <code>*string</code> | [EC2-VPC only] The ID of a prefix list. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupId">SourceSecurityGroupId</a></code> | <code>*string</code> | The ID of the security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupName">SourceSecurityGroupName</a></code> | <code>*string</code> | [EC2-Classic, default VPC] The name of the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupOwnerId">SourceSecurityGroupOwnerId</a></code> | <code>*string</code> | [nondefault VPC] The AWS account ID that owns the source security group. |
| <code><a href="#@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.toPort">ToPort</a></code> | <code>*f64</code> | The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

The IP protocol name (tcp, udp, icmp, icmpv6) or number (see Protocol Numbers).

[VPC only] Use -1 to specify all protocols. When authorizing security group rules, specifying -1 or a protocol number other than tcp, udp, icmp, or icmpv6 allows traffic on all ports, regardless of any port range you specify. For tcp, udp, and icmp, you must specify a port range. For icmpv6, the port range is optional; if you omit the port range, traffic for all types and codes is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress#ip_protocol Ec2SecurityGroupIngress#ip_protocol}

---

##### `CidrIp`<sup>Optional</sup> <a name="CidrIp" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIp"></a>

```go
CidrIp *string
```

- *Type:* *string

The IPv4 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress#cidr_ip Ec2SecurityGroupIngress#cidr_ip}

---

##### `CidrIpv6`<sup>Optional</sup> <a name="CidrIpv6" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.cidrIpv6"></a>

```go
CidrIpv6 *string
```

- *Type:* *string

[VPC only] The IPv6 ranges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress#cidr_ipv_6 Ec2SecurityGroupIngress#cidr_ipv_6}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Updates the description of an ingress (inbound) security group rule.

You can replace an existing description, or add a description to a rule that did not have one previously

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress#description Ec2SecurityGroupIngress#description}

---

##### `FromPort`<sup>Optional</sup> <a name="FromPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.fromPort"></a>

```go
FromPort *f64
```

- *Type:* *f64

The start of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 type number.

A value of -1 indicates all ICMP/ICMPv6 types. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress#from_port Ec2SecurityGroupIngress#from_port}

---

##### `GroupId`<sup>Optional</sup> <a name="GroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

The ID of the security group.

You must specify either the security group ID or the security group name in the request. For security groups in a nondefault VPC, you must specify the security group ID.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress#group_id Ec2SecurityGroupIngress#group_id}

---

##### `GroupName`<sup>Optional</sup> <a name="GroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.groupName"></a>

```go
GroupName *string
```

- *Type:* *string

The name of the security group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress#group_name Ec2SecurityGroupIngress#group_name}

---

##### `SourcePrefixListId`<sup>Optional</sup> <a name="SourcePrefixListId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourcePrefixListId"></a>

```go
SourcePrefixListId *string
```

- *Type:* *string

[EC2-VPC only] The ID of a prefix list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress#source_prefix_list_id Ec2SecurityGroupIngress#source_prefix_list_id}

---

##### `SourceSecurityGroupId`<sup>Optional</sup> <a name="SourceSecurityGroupId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupId"></a>

```go
SourceSecurityGroupId *string
```

- *Type:* *string

The ID of the security group.

You must specify either the security group ID or the security group name. For security groups in a nondefault VPC, you must specify the security group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress#source_security_group_id Ec2SecurityGroupIngress#source_security_group_id}

---

##### `SourceSecurityGroupName`<sup>Optional</sup> <a name="SourceSecurityGroupName" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupName"></a>

```go
SourceSecurityGroupName *string
```

- *Type:* *string

[EC2-Classic, default VPC] The name of the source security group.

You must specify the GroupName property or the GroupId property. For security groups that are in a VPC, you must use the GroupId property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress#source_security_group_name Ec2SecurityGroupIngress#source_security_group_name}

---

##### `SourceSecurityGroupOwnerId`<sup>Optional</sup> <a name="SourceSecurityGroupOwnerId" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.sourceSecurityGroupOwnerId"></a>

```go
SourceSecurityGroupOwnerId *string
```

- *Type:* *string

[nondefault VPC] The AWS account ID that owns the source security group.

You can't specify this property with an IP address range.

If you specify SourceSecurityGroupName or SourceSecurityGroupId and that security group is owned by a different account than the account creating the stack, you must specify the SourceSecurityGroupOwnerId; otherwise, this property is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress#source_security_group_owner_id Ec2SecurityGroupIngress#source_security_group_owner_id}

---

##### `ToPort`<sup>Optional</sup> <a name="ToPort" id="@cdktn/provider-awscc.ec2SecurityGroupIngress.Ec2SecurityGroupIngressConfig.property.toPort"></a>

```go
ToPort *f64
```

- *Type:* *f64

The end of port range for the TCP and UDP protocols, or an ICMP/ICMPv6 code.

A value of -1 indicates all ICMP/ICMPv6 codes for the specified ICMP type. If you specify all ICMP/ICMPv6 types, you must specify all codes.

Use this for ICMP and any protocol that uses ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_security_group_ingress#to_port Ec2SecurityGroupIngress#to_port}

---



