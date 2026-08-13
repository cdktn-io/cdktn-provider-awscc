# `networkfirewallFirewallPolicy` Submodule <a name="`networkfirewallFirewallPolicy` Submodule" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallFirewallPolicy <a name="NetworkfirewallFirewallPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy awscc_networkfirewall_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicy(scope Construct, id *string, config NetworkfirewallFirewallPolicyConfig) NetworkfirewallFirewallPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig">NetworkfirewallFirewallPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig">NetworkfirewallFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy">PutFirewallPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFirewallPolicy` <a name="PutFirewallPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy"></a>

```go
func PutFirewallPolicy(value NetworkfirewallFirewallPolicyFirewallPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putFirewallPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallFirewallPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkfirewallFirewallPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkfirewallFirewallPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkfirewallFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicy">FirewallPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyArn">FirewallPolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyId">FirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList">NetworkfirewallFirewallPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyInput">FirewallPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyNameInput">FirewallPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyName">FirewallPolicyName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicy"></a>

```go
func FirewallPolicy() NetworkfirewallFirewallPolicyFirewallPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyOutputReference</a>

---

##### `FirewallPolicyArn`<sup>Required</sup> <a name="FirewallPolicyArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyArn"></a>

```go
func FirewallPolicyArn() *string
```

- *Type:* *string

---

##### `FirewallPolicyId`<sup>Required</sup> <a name="FirewallPolicyId" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyId"></a>

```go
func FirewallPolicyId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tags"></a>

```go
func Tags() NetworkfirewallFirewallPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList">NetworkfirewallFirewallPolicyTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FirewallPolicyInput`<sup>Optional</sup> <a name="FirewallPolicyInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyInput"></a>

```go
func FirewallPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallPolicyNameInput`<sup>Optional</sup> <a name="FirewallPolicyNameInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyNameInput"></a>

```go
func FirewallPolicyNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FirewallPolicyName`<sup>Required</sup> <a name="FirewallPolicyName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.firewallPolicyName"></a>

```go
func FirewallPolicyName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallFirewallPolicyConfig <a name="NetworkfirewallFirewallPolicyConfig" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FirewallPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy,
	FirewallPolicyName: *string,
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.firewallPolicy">FirewallPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.firewallPolicyName">FirewallPolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy_name NetworkfirewallFirewallPolicy#firewall_policy_name}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#description NetworkfirewallFirewallPolicy#description}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tags NetworkfirewallFirewallPolicy#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.firewallPolicy"></a>

```go
FirewallPolicy NetworkfirewallFirewallPolicyFirewallPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy">NetworkfirewallFirewallPolicyFirewallPolicy</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy NetworkfirewallFirewallPolicy#firewall_policy}.

---

##### `FirewallPolicyName`<sup>Required</sup> <a name="FirewallPolicyName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.firewallPolicyName"></a>

```go
FirewallPolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#firewall_policy_name NetworkfirewallFirewallPolicy#firewall_policy_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#description NetworkfirewallFirewallPolicy#description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tags NetworkfirewallFirewallPolicy#tags}.

---

### NetworkfirewallFirewallPolicyFirewallPolicy <a name="NetworkfirewallFirewallPolicyFirewallPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyFirewallPolicy {
	StatelessDefaultActions: *[]*string,
	StatelessFragmentDefaultActions: *[]*string,
	EnableTlsSessionHolding: interface{},
	PolicyVariables: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables,
	StatefulDefaultActions: *[]*string,
	StatefulEngineOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions,
	StatefulRuleGroupReferences: interface{},
	StatelessCustomActions: interface{},
	StatelessRuleGroupReferences: interface{},
	TlsInspectionConfigurationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessDefaultActions">StatelessDefaultActions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_default_actions NetworkfirewallFirewallPolicy#stateless_default_actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessFragmentDefaultActions">StatelessFragmentDefaultActions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_fragment_default_actions NetworkfirewallFirewallPolicy#stateless_fragment_default_actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.enableTlsSessionHolding">EnableTlsSessionHolding</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#enable_tls_session_holding NetworkfirewallFirewallPolicy#enable_tls_session_holding}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.policyVariables">PolicyVariables</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#policy_variables NetworkfirewallFirewallPolicy#policy_variables}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulDefaultActions">StatefulDefaultActions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_default_actions NetworkfirewallFirewallPolicy#stateful_default_actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulEngineOptions">StatefulEngineOptions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_engine_options NetworkfirewallFirewallPolicy#stateful_engine_options}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulRuleGroupReferences">StatefulRuleGroupReferences</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_rule_group_references NetworkfirewallFirewallPolicy#stateful_rule_group_references}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessCustomActions">StatelessCustomActions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_custom_actions NetworkfirewallFirewallPolicy#stateless_custom_actions}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessRuleGroupReferences">StatelessRuleGroupReferences</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_rule_group_references NetworkfirewallFirewallPolicy#stateless_rule_group_references}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.tlsInspectionConfigurationArn">TlsInspectionConfigurationArn</a></code> | <code>*string</code> | A resource ARN. |

---

##### `StatelessDefaultActions`<sup>Required</sup> <a name="StatelessDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessDefaultActions"></a>

```go
StatelessDefaultActions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_default_actions NetworkfirewallFirewallPolicy#stateless_default_actions}.

---

##### `StatelessFragmentDefaultActions`<sup>Required</sup> <a name="StatelessFragmentDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessFragmentDefaultActions"></a>

```go
StatelessFragmentDefaultActions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_fragment_default_actions NetworkfirewallFirewallPolicy#stateless_fragment_default_actions}.

---

##### `EnableTlsSessionHolding`<sup>Optional</sup> <a name="EnableTlsSessionHolding" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.enableTlsSessionHolding"></a>

```go
EnableTlsSessionHolding interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#enable_tls_session_holding NetworkfirewallFirewallPolicy#enable_tls_session_holding}.

---

##### `PolicyVariables`<sup>Optional</sup> <a name="PolicyVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.policyVariables"></a>

```go
PolicyVariables NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#policy_variables NetworkfirewallFirewallPolicy#policy_variables}.

---

##### `StatefulDefaultActions`<sup>Optional</sup> <a name="StatefulDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulDefaultActions"></a>

```go
StatefulDefaultActions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_default_actions NetworkfirewallFirewallPolicy#stateful_default_actions}.

---

##### `StatefulEngineOptions`<sup>Optional</sup> <a name="StatefulEngineOptions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulEngineOptions"></a>

```go
StatefulEngineOptions NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_engine_options NetworkfirewallFirewallPolicy#stateful_engine_options}.

---

##### `StatefulRuleGroupReferences`<sup>Optional</sup> <a name="StatefulRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statefulRuleGroupReferences"></a>

```go
StatefulRuleGroupReferences interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateful_rule_group_references NetworkfirewallFirewallPolicy#stateful_rule_group_references}.

---

##### `StatelessCustomActions`<sup>Optional</sup> <a name="StatelessCustomActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessCustomActions"></a>

```go
StatelessCustomActions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_custom_actions NetworkfirewallFirewallPolicy#stateless_custom_actions}.

---

##### `StatelessRuleGroupReferences`<sup>Optional</sup> <a name="StatelessRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.statelessRuleGroupReferences"></a>

```go
StatelessRuleGroupReferences interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stateless_rule_group_references NetworkfirewallFirewallPolicy#stateless_rule_group_references}.

---

##### `TlsInspectionConfigurationArn`<sup>Optional</sup> <a name="TlsInspectionConfigurationArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicy.property.tlsInspectionConfigurationArn"></a>

```go
TlsInspectionConfigurationArn *string
```

- *Type:* *string

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tls_inspection_configuration_arn NetworkfirewallFirewallPolicy#tls_inspection_configuration_arn}

---

### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables {
	RuleVariables: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables.property.ruleVariables">RuleVariables</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_variables NetworkfirewallFirewallPolicy#rule_variables}. |

---

##### `RuleVariables`<sup>Optional</sup> <a name="RuleVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables.property.ruleVariables"></a>

```go
RuleVariables interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_variables NetworkfirewallFirewallPolicy#rule_variables}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables {
	Definition: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables.property.definition">Definition</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#definition NetworkfirewallFirewallPolicy#definition}. |

---

##### `Definition`<sup>Optional</sup> <a name="Definition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariables.property.definition"></a>

```go
Definition *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#definition NetworkfirewallFirewallPolicy#definition}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions {
	FlowTimeouts: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts,
	RuleOrder: *string,
	StreamExceptionPolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.flowTimeouts">FlowTimeouts</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#flow_timeouts NetworkfirewallFirewallPolicy#flow_timeouts}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.ruleOrder">RuleOrder</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_order NetworkfirewallFirewallPolicy#rule_order}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.streamExceptionPolicy">StreamExceptionPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stream_exception_policy NetworkfirewallFirewallPolicy#stream_exception_policy}. |

---

##### `FlowTimeouts`<sup>Optional</sup> <a name="FlowTimeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.flowTimeouts"></a>

```go
FlowTimeouts NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#flow_timeouts NetworkfirewallFirewallPolicy#flow_timeouts}.

---

##### `RuleOrder`<sup>Optional</sup> <a name="RuleOrder" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.ruleOrder"></a>

```go
RuleOrder *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#rule_order NetworkfirewallFirewallPolicy#rule_order}.

---

##### `StreamExceptionPolicy`<sup>Optional</sup> <a name="StreamExceptionPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions.property.streamExceptionPolicy"></a>

```go
StreamExceptionPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#stream_exception_policy NetworkfirewallFirewallPolicy#stream_exception_policy}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts {
	TcpIdleTimeoutSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts.property.tcpIdleTimeoutSeconds">TcpIdleTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tcp_idle_timeout_seconds NetworkfirewallFirewallPolicy#tcp_idle_timeout_seconds}. |

---

##### `TcpIdleTimeoutSeconds`<sup>Optional</sup> <a name="TcpIdleTimeoutSeconds" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts.property.tcpIdleTimeoutSeconds"></a>

```go
TcpIdleTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#tcp_idle_timeout_seconds NetworkfirewallFirewallPolicy#tcp_idle_timeout_seconds}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences {
	DeepThreatInspection: interface{},
	Override: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride,
	Priority: *f64,
	ResourceArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.deepThreatInspection">DeepThreatInspection</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#deep_threat_inspection NetworkfirewallFirewallPolicy#deep_threat_inspection}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.override">Override</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#override NetworkfirewallFirewallPolicy#override}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | A resource ARN. |

---

##### `DeepThreatInspection`<sup>Optional</sup> <a name="DeepThreatInspection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.deepThreatInspection"></a>

```go
DeepThreatInspection interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#deep_threat_inspection NetworkfirewallFirewallPolicy#deep_threat_inspection}.

---

##### `Override`<sup>Optional</sup> <a name="Override" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.override"></a>

```go
Override NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#override NetworkfirewallFirewallPolicy#override}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}.

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferences.property.resourceArn"></a>

```go
ResourceArn *string
```

- *Type:* *string

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#resource_arn NetworkfirewallFirewallPolicy#resource_arn}

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride {
	Action: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action NetworkfirewallFirewallPolicy#action}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action NetworkfirewallFirewallPolicy#action}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions {
	ActionDefinition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition,
	ActionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.property.actionDefinition">ActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action_definition NetworkfirewallFirewallPolicy#action_definition}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.property.actionName">ActionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action_name NetworkfirewallFirewallPolicy#action_name}. |

---

##### `ActionDefinition`<sup>Optional</sup> <a name="ActionDefinition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.property.actionDefinition"></a>

```go
ActionDefinition NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action_definition NetworkfirewallFirewallPolicy#action_definition}.

---

##### `ActionName`<sup>Optional</sup> <a name="ActionName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActions.property.actionName"></a>

```go
ActionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#action_name NetworkfirewallFirewallPolicy#action_name}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition {
	PublishMetricAction: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition.property.publishMetricAction">PublishMetricAction</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}. |

---

##### `PublishMetricAction`<sup>Optional</sup> <a name="PublishMetricAction" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition.property.publishMetricAction"></a>

```go
PublishMetricAction NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#publish_metric_action NetworkfirewallFirewallPolicy#publish_metric_action}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction {
	Dimensions: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction.property.dimensions">Dimensions</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#dimensions NetworkfirewallFirewallPolicy#dimensions}. |

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction.property.dimensions"></a>

```go
Dimensions interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#dimensions NetworkfirewallFirewallPolicy#dimensions}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions {
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#value NetworkfirewallFirewallPolicy#value}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensions.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#value NetworkfirewallFirewallPolicy#value}.

---

### NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences {
	Priority: *f64,
	ResourceArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | A resource ARN. |

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#priority NetworkfirewallFirewallPolicy#priority}.

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferences.property.resourceArn"></a>

```go
ResourceArn *string
```

- *Type:* *string

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#resource_arn NetworkfirewallFirewallPolicy#resource_arn}

---

### NetworkfirewallFirewallPolicyTags <a name="NetworkfirewallFirewallPolicyTags" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

&networkfirewallfirewallpolicy.NetworkfirewallFirewallPolicyTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#key NetworkfirewallFirewallPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#value NetworkfirewallFirewallPolicy#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#key NetworkfirewallFirewallPolicy#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/networkfirewall_firewall_policy#value NetworkfirewallFirewallPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallFirewallPolicyFirewallPolicyOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallFirewallPolicyFirewallPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putPolicyVariables">PutPolicyVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulEngineOptions">PutStatefulEngineOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulRuleGroupReferences">PutStatefulRuleGroupReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessCustomActions">PutStatelessCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessRuleGroupReferences">PutStatelessRuleGroupReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetEnableTlsSessionHolding">ResetEnableTlsSessionHolding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetPolicyVariables">ResetPolicyVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulDefaultActions">ResetStatefulDefaultActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulEngineOptions">ResetStatefulEngineOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulRuleGroupReferences">ResetStatefulRuleGroupReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatelessCustomActions">ResetStatelessCustomActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatelessRuleGroupReferences">ResetStatelessRuleGroupReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetTlsInspectionConfigurationArn">ResetTlsInspectionConfigurationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPolicyVariables` <a name="PutPolicyVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putPolicyVariables"></a>

```go
func PutPolicyVariables(value NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putPolicyVariables.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariables</a>

---

##### `PutStatefulEngineOptions` <a name="PutStatefulEngineOptions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulEngineOptions"></a>

```go
func PutStatefulEngineOptions(value NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulEngineOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptions</a>

---

##### `PutStatefulRuleGroupReferences` <a name="PutStatefulRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulRuleGroupReferences"></a>

```go
func PutStatefulRuleGroupReferences(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatefulRuleGroupReferences.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStatelessCustomActions` <a name="PutStatelessCustomActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessCustomActions"></a>

```go
func PutStatelessCustomActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessCustomActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStatelessRuleGroupReferences` <a name="PutStatelessRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessRuleGroupReferences"></a>

```go
func PutStatelessRuleGroupReferences(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.putStatelessRuleGroupReferences.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnableTlsSessionHolding` <a name="ResetEnableTlsSessionHolding" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetEnableTlsSessionHolding"></a>

```go
func ResetEnableTlsSessionHolding()
```

##### `ResetPolicyVariables` <a name="ResetPolicyVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetPolicyVariables"></a>

```go
func ResetPolicyVariables()
```

##### `ResetStatefulDefaultActions` <a name="ResetStatefulDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulDefaultActions"></a>

```go
func ResetStatefulDefaultActions()
```

##### `ResetStatefulEngineOptions` <a name="ResetStatefulEngineOptions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulEngineOptions"></a>

```go
func ResetStatefulEngineOptions()
```

##### `ResetStatefulRuleGroupReferences` <a name="ResetStatefulRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatefulRuleGroupReferences"></a>

```go
func ResetStatefulRuleGroupReferences()
```

##### `ResetStatelessCustomActions` <a name="ResetStatelessCustomActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatelessCustomActions"></a>

```go
func ResetStatelessCustomActions()
```

##### `ResetStatelessRuleGroupReferences` <a name="ResetStatelessRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetStatelessRuleGroupReferences"></a>

```go
func ResetStatelessRuleGroupReferences()
```

##### `ResetTlsInspectionConfigurationArn` <a name="ResetTlsInspectionConfigurationArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.resetTlsInspectionConfigurationArn"></a>

```go
func ResetTlsInspectionConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariables">PolicyVariables</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptions">StatefulEngineOptions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferences">StatefulRuleGroupReferences</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActions">StatelessCustomActions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferences">StatelessRuleGroupReferences</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHoldingInput">EnableTlsSessionHoldingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariablesInput">PolicyVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActionsInput">StatefulDefaultActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptionsInput">StatefulEngineOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferencesInput">StatefulRuleGroupReferencesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActionsInput">StatelessCustomActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActionsInput">StatelessDefaultActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActionsInput">StatelessFragmentDefaultActionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferencesInput">StatelessRuleGroupReferencesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArnInput">TlsInspectionConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHolding">EnableTlsSessionHolding</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActions">StatefulDefaultActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActions">StatelessDefaultActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActions">StatelessFragmentDefaultActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArn">TlsInspectionConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyVariables`<sup>Required</sup> <a name="PolicyVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariables"></a>

```go
func PolicyVariables() NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference</a>

---

##### `StatefulEngineOptions`<sup>Required</sup> <a name="StatefulEngineOptions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptions"></a>

```go
func StatefulEngineOptions() NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference</a>

---

##### `StatefulRuleGroupReferences`<sup>Required</sup> <a name="StatefulRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferences"></a>

```go
func StatefulRuleGroupReferences() NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList</a>

---

##### `StatelessCustomActions`<sup>Required</sup> <a name="StatelessCustomActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActions"></a>

```go
func StatelessCustomActions() NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList</a>

---

##### `StatelessRuleGroupReferences`<sup>Required</sup> <a name="StatelessRuleGroupReferences" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferences"></a>

```go
func StatelessRuleGroupReferences() NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList</a>

---

##### `EnableTlsSessionHoldingInput`<sup>Optional</sup> <a name="EnableTlsSessionHoldingInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHoldingInput"></a>

```go
func EnableTlsSessionHoldingInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyVariablesInput`<sup>Optional</sup> <a name="PolicyVariablesInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.policyVariablesInput"></a>

```go
func PolicyVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `StatefulDefaultActionsInput`<sup>Optional</sup> <a name="StatefulDefaultActionsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActionsInput"></a>

```go
func StatefulDefaultActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatefulEngineOptionsInput`<sup>Optional</sup> <a name="StatefulEngineOptionsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulEngineOptionsInput"></a>

```go
func StatefulEngineOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `StatefulRuleGroupReferencesInput`<sup>Optional</sup> <a name="StatefulRuleGroupReferencesInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulRuleGroupReferencesInput"></a>

```go
func StatefulRuleGroupReferencesInput() interface{}
```

- *Type:* interface{}

---

##### `StatelessCustomActionsInput`<sup>Optional</sup> <a name="StatelessCustomActionsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessCustomActionsInput"></a>

```go
func StatelessCustomActionsInput() interface{}
```

- *Type:* interface{}

---

##### `StatelessDefaultActionsInput`<sup>Optional</sup> <a name="StatelessDefaultActionsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActionsInput"></a>

```go
func StatelessDefaultActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatelessFragmentDefaultActionsInput`<sup>Optional</sup> <a name="StatelessFragmentDefaultActionsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActionsInput"></a>

```go
func StatelessFragmentDefaultActionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatelessRuleGroupReferencesInput`<sup>Optional</sup> <a name="StatelessRuleGroupReferencesInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessRuleGroupReferencesInput"></a>

```go
func StatelessRuleGroupReferencesInput() interface{}
```

- *Type:* interface{}

---

##### `TlsInspectionConfigurationArnInput`<sup>Optional</sup> <a name="TlsInspectionConfigurationArnInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArnInput"></a>

```go
func TlsInspectionConfigurationArnInput() *string
```

- *Type:* *string

---

##### `EnableTlsSessionHolding`<sup>Required</sup> <a name="EnableTlsSessionHolding" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.enableTlsSessionHolding"></a>

```go
func EnableTlsSessionHolding() interface{}
```

- *Type:* interface{}

---

##### `StatefulDefaultActions`<sup>Required</sup> <a name="StatefulDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statefulDefaultActions"></a>

```go
func StatefulDefaultActions() *[]*string
```

- *Type:* *[]*string

---

##### `StatelessDefaultActions`<sup>Required</sup> <a name="StatelessDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessDefaultActions"></a>

```go
func StatelessDefaultActions() *[]*string
```

- *Type:* *[]*string

---

##### `StatelessFragmentDefaultActions`<sup>Required</sup> <a name="StatelessFragmentDefaultActions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.statelessFragmentDefaultActions"></a>

```go
func StatelessFragmentDefaultActions() *[]*string
```

- *Type:* *[]*string

---

##### `TlsInspectionConfigurationArn`<sup>Required</sup> <a name="TlsInspectionConfigurationArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.tlsInspectionConfigurationArn"></a>

```go
func TlsInspectionConfigurationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.putRuleVariables">PutRuleVariables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resetRuleVariables">ResetRuleVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRuleVariables` <a name="PutRuleVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.putRuleVariables"></a>

```go
func PutRuleVariables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.putRuleVariables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRuleVariables` <a name="ResetRuleVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.resetRuleVariables"></a>

```go
func ResetRuleVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariables">RuleVariables</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariablesInput">RuleVariablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleVariables`<sup>Required</sup> <a name="RuleVariables" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariables"></a>

```go
func RuleVariables() NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap">NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap</a>

---

##### `RuleVariablesInput`<sup>Optional</sup> <a name="RuleVariablesInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.ruleVariablesInput"></a>

```go
func RuleVariablesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.get"></a>

```go
func Get(key *string) NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resetDefinition">ResetDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinition` <a name="ResetDefinition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.resetDefinition"></a>

```go
func ResetDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definition">Definition</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definitionInput"></a>

```go
func DefinitionInput() *[]*string
```

- *Type:* *[]*string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.definition"></a>

```go
func Definition() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyPolicyVariablesRuleVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resetTcpIdleTimeoutSeconds">ResetTcpIdleTimeoutSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTcpIdleTimeoutSeconds` <a name="ResetTcpIdleTimeoutSeconds" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.resetTcpIdleTimeoutSeconds"></a>

```go
func ResetTcpIdleTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSecondsInput">TcpIdleTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSeconds">TcpIdleTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TcpIdleTimeoutSecondsInput`<sup>Optional</sup> <a name="TcpIdleTimeoutSecondsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSecondsInput"></a>

```go
func TcpIdleTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `TcpIdleTimeoutSeconds`<sup>Required</sup> <a name="TcpIdleTimeoutSeconds" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.tcpIdleTimeoutSeconds"></a>

```go
func TcpIdleTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.putFlowTimeouts">PutFlowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetFlowTimeouts">ResetFlowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetRuleOrder">ResetRuleOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetStreamExceptionPolicy">ResetStreamExceptionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFlowTimeouts` <a name="PutFlowTimeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.putFlowTimeouts"></a>

```go
func PutFlowTimeouts(value NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.putFlowTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeouts</a>

---

##### `ResetFlowTimeouts` <a name="ResetFlowTimeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetFlowTimeouts"></a>

```go
func ResetFlowTimeouts()
```

##### `ResetRuleOrder` <a name="ResetRuleOrder" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetRuleOrder"></a>

```go
func ResetRuleOrder()
```

##### `ResetStreamExceptionPolicy` <a name="ResetStreamExceptionPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.resetStreamExceptionPolicy"></a>

```go
func ResetStreamExceptionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeouts">FlowTimeouts</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeoutsInput">FlowTimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrderInput">RuleOrderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicyInput">StreamExceptionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrder">RuleOrder</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicy">StreamExceptionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FlowTimeouts`<sup>Required</sup> <a name="FlowTimeouts" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeouts"></a>

```go
func FlowTimeouts() NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsFlowTimeoutsOutputReference</a>

---

##### `FlowTimeoutsInput`<sup>Optional</sup> <a name="FlowTimeoutsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.flowTimeoutsInput"></a>

```go
func FlowTimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `RuleOrderInput`<sup>Optional</sup> <a name="RuleOrderInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrderInput"></a>

```go
func RuleOrderInput() *string
```

- *Type:* *string

---

##### `StreamExceptionPolicyInput`<sup>Optional</sup> <a name="StreamExceptionPolicyInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicyInput"></a>

```go
func StreamExceptionPolicyInput() *string
```

- *Type:* *string

---

##### `RuleOrder`<sup>Required</sup> <a name="RuleOrder" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.ruleOrder"></a>

```go
func RuleOrder() *string
```

- *Type:* *string

---

##### `StreamExceptionPolicy`<sup>Required</sup> <a name="StreamExceptionPolicy" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.streamExceptionPolicy"></a>

```go
func StreamExceptionPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulEngineOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.get"></a>

```go
func Get(index *f64) NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.putOverride">PutOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetDeepThreatInspection">ResetDeepThreatInspection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetOverride">ResetOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOverride` <a name="PutOverride" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.putOverride"></a>

```go
func PutOverride(value NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.putOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverride</a>

---

##### `ResetDeepThreatInspection` <a name="ResetDeepThreatInspection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetDeepThreatInspection"></a>

```go
func ResetDeepThreatInspection()
```

##### `ResetOverride` <a name="ResetOverride" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetOverride"></a>

```go
func ResetOverride()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.resetResourceArn"></a>

```go
func ResetResourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.override">Override</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspectionInput">DeepThreatInspectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.overrideInput">OverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspection">DeepThreatInspection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Override`<sup>Required</sup> <a name="Override" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.override"></a>

```go
func Override() NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference</a>

---

##### `DeepThreatInspectionInput`<sup>Optional</sup> <a name="DeepThreatInspectionInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspectionInput"></a>

```go
func DeepThreatInspectionInput() interface{}
```

- *Type:* interface{}

---

##### `OverrideInput`<sup>Optional</sup> <a name="OverrideInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.overrideInput"></a>

```go
func OverrideInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArnInput"></a>

```go
func ResourceArnInput() *string
```

- *Type:* *string

---

##### `DeepThreatInspection`<sup>Required</sup> <a name="DeepThreatInspection" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.deepThreatInspection"></a>

```go
func DeepThreatInspection() interface{}
```

- *Type:* interface{}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.resetAction"></a>

```go
func ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatefulRuleGroupReferencesOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.putPublishMetricAction">PutPublishMetricAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resetPublishMetricAction">ResetPublishMetricAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPublishMetricAction` <a name="PutPublishMetricAction" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.putPublishMetricAction"></a>

```go
func PutPublishMetricAction(value NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.putPublishMetricAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricAction</a>

---

##### `ResetPublishMetricAction` <a name="ResetPublishMetricAction" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.resetPublishMetricAction"></a>

```go
func ResetPublishMetricAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricAction">PublishMetricAction</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricActionInput">PublishMetricActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublishMetricAction`<sup>Required</sup> <a name="PublishMetricAction" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricAction"></a>

```go
func PublishMetricAction() NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference</a>

---

##### `PublishMetricActionInput`<sup>Optional</sup> <a name="PublishMetricActionInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.publishMetricActionInput"></a>

```go
func PublishMetricActionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.get"></a>

```go
func Get(index *f64) NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.putDimensions">PutDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resetDimensions">ResetDimensions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimensions` <a name="PutDimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.putDimensions"></a>

```go
func PutDimensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.putDimensions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.resetDimensions"></a>

```go
func ResetDimensions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensionsInput">DimensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensions"></a>

```go
func Dimensions() NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionDimensionsList</a>

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.dimensionsInput"></a>

```go
func DimensionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionPublishMetricActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.get"></a>

```go
func Get(index *f64) NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.putActionDefinition">PutActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resetActionDefinition">ResetActionDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resetActionName">ResetActionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActionDefinition` <a name="PutActionDefinition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.putActionDefinition"></a>

```go
func PutActionDefinition(value NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.putActionDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinition</a>

---

##### `ResetActionDefinition` <a name="ResetActionDefinition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resetActionDefinition"></a>

```go
func ResetActionDefinition()
```

##### `ResetActionName` <a name="ResetActionName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.resetActionName"></a>

```go
func ResetActionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinition">ActionDefinition</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinitionInput">ActionDefinitionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionNameInput">ActionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionName">ActionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionDefinition`<sup>Required</sup> <a name="ActionDefinition" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinition"></a>

```go
func ActionDefinition() NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference">NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsActionDefinitionOutputReference</a>

---

##### `ActionDefinitionInput`<sup>Optional</sup> <a name="ActionDefinitionInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionDefinitionInput"></a>

```go
func ActionDefinitionInput() interface{}
```

- *Type:* interface{}

---

##### `ActionNameInput`<sup>Optional</sup> <a name="ActionNameInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionNameInput"></a>

```go
func ActionNameInput() *string
```

- *Type:* *string

---

##### `ActionName`<sup>Required</sup> <a name="ActionName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.actionName"></a>

```go
func ActionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessCustomActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.get"></a>

```go
func Get(index *f64) NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference <a name="NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPriority` <a name="ResetPriority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.resetResourceArn"></a>

```go
func ResetResourceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArnInput"></a>

```go
func ResourceArnInput() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyFirewallPolicyStatelessRuleGroupReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyTagsList <a name="NetworkfirewallFirewallPolicyTagsList" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallFirewallPolicyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.get"></a>

```go
func Get(index *f64) NetworkfirewallFirewallPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallFirewallPolicyTagsOutputReference <a name="NetworkfirewallFirewallPolicyTagsOutputReference" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallfirewallpolicy"

networkfirewallfirewallpolicy.NewNetworkfirewallFirewallPolicyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallFirewallPolicyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallFirewallPolicy.NetworkfirewallFirewallPolicyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



