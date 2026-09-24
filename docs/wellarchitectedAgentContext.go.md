# `wellarchitectedAgentContext` Submodule <a name="`wellarchitectedAgentContext` Submodule" id="@cdktn/provider-awscc.wellarchitectedAgentContext"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WellarchitectedAgentContext <a name="WellarchitectedAgentContext" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context awscc_wellarchitected_agent_context}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentcontext"

wellarchitectedagentcontext.NewWellarchitectedAgentContext(scope Construct, id *string, config WellarchitectedAgentContextConfig) WellarchitectedAgentContext
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig">WellarchitectedAgentContextConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig">WellarchitectedAgentContextConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WellarchitectedAgentContext resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentcontext"

wellarchitectedagentcontext.WellarchitectedAgentContext_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentcontext"

wellarchitectedagentcontext.WellarchitectedAgentContext_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentcontext"

wellarchitectedagentcontext.WellarchitectedAgentContext_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentcontext"

wellarchitectedagentcontext.WellarchitectedAgentContext_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WellarchitectedAgentContext resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WellarchitectedAgentContext to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WellarchitectedAgentContext that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WellarchitectedAgentContext to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.agentContextId">AgentContextId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.applicationType">ApplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.criticality">Criticality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.lastModifiedAt">LastModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.lastModifiedBy">LastModifiedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.contextTypeInput">ContextTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.profileArnInput">ProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.contextType">ContextType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.profileArn">ProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.title">Title</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentContextId`<sup>Required</sup> <a name="AgentContextId" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.agentContextId"></a>

```go
func AgentContextId() *string
```

- *Type:* *string

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.applicationType"></a>

```go
func ApplicationType() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Criticality`<sup>Required</sup> <a name="Criticality" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.criticality"></a>

```go
func Criticality() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedAt`<sup>Required</sup> <a name="LastModifiedAt" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.lastModifiedAt"></a>

```go
func LastModifiedAt() *string
```

- *Type:* *string

---

##### `LastModifiedBy`<sup>Required</sup> <a name="LastModifiedBy" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.lastModifiedBy"></a>

```go
func LastModifiedBy() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContextTypeInput`<sup>Optional</sup> <a name="ContextTypeInput" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.contextTypeInput"></a>

```go
func ContextTypeInput() *string
```

- *Type:* *string

---

##### `ProfileArnInput`<sup>Optional</sup> <a name="ProfileArnInput" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.profileArnInput"></a>

```go
func ProfileArnInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContextType`<sup>Required</sup> <a name="ContextType" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.contextType"></a>

```go
func ContextType() *string
```

- *Type:* *string

---

##### `ProfileArn`<sup>Required</sup> <a name="ProfileArn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.profileArn"></a>

```go
func ProfileArn() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContext.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WellarchitectedAgentContextConfig <a name="WellarchitectedAgentContextConfig" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedagentcontext"

&wellarchitectedagentcontext.WellarchitectedAgentContextConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Content: *string,
	ContextType: *string,
	ProfileArn: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.content">Content</a></code> | <code>*string</code> | The free-form content of the Agent Context, supplied as an arbitrary JSON object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.contextType">ContextType</a></code> | <code>*string</code> | The type of the Agent Context. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.profileArn">ProfileArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the parent Agent Profile that owns this context. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.title">Title</a></code> | <code>*string</code> | The title of the Agent Context. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

The free-form content of the Agent Context, supplied as an arbitrary JSON object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#content WellarchitectedAgentContext#content}

---

##### `ContextType`<sup>Required</sup> <a name="ContextType" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.contextType"></a>

```go
ContextType *string
```

- *Type:* *string

The type of the Agent Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#context_type WellarchitectedAgentContext#context_type}

---

##### `ProfileArn`<sup>Required</sup> <a name="ProfileArn" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.profileArn"></a>

```go
ProfileArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the parent Agent Profile that owns this context.

Pass `!Ref` of the parent AWS::WellArchitected::AgentProfile to flow its ARN here.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#profile_arn WellarchitectedAgentContext#profile_arn}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.wellarchitectedAgentContext.WellarchitectedAgentContextConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

The title of the Agent Context.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/wellarchitected_agent_context#title WellarchitectedAgentContext#title}

---



