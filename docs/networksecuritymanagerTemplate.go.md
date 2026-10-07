# `networksecuritymanagerTemplate` Submodule <a name="`networksecuritymanagerTemplate` Submodule" id="@cdktn/provider-awscc.networksecuritymanagerTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerTemplate <a name="NetworksecuritymanagerTemplate" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template awscc_networksecuritymanager_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagertemplate"

networksecuritymanagertemplate.NewNetworksecuritymanagerTemplate(scope Construct, id *string, config NetworksecuritymanagerTemplateConfig) NetworksecuritymanagerTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig">NetworksecuritymanagerTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig">NetworksecuritymanagerTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putAssociatedRuleList">PutAssociatedRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetAssociatedRuleList">ResetAssociatedRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetFirewallType">ResetFirewallType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetTemplateDescription">ResetTemplateDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssociatedRuleList` <a name="PutAssociatedRuleList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putAssociatedRuleList"></a>

```go
func PutAssociatedRuleList(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putAssociatedRuleList.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAssociatedRuleList` <a name="ResetAssociatedRuleList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetAssociatedRuleList"></a>

```go
func ResetAssociatedRuleList()
```

##### `ResetFirewallType` <a name="ResetFirewallType" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetFirewallType"></a>

```go
func ResetFirewallType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTemplateDescription` <a name="ResetTemplateDescription" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.resetTemplateDescription"></a>

```go
func ResetTemplateDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagertemplate"

networksecuritymanagertemplate.NetworksecuritymanagerTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagertemplate"

networksecuritymanagertemplate.NetworksecuritymanagerTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagertemplate"

networksecuritymanagertemplate.NetworksecuritymanagerTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagertemplate"

networksecuritymanagertemplate.NetworksecuritymanagerTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworksecuritymanagerTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworksecuritymanagerTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworksecuritymanagerTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.associatedRuleList">AssociatedRuleList</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList">NetworksecuritymanagerTemplateAssociatedRuleListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList">NetworksecuritymanagerTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateArn">TemplateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateId">TemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.associatedRuleListInput">AssociatedRuleListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.firewallTypeInput">FirewallTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateDescriptionInput">TemplateDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateNameInput">TemplateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.firewallType">FirewallType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateDescription">TemplateDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateName">TemplateName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociatedRuleList`<sup>Required</sup> <a name="AssociatedRuleList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.associatedRuleList"></a>

```go
func AssociatedRuleList() NetworksecuritymanagerTemplateAssociatedRuleListStructList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList">NetworksecuritymanagerTemplateAssociatedRuleListStructList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tags"></a>

```go
func Tags() NetworksecuritymanagerTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList">NetworksecuritymanagerTemplateTagsList</a>

---

##### `TemplateArn`<sup>Required</sup> <a name="TemplateArn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateArn"></a>

```go
func TemplateArn() *string
```

- *Type:* *string

---

##### `TemplateId`<sup>Required</sup> <a name="TemplateId" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateId"></a>

```go
func TemplateId() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `AssociatedRuleListInput`<sup>Optional</sup> <a name="AssociatedRuleListInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.associatedRuleListInput"></a>

```go
func AssociatedRuleListInput() interface{}
```

- *Type:* interface{}

---

##### `FirewallTypeInput`<sup>Optional</sup> <a name="FirewallTypeInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.firewallTypeInput"></a>

```go
func FirewallTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TemplateDescriptionInput`<sup>Optional</sup> <a name="TemplateDescriptionInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateDescriptionInput"></a>

```go
func TemplateDescriptionInput() *string
```

- *Type:* *string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateNameInput"></a>

```go
func TemplateNameInput() *string
```

- *Type:* *string

---

##### `FirewallType`<sup>Required</sup> <a name="FirewallType" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.firewallType"></a>

```go
func FirewallType() *string
```

- *Type:* *string

---

##### `TemplateDescription`<sup>Required</sup> <a name="TemplateDescription" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateDescription"></a>

```go
func TemplateDescription() *string
```

- *Type:* *string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.templateName"></a>

```go
func TemplateName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerTemplateAssociatedRuleListStruct <a name="NetworksecuritymanagerTemplateAssociatedRuleListStruct" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagertemplate"

&networksecuritymanagertemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct {
	RuleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct.property.ruleArn">RuleArn</a></code> | <code>*string</code> | ARN of the associated rule. |

---

##### `RuleArn`<sup>Optional</sup> <a name="RuleArn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStruct.property.ruleArn"></a>

```go
RuleArn *string
```

- *Type:* *string

ARN of the associated rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#rule_arn NetworksecuritymanagerTemplate#rule_arn}

---

### NetworksecuritymanagerTemplateConfig <a name="NetworksecuritymanagerTemplateConfig" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagertemplate"

&networksecuritymanagertemplate.NetworksecuritymanagerTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	TemplateName: *string,
	AssociatedRuleList: interface{},
	FirewallType: *string,
	Tags: interface{},
	TemplateDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.templateName">TemplateName</a></code> | <code>*string</code> | The name of the template. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.associatedRuleList">AssociatedRuleList</a></code> | <code>interface{}</code> | List of rules associated with this template. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.firewallType">FirewallType</a></code> | <code>*string</code> | The type of firewall. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags associated with the template. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.templateDescription">TemplateDescription</a></code> | <code>*string</code> | A description of the template. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.templateName"></a>

```go
TemplateName *string
```

- *Type:* *string

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#template_name NetworksecuritymanagerTemplate#template_name}

---

##### `AssociatedRuleList`<sup>Optional</sup> <a name="AssociatedRuleList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.associatedRuleList"></a>

```go
AssociatedRuleList interface{}
```

- *Type:* interface{}

List of rules associated with this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#associated_rule_list NetworksecuritymanagerTemplate#associated_rule_list}

---

##### `FirewallType`<sup>Optional</sup> <a name="FirewallType" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.firewallType"></a>

```go
FirewallType *string
```

- *Type:* *string

The type of firewall.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#firewall_type NetworksecuritymanagerTemplate#firewall_type}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags associated with the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#tags NetworksecuritymanagerTemplate#tags}

---

##### `TemplateDescription`<sup>Optional</sup> <a name="TemplateDescription" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateConfig.property.templateDescription"></a>

```go
TemplateDescription *string
```

- *Type:* *string

A description of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#template_description NetworksecuritymanagerTemplate#template_description}

---

### NetworksecuritymanagerTemplateTags <a name="NetworksecuritymanagerTemplateTags" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagertemplate"

&networksecuritymanagertemplate.NetworksecuritymanagerTemplateTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#key NetworksecuritymanagerTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#value NetworksecuritymanagerTemplate#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#key NetworksecuritymanagerTemplate#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/networksecuritymanager_template#value NetworksecuritymanagerTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerTemplateAssociatedRuleListStructList <a name="NetworksecuritymanagerTemplateAssociatedRuleListStructList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagertemplate"

networksecuritymanagertemplate.NewNetworksecuritymanagerTemplateAssociatedRuleListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerTemplateAssociatedRuleListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference <a name="NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagertemplate"

networksecuritymanagertemplate.NewNetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resetRuleArn">ResetRuleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRuleArn` <a name="ResetRuleArn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.resetRuleArn"></a>

```go
func ResetRuleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.ruleArnInput">RuleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.ruleArn">RuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RuleArnInput`<sup>Optional</sup> <a name="RuleArnInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.ruleArnInput"></a>

```go
func RuleArnInput() *string
```

- *Type:* *string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.ruleArn"></a>

```go
func RuleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateAssociatedRuleListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerTemplateTagsList <a name="NetworksecuritymanagerTemplateTagsList" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagertemplate"

networksecuritymanagertemplate.NewNetworksecuritymanagerTemplateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworksecuritymanagerTemplateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.get"></a>

```go
func Get(index *f64) NetworksecuritymanagerTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworksecuritymanagerTemplateTagsOutputReference <a name="NetworksecuritymanagerTemplateTagsOutputReference" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networksecuritymanagertemplate"

networksecuritymanagertemplate.NewNetworksecuritymanagerTemplateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworksecuritymanagerTemplateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networksecuritymanagerTemplate.NetworksecuritymanagerTemplateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



