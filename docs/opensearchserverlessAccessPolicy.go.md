# `opensearchserverlessAccessPolicy` Submodule <a name="`opensearchserverlessAccessPolicy` Submodule" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpensearchserverlessAccessPolicy <a name="OpensearchserverlessAccessPolicy" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchserverless_access_policy awscc_opensearchserverless_access_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserverlessaccesspolicy"

opensearchserverlessaccesspolicy.NewOpensearchserverlessAccessPolicy(scope Construct, id *string, config OpensearchserverlessAccessPolicyConfig) OpensearchserverlessAccessPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig">OpensearchserverlessAccessPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig">OpensearchserverlessAccessPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.resetDescription"></a>

```go
func ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OpensearchserverlessAccessPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserverlessaccesspolicy"

opensearchserverlessaccesspolicy.OpensearchserverlessAccessPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserverlessaccesspolicy"

opensearchserverlessaccesspolicy.OpensearchserverlessAccessPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserverlessaccesspolicy"

opensearchserverlessaccesspolicy.OpensearchserverlessAccessPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserverlessaccesspolicy"

opensearchserverlessaccesspolicy.OpensearchserverlessAccessPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OpensearchserverlessAccessPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpensearchserverlessAccessPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpensearchserverlessAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchserverless_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OpensearchserverlessAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpensearchserverlessAccessPolicyConfig <a name="OpensearchserverlessAccessPolicyConfig" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/opensearchserverlessaccesspolicy"

&opensearchserverlessaccesspolicy.OpensearchserverlessAccessPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Policy: *string,
	Type: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the policy. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.policy">Policy</a></code> | <code>*string</code> | The JSON policy document that is the content for the policy. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.type">Type</a></code> | <code>*string</code> | The possible types for the access policy. |
| <code><a href="#@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.description">Description</a></code> | <code>*string</code> | The description of the policy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchserverless_access_policy#name OpensearchserverlessAccessPolicy#name}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

The JSON policy document that is the content for the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchserverless_access_policy#policy OpensearchserverlessAccessPolicy#policy}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The possible types for the access policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchserverless_access_policy#type OpensearchserverlessAccessPolicy#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.opensearchserverlessAccessPolicy.OpensearchserverlessAccessPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/opensearchserverless_access_policy#description OpensearchserverlessAccessPolicy#description}

---



