# `networksecuritymanagerPolicy` Submodule <a name="`networksecuritymanagerPolicy` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerPolicy <a name="NetworksecuritymanagerPolicy" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy awscc_networksecuritymanager_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

networksecuritymanagerpolicy.NewNetworksecuritymanagerPolicy(scope Construct, id *string, config NetworksecuritymanagerPolicyConfig) NetworksecuritymanagerPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig">NetworksecuritymanagerPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig">NetworksecuritymanagerPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList">PutAssociatedTemplateAndRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration">PutPolicyConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetAssociatedTemplateAndRuleList">ResetAssociatedTemplateAndRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetPolicyDescription">ResetPolicyDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssociatedTemplateAndRuleList` <a name="PutAssociatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList"></a>

```go
func PutAssociatedTemplateAndRuleList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putAssociatedTemplateAndRuleList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPolicyConfiguration` <a name="PutPolicyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration"></a>

```go
func PutPolicyConfiguration(value NetworksecuritymanagerPolicyPolicyConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putPolicyConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssociatedTemplateAndRuleList` <a name="ResetAssociatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetAssociatedTemplateAndRuleList"></a>

```go
func ResetAssociatedTemplateAndRuleList()
```

##### `ResetPolicyDescription` <a name="ResetPolicyDescription" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetPolicyDescription"></a>

```go
func ResetPolicyDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

networksecuritymanagerpolicy.NetworksecuritymanagerPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

networksecuritymanagerpolicy.NetworksecuritymanagerPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

networksecuritymanagerpolicy.NetworksecuritymanagerPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

networksecuritymanagerpolicy.NetworksecuritymanagerPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworksecuritymanagerPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworksecuritymanagerPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworksecuritymanagerPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleList">AssociatedTemplateAndRuleList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyArn">PolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfiguration">PolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList">NetworksecuritymanagerPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleListInput">AssociatedTemplateAndRuleListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput">FirewallTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfigurationInput">PolicyConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescriptionInput">PolicyDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyNameInput">PolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType">FirewallType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescription">PolicyDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyName">PolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedTemplateAndRuleList`<sup>Required</sup> <a name="AssociatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleList"></a>

```go
func AssociatedTemplateAndRuleList() NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList">NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyArn"></a>

```go
func PolicyArn() *string
```

- *Type:* *string

---

##### `PolicyConfiguration`<sup>Required</sup> <a name="PolicyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfiguration"></a>

```go
func PolicyConfiguration() NetworksecuritymanagerPolicyPolicyConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationOutputReference</a>

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tags"></a>

```go
func Tags() NetworksecuritymanagerPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList">NetworksecuritymanagerPolicyTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `AssociatedTemplateAndRuleListInput`<sup>Optional</sup> <a name="AssociatedTemplateAndRuleListInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.associatedTemplateAndRuleListInput"></a>

```go
func AssociatedTemplateAndRuleListInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallTypeInput`<sup>Optional</sup> <a name="FirewallTypeInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallTypeInput"></a>

```go
func FirewallTypeInput() *string
```

- *Type:* *string

---

##### `PolicyConfigurationInput`<sup>Optional</sup> <a name="PolicyConfigurationInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyConfigurationInput"></a>

```go
func PolicyConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyDescriptionInput`<sup>Optional</sup> <a name="PolicyDescriptionInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescriptionInput"></a>

```go
func PolicyDescriptionInput() *string
```

- *Type:* *string

---

##### `PolicyNameInput`<sup>Optional</sup> <a name="PolicyNameInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyNameInput"></a>

```go
func PolicyNameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.firewallType"></a>

```go
func FirewallType() *string
```

- *Type:* *string

---

##### `PolicyDescription`<sup>Required</sup> <a name="PolicyDescription" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyDescription"></a>

```go
func PolicyDescription() *string
```

- *Type:* *string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.policyName"></a>

```go
func PolicyName() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

&networksecuritymanagerpolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct {
	RuleArn: *string,
	TemplateArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.ruleArn">RuleArn</a></code> | <code>*string</code> | ARN of the associated rule. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.templateArn">TemplateArn</a></code> | <code>*string</code> | ARN of the associated template. |

---

##### `RuleArn`<sup>Optional</sup> <a name="RuleArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.ruleArn"></a>

```go
RuleArn *string
```

- *Type:* *string

ARN of the associated rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#rule_arn NetworksecuritymanagerPolicy#rule_arn}

---

##### `TemplateArn`<sup>Optional</sup> <a name="TemplateArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStruct.property.templateArn"></a>

```go
TemplateArn *string
```

- *Type:* *string

ARN of the associated template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#template_arn NetworksecuritymanagerPolicy#template_arn}

---

### NetworksecuritymanagerPolicyConfig <a name="NetworksecuritymanagerPolicyConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

&networksecuritymanagerpolicy.NetworksecuritymanagerPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FirewallType: *string,
	PolicyConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration,
	PolicyName: *string,
	Priority: *f64,
	AssociatedTemplateAndRuleList: interface{},
	PolicyDescription: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType">FirewallType</a></code> | <code>*string</code> | The type of firewall. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyConfiguration">PolicyConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a></code> | Configuration settings for policy behavior. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyName">PolicyName</a></code> | <code>*string</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority">Priority</a></code> | <code>*f64</code> | The priority of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.associatedTemplateAndRuleList">AssociatedTemplateAndRuleList</a></code> | <code>interface{}</code> | List of templates and rules associated with this policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyDescription">PolicyDescription</a></code> | <code>*string</code> | A description of the policy. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.firewallType"></a>

```go
FirewallType *string
```

- *Type:* *string

The type of firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#firewall_type NetworksecuritymanagerPolicy#firewall_type}

---

##### `PolicyConfiguration`<sup>Required</sup> <a name="PolicyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyConfiguration"></a>

```go
PolicyConfiguration NetworksecuritymanagerPolicyPolicyConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration">NetworksecuritymanagerPolicyPolicyConfiguration</a>

Configuration settings for policy behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_configuration NetworksecuritymanagerPolicy#policy_configuration}

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyName"></a>

```go
PolicyName *string
```

- *Type:* *string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_name NetworksecuritymanagerPolicy#policy_name}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

The priority of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#priority NetworksecuritymanagerPolicy#priority}

---

##### `AssociatedTemplateAndRuleList`<sup>Optional</sup> <a name="AssociatedTemplateAndRuleList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.associatedTemplateAndRuleList"></a>

```go
AssociatedTemplateAndRuleList interface{}
```

- *Type:* interface{}

List of templates and rules associated with this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#associated_template_and_rule_list NetworksecuritymanagerPolicy#associated_template_and_rule_list}

---

##### `PolicyDescription`<sup>Optional</sup> <a name="PolicyDescription" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.policyDescription"></a>

```go
PolicyDescription *string
```

- *Type:* *string

A description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#policy_description NetworksecuritymanagerPolicy#policy_description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#tags NetworksecuritymanagerPolicy#tags}

---

### NetworksecuritymanagerPolicyPolicyConfiguration <a name="NetworksecuritymanagerPolicyPolicyConfiguration" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

&networksecuritymanagerpolicy.NetworksecuritymanagerPolicyPolicyConfiguration {
	RemediationEnabled: interface{},
	ResourcesCleanUp: interface{},
	WafConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.remediationEnabled">RemediationEnabled</a></code> | <code>interface{}</code> | Controls automatic remediation of non-compliant resources. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.resourcesCleanUp">ResourcesCleanUp</a></code> | <code>interface{}</code> | Controls automatic cleanup of unused resources. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.wafConfig">WafConfig</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a></code> | WAF-specific policy settings. Populated only for WAF firewall type policies. |

---

##### `RemediationEnabled`<sup>Optional</sup> <a name="RemediationEnabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.remediationEnabled"></a>

```go
RemediationEnabled interface{}
```

- *Type:* interface{}

Controls automatic remediation of non-compliant resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#remediation_enabled NetworksecuritymanagerPolicy#remediation_enabled}

---

##### `ResourcesCleanUp`<sup>Optional</sup> <a name="ResourcesCleanUp" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.resourcesCleanUp"></a>

```go
ResourcesCleanUp interface{}
```

- *Type:* interface{}

Controls automatic cleanup of unused resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#resources_clean_up NetworksecuritymanagerPolicy#resources_clean_up}

---

##### `WafConfig`<sup>Optional</sup> <a name="WafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfiguration.property.wafConfig"></a>

```go
WafConfig NetworksecuritymanagerPolicyPolicyConfigurationWafConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

WAF-specific policy settings. Populated only for WAF firewall type policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#waf_config NetworksecuritymanagerPolicy#waf_config}

---

### NetworksecuritymanagerPolicyPolicyConfigurationWafConfig <a name="NetworksecuritymanagerPolicyPolicyConfigurationWafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

&networksecuritymanagerpolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig {
	ConflictResolution: *string,
	ExistingCustomerWebAclResolution: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.conflictResolution">ConflictResolution</a></code> | <code>*string</code> | Conflict-resolution strategy applied to AWS WAF policies. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution">ExistingCustomerWebAclResolution</a></code> | <code>*string</code> | Controls how Network Security Manager handles remediation when a resource already has a customer-created WebACL. |

---

##### `ConflictResolution`<sup>Optional</sup> <a name="ConflictResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.conflictResolution"></a>

```go
ConflictResolution *string
```

- *Type:* *string

Conflict-resolution strategy applied to AWS WAF policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#conflict_resolution NetworksecuritymanagerPolicy#conflict_resolution}

---

##### `ExistingCustomerWebAclResolution`<sup>Optional</sup> <a name="ExistingCustomerWebAclResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig.property.existingCustomerWebAclResolution"></a>

```go
ExistingCustomerWebAclResolution *string
```

- *Type:* *string

Controls how Network Security Manager handles remediation when a resource already has a customer-created WebACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#existing_customer_web_acl_resolution NetworksecuritymanagerPolicy#existing_customer_web_acl_resolution}

---

### NetworksecuritymanagerPolicyTags <a name="NetworksecuritymanagerPolicyTags" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

&networksecuritymanagerpolicy.NetworksecuritymanagerPolicyTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#key NetworksecuritymanagerPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#value NetworksecuritymanagerPolicy#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#key NetworksecuritymanagerPolicy#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_policy#value NetworksecuritymanagerPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

networksecuritymanagerpolicy.NewNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference <a name="NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

networksecuritymanagerpolicy.NewNetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetRuleArn">ResetRuleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetTemplateArn">ResetTemplateArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRuleArn` <a name="ResetRuleArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetRuleArn"></a>

```go
func ResetRuleArn()
```

##### `ResetTemplateArn` <a name="ResetTemplateArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.resetTemplateArn"></a>

```go
func ResetTemplateArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArnInput">RuleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArnInput">TemplateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArn">RuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArn">TemplateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleArnInput`<sup>Optional</sup> <a name="RuleArnInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArnInput"></a>

```go
func RuleArnInput() *string
```

- *Type:* *string

---

##### `TemplateArnInput`<sup>Optional</sup> <a name="TemplateArnInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArnInput"></a>

```go
func TemplateArnInput() *string
```

- *Type:* *string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.ruleArn"></a>

```go
func RuleArn() *string
```

- *Type:* *string

---

##### `TemplateArn`<sup>Required</sup> <a name="TemplateArn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.templateArn"></a>

```go
func TemplateArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyAssociatedTemplateAndRuleListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerPolicyPolicyConfigurationOutputReference <a name="NetworksecuritymanagerPolicyPolicyConfigurationOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

networksecuritymanagerpolicy.NewNetworksecuritymanagerPolicyPolicyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworksecuritymanagerPolicyPolicyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig">PutWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetRemediationEnabled">ResetRemediationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetResourcesCleanUp">ResetResourcesCleanUp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetWafConfig">ResetWafConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWafConfig` <a name="PutWafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig"></a>

```go
func PutWafConfig(value NetworksecuritymanagerPolicyPolicyConfigurationWafConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.putWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfig">NetworksecuritymanagerPolicyPolicyConfigurationWafConfig</a>

---

##### `ResetRemediationEnabled` <a name="ResetRemediationEnabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetRemediationEnabled"></a>

```go
func ResetRemediationEnabled()
```

##### `ResetResourcesCleanUp` <a name="ResetResourcesCleanUp" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetResourcesCleanUp"></a>

```go
func ResetResourcesCleanUp()
```

##### `ResetWafConfig` <a name="ResetWafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.resetWafConfig"></a>

```go
func ResetWafConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfig">WafConfig</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabledInput">RemediationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUpInput">ResourcesCleanUpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfigInput">WafConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabled">RemediationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUp">ResourcesCleanUp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WafConfig`<sup>Required</sup> <a name="WafConfig" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfig"></a>

```go
func WafConfig() NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference">NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference</a>

---

##### `RemediationEnabledInput`<sup>Optional</sup> <a name="RemediationEnabledInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabledInput"></a>

```go
func RemediationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ResourcesCleanUpInput`<sup>Optional</sup> <a name="ResourcesCleanUpInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUpInput"></a>

```go
func ResourcesCleanUpInput() interface{}
```

- *Type:* interface{}

---

##### `WafConfigInput`<sup>Optional</sup> <a name="WafConfigInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.wafConfigInput"></a>

```go
func WafConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RemediationEnabled`<sup>Required</sup> <a name="RemediationEnabled" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.remediationEnabled"></a>

```go
func RemediationEnabled() interface{}
```

- *Type:* interface{}

---

##### `ResourcesCleanUp`<sup>Required</sup> <a name="ResourcesCleanUp" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.resourcesCleanUp"></a>

```go
func ResourcesCleanUp() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference <a name="NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

networksecuritymanagerpolicy.NewNetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetConflictResolution">ResetConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetExistingCustomerWebAclResolution">ResetExistingCustomerWebAclResolution</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConflictResolution` <a name="ResetConflictResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetConflictResolution"></a>

```go
func ResetConflictResolution()
```

##### `ResetExistingCustomerWebAclResolution` <a name="ResetExistingCustomerWebAclResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.resetExistingCustomerWebAclResolution"></a>

```go
func ResetExistingCustomerWebAclResolution()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput">ConflictResolutionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput">ExistingCustomerWebAclResolutionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolution">ConflictResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution">ExistingCustomerWebAclResolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConflictResolutionInput`<sup>Optional</sup> <a name="ConflictResolutionInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolutionInput"></a>

```go
func ConflictResolutionInput() *string
```

- *Type:* *string

---

##### `ExistingCustomerWebAclResolutionInput`<sup>Optional</sup> <a name="ExistingCustomerWebAclResolutionInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolutionInput"></a>

```go
func ExistingCustomerWebAclResolutionInput() *string
```

- *Type:* *string

---

##### `ConflictResolution`<sup>Required</sup> <a name="ConflictResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.conflictResolution"></a>

```go
func ConflictResolution() *string
```

- *Type:* *string

---

##### `ExistingCustomerWebAclResolution`<sup>Required</sup> <a name="ExistingCustomerWebAclResolution" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.existingCustomerWebAclResolution"></a>

```go
func ExistingCustomerWebAclResolution() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyPolicyConfigurationWafConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerPolicyTagsList <a name="NetworksecuritymanagerPolicyTagsList" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

networksecuritymanagerpolicy.NewNetworksecuritymanagerPolicyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerPolicyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerPolicyTagsOutputReference <a name="NetworksecuritymanagerPolicyTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagerpolicy"

networksecuritymanagerpolicy.NewNetworksecuritymanagerPolicyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerPolicyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerPolicy.NetworksecuritymanagerPolicyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



