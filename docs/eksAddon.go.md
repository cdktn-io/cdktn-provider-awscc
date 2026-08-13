# `eksAddon` Submodule <a name="`eksAddon` Submodule" id="@cdktn/provider-awscc.eksAddon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksAddon <a name="EksAddon" id="@cdktn/provider-awscc.eksAddon.EksAddon"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon awscc_eks_addon}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksAddon.EksAddon.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

eksaddon.NewEksAddon(scope Construct, id *string, config EksAddonConfig) EksAddon
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig">EksAddonConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksAddon.EksAddon.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksAddon.EksAddon.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.eksAddon.EksAddon.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig">EksAddonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.putNamespaceConfig">PutNamespaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.putPodIdentityAssociations">PutPodIdentityAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.resetAddonVersion">ResetAddonVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.resetConfigurationValues">ResetConfigurationValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.resetNamespaceConfig">ResetNamespaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.resetPodIdentityAssociations">ResetPodIdentityAssociations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.resetPreserveOnDelete">ResetPreserveOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.resetResolveConflicts">ResetResolveConflicts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.resetServiceAccountRoleArn">ResetServiceAccountRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksAddon.EksAddon.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.eksAddon.EksAddon.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eksAddon.EksAddon.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.eksAddon.EksAddon.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eksAddon.EksAddon.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksAddon.EksAddon.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.eksAddon.EksAddon.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eksAddon.EksAddon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.eksAddon.EksAddon.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.eksAddon.EksAddon.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.eksAddon.EksAddon.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.eksAddon.EksAddon.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.eksAddon.EksAddon.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eksAddon.EksAddon.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.eksAddon.EksAddon.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.eksAddon.EksAddon.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksAddon.EksAddon.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksAddon.EksAddon.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.eksAddon.EksAddon.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksAddon.EksAddon.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.eksAddon.EksAddon.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eksAddon.EksAddon.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eksAddon.EksAddon.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.eksAddon.EksAddon.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eksAddon.EksAddon.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNamespaceConfig` <a name="PutNamespaceConfig" id="@cdktn/provider-awscc.eksAddon.EksAddon.putNamespaceConfig"></a>

```go
func PutNamespaceConfig(value EksAddonNamespaceConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksAddon.EksAddon.putNamespaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfig">EksAddonNamespaceConfig</a>

---

##### `PutPodIdentityAssociations` <a name="PutPodIdentityAssociations" id="@cdktn/provider-awscc.eksAddon.EksAddon.putPodIdentityAssociations"></a>

```go
func PutPodIdentityAssociations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksAddon.EksAddon.putPodIdentityAssociations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.eksAddon.EksAddon.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eksAddon.EksAddon.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAddonVersion` <a name="ResetAddonVersion" id="@cdktn/provider-awscc.eksAddon.EksAddon.resetAddonVersion"></a>

```go
func ResetAddonVersion()
```

##### `ResetConfigurationValues` <a name="ResetConfigurationValues" id="@cdktn/provider-awscc.eksAddon.EksAddon.resetConfigurationValues"></a>

```go
func ResetConfigurationValues()
```

##### `ResetNamespaceConfig` <a name="ResetNamespaceConfig" id="@cdktn/provider-awscc.eksAddon.EksAddon.resetNamespaceConfig"></a>

```go
func ResetNamespaceConfig()
```

##### `ResetPodIdentityAssociations` <a name="ResetPodIdentityAssociations" id="@cdktn/provider-awscc.eksAddon.EksAddon.resetPodIdentityAssociations"></a>

```go
func ResetPodIdentityAssociations()
```

##### `ResetPreserveOnDelete` <a name="ResetPreserveOnDelete" id="@cdktn/provider-awscc.eksAddon.EksAddon.resetPreserveOnDelete"></a>

```go
func ResetPreserveOnDelete()
```

##### `ResetResolveConflicts` <a name="ResetResolveConflicts" id="@cdktn/provider-awscc.eksAddon.EksAddon.resetResolveConflicts"></a>

```go
func ResetResolveConflicts()
```

##### `ResetServiceAccountRoleArn` <a name="ResetServiceAccountRoleArn" id="@cdktn/provider-awscc.eksAddon.EksAddon.resetServiceAccountRoleArn"></a>

```go
func ResetServiceAccountRoleArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.eksAddon.EksAddon.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EksAddon resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.eksAddon.EksAddon.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

eksaddon.EksAddon_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksAddon.EksAddon.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.eksAddon.EksAddon.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

eksaddon.EksAddon_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksAddon.EksAddon.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.eksAddon.EksAddon.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

eksaddon.EksAddon_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eksAddon.EksAddon.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.eksAddon.EksAddon.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

eksaddon.EksAddon_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EksAddon resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eksAddon.EksAddon.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eksAddon.EksAddon.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EksAddon to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eksAddon.EksAddon.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EksAddon that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eksAddon.EksAddon.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EksAddon to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.namespaceConfig">NamespaceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference">EksAddonNamespaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.podIdentityAssociations">PodIdentityAssociations</a></code> | <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList">EksAddonPodIdentityAssociationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsList">EksAddonTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.addonNameInput">AddonNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.addonVersionInput">AddonVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.configurationValuesInput">ConfigurationValuesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.namespaceConfigInput">NamespaceConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.podIdentityAssociationsInput">PodIdentityAssociationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.preserveOnDeleteInput">PreserveOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.resolveConflictsInput">ResolveConflictsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.serviceAccountRoleArnInput">ServiceAccountRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.addonName">AddonName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.addonVersion">AddonVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.configurationValues">ConfigurationValues</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.preserveOnDelete">PreserveOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.resolveConflicts">ResolveConflicts</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.serviceAccountRoleArn">ServiceAccountRoleArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NamespaceConfig`<sup>Required</sup> <a name="NamespaceConfig" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.namespaceConfig"></a>

```go
func NamespaceConfig() EksAddonNamespaceConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference">EksAddonNamespaceConfigOutputReference</a>

---

##### `PodIdentityAssociations`<sup>Required</sup> <a name="PodIdentityAssociations" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.podIdentityAssociations"></a>

```go
func PodIdentityAssociations() EksAddonPodIdentityAssociationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList">EksAddonPodIdentityAssociationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.tags"></a>

```go
func Tags() EksAddonTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsList">EksAddonTagsList</a>

---

##### `AddonNameInput`<sup>Optional</sup> <a name="AddonNameInput" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.addonNameInput"></a>

```go
func AddonNameInput() *string
```

- *Type:* *string

---

##### `AddonVersionInput`<sup>Optional</sup> <a name="AddonVersionInput" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.addonVersionInput"></a>

```go
func AddonVersionInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `ConfigurationValuesInput`<sup>Optional</sup> <a name="ConfigurationValuesInput" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.configurationValuesInput"></a>

```go
func ConfigurationValuesInput() *string
```

- *Type:* *string

---

##### `NamespaceConfigInput`<sup>Optional</sup> <a name="NamespaceConfigInput" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.namespaceConfigInput"></a>

```go
func NamespaceConfigInput() interface{}
```

- *Type:* interface{}

---

##### `PodIdentityAssociationsInput`<sup>Optional</sup> <a name="PodIdentityAssociationsInput" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.podIdentityAssociationsInput"></a>

```go
func PodIdentityAssociationsInput() interface{}
```

- *Type:* interface{}

---

##### `PreserveOnDeleteInput`<sup>Optional</sup> <a name="PreserveOnDeleteInput" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.preserveOnDeleteInput"></a>

```go
func PreserveOnDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `ResolveConflictsInput`<sup>Optional</sup> <a name="ResolveConflictsInput" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.resolveConflictsInput"></a>

```go
func ResolveConflictsInput() *string
```

- *Type:* *string

---

##### `ServiceAccountRoleArnInput`<sup>Optional</sup> <a name="ServiceAccountRoleArnInput" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.serviceAccountRoleArnInput"></a>

```go
func ServiceAccountRoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AddonName`<sup>Required</sup> <a name="AddonName" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.addonName"></a>

```go
func AddonName() *string
```

- *Type:* *string

---

##### `AddonVersion`<sup>Required</sup> <a name="AddonVersion" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.addonVersion"></a>

```go
func AddonVersion() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `ConfigurationValues`<sup>Required</sup> <a name="ConfigurationValues" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.configurationValues"></a>

```go
func ConfigurationValues() *string
```

- *Type:* *string

---

##### `PreserveOnDelete`<sup>Required</sup> <a name="PreserveOnDelete" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.preserveOnDelete"></a>

```go
func PreserveOnDelete() interface{}
```

- *Type:* interface{}

---

##### `ResolveConflicts`<sup>Required</sup> <a name="ResolveConflicts" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.resolveConflicts"></a>

```go
func ResolveConflicts() *string
```

- *Type:* *string

---

##### `ServiceAccountRoleArn`<sup>Required</sup> <a name="ServiceAccountRoleArn" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.serviceAccountRoleArn"></a>

```go
func ServiceAccountRoleArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddon.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.eksAddon.EksAddon.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EksAddonConfig <a name="EksAddonConfig" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

&eksaddon.EksAddonConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AddonName: *string,
	ClusterName: *string,
	AddonVersion: *string,
	ConfigurationValues: *string,
	NamespaceConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eksAddon.EksAddonNamespaceConfig,
	PodIdentityAssociations: interface{},
	PreserveOnDelete: interface{},
	ResolveConflicts: *string,
	ServiceAccountRoleArn: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.addonName">AddonName</a></code> | <code>*string</code> | Name of Addon. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Name of Cluster. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.addonVersion">AddonVersion</a></code> | <code>*string</code> | Version of Addon. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.configurationValues">ConfigurationValues</a></code> | <code>*string</code> | The configuration values to use with the add-on. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.namespaceConfig">NamespaceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfig">EksAddonNamespaceConfig</a></code> | The custom namespace configuration to use with the add-on. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.podIdentityAssociations">PodIdentityAssociations</a></code> | <code>interface{}</code> | An array of pod identities to apply to this add-on. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.preserveOnDelete">PreserveOnDelete</a></code> | <code>interface{}</code> | PreserveOnDelete parameter value. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.resolveConflicts">ResolveConflicts</a></code> | <code>*string</code> | Resolve parameter value conflicts. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.serviceAccountRoleArn">ServiceAccountRoleArn</a></code> | <code>*string</code> | IAM role to bind to the add-on's service account. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddonName`<sup>Required</sup> <a name="AddonName" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.addonName"></a>

```go
AddonName *string
```

- *Type:* *string

Name of Addon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#addon_name EksAddon#addon_name}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Name of Cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#cluster_name EksAddon#cluster_name}

---

##### `AddonVersion`<sup>Optional</sup> <a name="AddonVersion" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.addonVersion"></a>

```go
AddonVersion *string
```

- *Type:* *string

Version of Addon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#addon_version EksAddon#addon_version}

---

##### `ConfigurationValues`<sup>Optional</sup> <a name="ConfigurationValues" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.configurationValues"></a>

```go
ConfigurationValues *string
```

- *Type:* *string

The configuration values to use with the add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#configuration_values EksAddon#configuration_values}

---

##### `NamespaceConfig`<sup>Optional</sup> <a name="NamespaceConfig" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.namespaceConfig"></a>

```go
NamespaceConfig EksAddonNamespaceConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfig">EksAddonNamespaceConfig</a>

The custom namespace configuration to use with the add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#namespace_config EksAddon#namespace_config}

---

##### `PodIdentityAssociations`<sup>Optional</sup> <a name="PodIdentityAssociations" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.podIdentityAssociations"></a>

```go
PodIdentityAssociations interface{}
```

- *Type:* interface{}

An array of pod identities to apply to this add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#pod_identity_associations EksAddon#pod_identity_associations}

---

##### `PreserveOnDelete`<sup>Optional</sup> <a name="PreserveOnDelete" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.preserveOnDelete"></a>

```go
PreserveOnDelete interface{}
```

- *Type:* interface{}

PreserveOnDelete parameter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#preserve_on_delete EksAddon#preserve_on_delete}

---

##### `ResolveConflicts`<sup>Optional</sup> <a name="ResolveConflicts" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.resolveConflicts"></a>

```go
ResolveConflicts *string
```

- *Type:* *string

Resolve parameter value conflicts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#resolve_conflicts EksAddon#resolve_conflicts}

---

##### `ServiceAccountRoleArn`<sup>Optional</sup> <a name="ServiceAccountRoleArn" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.serviceAccountRoleArn"></a>

```go
ServiceAccountRoleArn *string
```

- *Type:* *string

IAM role to bind to the add-on's service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#service_account_role_arn EksAddon#service_account_role_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.eksAddon.EksAddonConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#tags EksAddon#tags}

---

### EksAddonNamespaceConfig <a name="EksAddonNamespaceConfig" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

&eksaddon.EksAddonNamespaceConfig {
	Namespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfig.property.namespace">Namespace</a></code> | <code>*string</code> | The custom namespace for creating the add-on. |

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

The custom namespace for creating the add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#namespace EksAddon#namespace}

---

### EksAddonPodIdentityAssociations <a name="EksAddonPodIdentityAssociations" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

&eksaddon.EksAddonPodIdentityAssociations {
	RoleArn: *string,
	ServiceAccount: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociations.property.roleArn">RoleArn</a></code> | <code>*string</code> | The IAM role ARN that the pod identity association is created for. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociations.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | The Kubernetes service account that the pod identity association is created for. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociations.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The IAM role ARN that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#role_arn EksAddon#role_arn}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociations.property.serviceAccount"></a>

```go
ServiceAccount *string
```

- *Type:* *string

The Kubernetes service account that the pod identity association is created for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#service_account EksAddon#service_account}

---

### EksAddonTags <a name="EksAddonTags" id="@cdktn/provider-awscc.eksAddon.EksAddonTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eksAddon.EksAddonTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

&eksaddon.EksAddonTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eksAddon.EksAddonTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#key EksAddon#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eksAddon.EksAddonTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/eks_addon#value EksAddon#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EksAddonNamespaceConfigOutputReference <a name="EksAddonNamespaceConfigOutputReference" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

eksaddon.NewEksAddonNamespaceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EksAddonNamespaceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.resetNamespace"></a>

```go
func ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksAddon.EksAddonNamespaceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksAddonPodIdentityAssociationsList <a name="EksAddonPodIdentityAssociationsList" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

eksaddon.NewEksAddonPodIdentityAssociationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EksAddonPodIdentityAssociationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.get"></a>

```go
func Get(index *f64) EksAddonPodIdentityAssociationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksAddonPodIdentityAssociationsOutputReference <a name="EksAddonPodIdentityAssociationsOutputReference" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

eksaddon.NewEksAddonPodIdentityAssociationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EksAddonPodIdentityAssociationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.resetServiceAccount"></a>

```go
func ResetServiceAccount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.serviceAccountInput"></a>

```go
func ServiceAccountInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.serviceAccount"></a>

```go
func ServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksAddon.EksAddonPodIdentityAssociationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksAddonTagsList <a name="EksAddonTagsList" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

eksaddon.NewEksAddonTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EksAddonTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.get"></a>

```go
func Get(index *f64) EksAddonTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EksAddonTagsOutputReference <a name="EksAddonTagsOutputReference" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eksaddon"

eksaddon.NewEksAddonTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EksAddonTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eksAddon.EksAddonTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



