# `ssoPermissionSet` Submodule <a name="`ssoPermissionSet` Submodule" id="@cdktn/provider-awscc.ssoPermissionSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoPermissionSet <a name="SsoPermissionSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set awscc_sso_permission_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

ssopermissionset.NewSsoPermissionSet(scope Construct, id *string, config SsoPermissionSetConfig) SsoPermissionSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig">SsoPermissionSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig">SsoPermissionSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putCustomerManagedPolicyReferences">PutCustomerManagedPolicyReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putPermissionsBoundary">PutPermissionsBoundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetCustomerManagedPolicyReferences">ResetCustomerManagedPolicyReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetInlinePolicy">ResetInlinePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetManagedPolicies">ResetManagedPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetPermissionsBoundary">ResetPermissionsBoundary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetRelayStateType">ResetRelayStateType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetSessionDuration">ResetSessionDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomerManagedPolicyReferences` <a name="PutCustomerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putCustomerManagedPolicyReferences"></a>

```go
func PutCustomerManagedPolicyReferences(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putCustomerManagedPolicyReferences.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPermissionsBoundary` <a name="PutPermissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putPermissionsBoundary"></a>

```go
func PutPermissionsBoundary(value SsoPermissionSetPermissionsBoundary)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putPermissionsBoundary.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomerManagedPolicyReferences` <a name="ResetCustomerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetCustomerManagedPolicyReferences"></a>

```go
func ResetCustomerManagedPolicyReferences()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInlinePolicy` <a name="ResetInlinePolicy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetInlinePolicy"></a>

```go
func ResetInlinePolicy()
```

##### `ResetManagedPolicies` <a name="ResetManagedPolicies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetManagedPolicies"></a>

```go
func ResetManagedPolicies()
```

##### `ResetPermissionsBoundary` <a name="ResetPermissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetPermissionsBoundary"></a>

```go
func ResetPermissionsBoundary()
```

##### `ResetRelayStateType` <a name="ResetRelayStateType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetRelayStateType"></a>

```go
func ResetRelayStateType()
```

##### `ResetSessionDuration` <a name="ResetSessionDuration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetSessionDuration"></a>

```go
func ResetSessionDuration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsoPermissionSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

ssopermissionset.SsoPermissionSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

ssopermissionset.SsoPermissionSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

ssopermissionset.SsoPermissionSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

ssopermissionset.SsoPermissionSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SsoPermissionSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsoPermissionSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsoPermissionSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SsoPermissionSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferences">CustomerManagedPolicyReferences</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList">SsoPermissionSetCustomerManagedPolicyReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundary">PermissionsBoundary</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference">SsoPermissionSetPermissionsBoundaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionSetArn">PermissionSetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList">SsoPermissionSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferencesInput">CustomerManagedPolicyReferencesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicyInput">InlinePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPoliciesInput">ManagedPoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundaryInput">PermissionsBoundaryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateTypeInput">RelayStateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDurationInput">SessionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicy">InlinePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPolicies">ManagedPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateType">RelayStateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDuration">SessionDuration</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomerManagedPolicyReferences`<sup>Required</sup> <a name="CustomerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferences"></a>

```go
func CustomerManagedPolicyReferences() SsoPermissionSetCustomerManagedPolicyReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList">SsoPermissionSetCustomerManagedPolicyReferencesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PermissionsBoundary`<sup>Required</sup> <a name="PermissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundary"></a>

```go
func PermissionsBoundary() SsoPermissionSetPermissionsBoundaryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference">SsoPermissionSetPermissionsBoundaryOutputReference</a>

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionSetArn"></a>

```go
func PermissionSetArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tags"></a>

```go
func Tags() SsoPermissionSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList">SsoPermissionSetTagsList</a>

---

##### `CustomerManagedPolicyReferencesInput`<sup>Optional</sup> <a name="CustomerManagedPolicyReferencesInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.customerManagedPolicyReferencesInput"></a>

```go
func CustomerManagedPolicyReferencesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InlinePolicyInput`<sup>Optional</sup> <a name="InlinePolicyInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicyInput"></a>

```go
func InlinePolicyInput() *string
```

- *Type:* *string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `ManagedPoliciesInput`<sup>Optional</sup> <a name="ManagedPoliciesInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPoliciesInput"></a>

```go
func ManagedPoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PermissionsBoundaryInput`<sup>Optional</sup> <a name="PermissionsBoundaryInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.permissionsBoundaryInput"></a>

```go
func PermissionsBoundaryInput() interface{}
```

- *Type:* interface{}

---

##### `RelayStateTypeInput`<sup>Optional</sup> <a name="RelayStateTypeInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateTypeInput"></a>

```go
func RelayStateTypeInput() *string
```

- *Type:* *string

---

##### `SessionDurationInput`<sup>Optional</sup> <a name="SessionDurationInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDurationInput"></a>

```go
func SessionDurationInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InlinePolicy`<sup>Required</sup> <a name="InlinePolicy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.inlinePolicy"></a>

```go
func InlinePolicy() *string
```

- *Type:* *string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `ManagedPolicies`<sup>Required</sup> <a name="ManagedPolicies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.managedPolicies"></a>

```go
func ManagedPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RelayStateType`<sup>Required</sup> <a name="RelayStateType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.relayStateType"></a>

```go
func RelayStateType() *string
```

- *Type:* *string

---

##### `SessionDuration`<sup>Required</sup> <a name="SessionDuration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.sessionDuration"></a>

```go
func SessionDuration() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoPermissionSetConfig <a name="SsoPermissionSetConfig" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

&ssopermissionset.SsoPermissionSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceArn: *string,
	Name: *string,
	CustomerManagedPolicyReferences: interface{},
	Description: *string,
	InlinePolicy: *string,
	ManagedPolicies: *[]*string,
	PermissionsBoundary: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary,
	RelayStateType: *string,
	SessionDuration: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | The sso instance arn that the permission set is owned. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.name">Name</a></code> | <code>*string</code> | The name you want to assign to this permission set. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.customerManagedPolicyReferences">CustomerManagedPolicyReferences</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#customer_managed_policy_references SsoPermissionSet#customer_managed_policy_references}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.description">Description</a></code> | <code>*string</code> | The permission set description. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.inlinePolicy">InlinePolicy</a></code> | <code>*string</code> | The inline policy to put in permission set. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.managedPolicies">ManagedPolicies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#managed_policies SsoPermissionSet#managed_policies}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.permissionsBoundary">PermissionsBoundary</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#permissions_boundary SsoPermissionSet#permissions_boundary}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.relayStateType">RelayStateType</a></code> | <code>*string</code> | The relay state URL that redirect links to any service in the AWS Management Console. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.sessionDuration">SessionDuration</a></code> | <code>*string</code> | The length of time that a user can be signed in to an AWS account. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#tags SsoPermissionSet#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

The sso instance arn that the permission set is owned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#instance_arn SsoPermissionSet#instance_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name you want to assign to this permission set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}

---

##### `CustomerManagedPolicyReferences`<sup>Optional</sup> <a name="CustomerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.customerManagedPolicyReferences"></a>

```go
CustomerManagedPolicyReferences interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#customer_managed_policy_references SsoPermissionSet#customer_managed_policy_references}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The permission set description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#description SsoPermissionSet#description}

---

##### `InlinePolicy`<sup>Optional</sup> <a name="InlinePolicy" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.inlinePolicy"></a>

```go
InlinePolicy *string
```

- *Type:* *string

The inline policy to put in permission set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#inline_policy SsoPermissionSet#inline_policy}

---

##### `ManagedPolicies`<sup>Optional</sup> <a name="ManagedPolicies" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.managedPolicies"></a>

```go
ManagedPolicies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#managed_policies SsoPermissionSet#managed_policies}.

---

##### `PermissionsBoundary`<sup>Optional</sup> <a name="PermissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.permissionsBoundary"></a>

```go
PermissionsBoundary SsoPermissionSetPermissionsBoundary
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary">SsoPermissionSetPermissionsBoundary</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#permissions_boundary SsoPermissionSet#permissions_boundary}.

---

##### `RelayStateType`<sup>Optional</sup> <a name="RelayStateType" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.relayStateType"></a>

```go
RelayStateType *string
```

- *Type:* *string

The relay state URL that redirect links to any service in the AWS Management Console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#relay_state_type SsoPermissionSet#relay_state_type}

---

##### `SessionDuration`<sup>Optional</sup> <a name="SessionDuration" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.sessionDuration"></a>

```go
SessionDuration *string
```

- *Type:* *string

The length of time that a user can be signed in to an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#session_duration SsoPermissionSet#session_duration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#tags SsoPermissionSet#tags}.

---

### SsoPermissionSetCustomerManagedPolicyReferences <a name="SsoPermissionSetCustomerManagedPolicyReferences" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

&ssopermissionset.SsoPermissionSetCustomerManagedPolicyReferences {
	Name: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferences.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}.

---

### SsoPermissionSetPermissionsBoundary <a name="SsoPermissionSetPermissionsBoundary" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

&ssopermissionset.SsoPermissionSetPermissionsBoundary {
	CustomerManagedPolicyReference: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference,
	ManagedPolicyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.customerManagedPolicyReference">CustomerManagedPolicyReference</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#customer_managed_policy_reference SsoPermissionSet#customer_managed_policy_reference}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.managedPolicyArn">ManagedPolicyArn</a></code> | <code>*string</code> | The managed policy to attach. |

---

##### `CustomerManagedPolicyReference`<sup>Optional</sup> <a name="CustomerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.customerManagedPolicyReference"></a>

```go
CustomerManagedPolicyReference SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#customer_managed_policy_reference SsoPermissionSet#customer_managed_policy_reference}.

---

##### `ManagedPolicyArn`<sup>Optional</sup> <a name="ManagedPolicyArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundary.property.managedPolicyArn"></a>

```go
ManagedPolicyArn *string
```

- *Type:* *string

The managed policy to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#managed_policy_arn SsoPermissionSet#managed_policy_arn}

---

### SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference <a name="SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

&ssopermissionset.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference {
	Name: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#name SsoPermissionSet#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#path SsoPermissionSet#path}.

---

### SsoPermissionSetTags <a name="SsoPermissionSetTags" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

&ssopermissionset.SsoPermissionSetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#key SsoPermissionSet#key}. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#value SsoPermissionSet#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#key SsoPermissionSet#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/sso_permission_set#value SsoPermissionSet#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoPermissionSetCustomerManagedPolicyReferencesList <a name="SsoPermissionSetCustomerManagedPolicyReferencesList" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

ssopermissionset.NewSsoPermissionSetCustomerManagedPolicyReferencesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsoPermissionSetCustomerManagedPolicyReferencesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.get"></a>

```go
func Get(index *f64) SsoPermissionSetCustomerManagedPolicyReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoPermissionSetCustomerManagedPolicyReferencesOutputReference <a name="SsoPermissionSetCustomerManagedPolicyReferencesOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

ssopermissionset.NewSsoPermissionSetCustomerManagedPolicyReferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsoPermissionSetCustomerManagedPolicyReferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetCustomerManagedPolicyReferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference <a name="SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

ssopermissionset.NewSsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoPermissionSetPermissionsBoundaryOutputReference <a name="SsoPermissionSetPermissionsBoundaryOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

ssopermissionset.NewSsoPermissionSetPermissionsBoundaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsoPermissionSetPermissionsBoundaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference">PutCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetCustomerManagedPolicyReference">ResetCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetManagedPolicyArn">ResetManagedPolicyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerManagedPolicyReference` <a name="PutCustomerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference"></a>

```go
func PutCustomerManagedPolicyReference(value SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.putCustomerManagedPolicyReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReference</a>

---

##### `ResetCustomerManagedPolicyReference` <a name="ResetCustomerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetCustomerManagedPolicyReference"></a>

```go
func ResetCustomerManagedPolicyReference()
```

##### `ResetManagedPolicyArn` <a name="ResetManagedPolicyArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.resetManagedPolicyArn"></a>

```go
func ResetManagedPolicyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReference">CustomerManagedPolicyReference</a></code> | <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReferenceInput">CustomerManagedPolicyReferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArnInput">ManagedPolicyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArn">ManagedPolicyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedPolicyReference`<sup>Required</sup> <a name="CustomerManagedPolicyReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReference"></a>

```go
func CustomerManagedPolicyReference() SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference">SsoPermissionSetPermissionsBoundaryCustomerManagedPolicyReferenceOutputReference</a>

---

##### `CustomerManagedPolicyReferenceInput`<sup>Optional</sup> <a name="CustomerManagedPolicyReferenceInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.customerManagedPolicyReferenceInput"></a>

```go
func CustomerManagedPolicyReferenceInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedPolicyArnInput`<sup>Optional</sup> <a name="ManagedPolicyArnInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArnInput"></a>

```go
func ManagedPolicyArnInput() *string
```

- *Type:* *string

---

##### `ManagedPolicyArn`<sup>Required</sup> <a name="ManagedPolicyArn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.managedPolicyArn"></a>

```go
func ManagedPolicyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetPermissionsBoundaryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoPermissionSetTagsList <a name="SsoPermissionSetTagsList" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

ssopermissionset.NewSsoPermissionSetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsoPermissionSetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.get"></a>

```go
func Get(index *f64) SsoPermissionSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoPermissionSetTagsOutputReference <a name="SsoPermissionSetTagsOutputReference" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssopermissionset"

ssopermissionset.NewSsoPermissionSetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsoPermissionSetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssoPermissionSet.SsoPermissionSetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



