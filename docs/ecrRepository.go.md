# `ecrRepository` Submodule <a name="`ecrRepository` Submodule" id="@cdktn/provider-awscc.ecrRepository"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRepository <a name="EcrRepository" id="@cdktn/provider-awscc.ecrRepository.EcrRepository"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository awscc_ecr_repository}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

ecrrepository.NewEcrRepository(scope Construct, id *string, config EcrRepositoryConfig) EcrRepository
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig">EcrRepositoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig">EcrRepositoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.putEncryptionConfiguration">PutEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.putImageScanningConfiguration">PutImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.putImageTagMutabilityExclusionFilters">PutImageTagMutabilityExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.putLifecyclePolicy">PutLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetEmptyOnDelete">ResetEmptyOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetEncryptionConfiguration">ResetEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetImageScanningConfiguration">ResetImageScanningConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetImageTagMutability">ResetImageTagMutability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetImageTagMutabilityExclusionFilters">ResetImageTagMutabilityExclusionFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetLifecyclePolicy">ResetLifecyclePolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetRepositoryName">ResetRepositoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetRepositoryPolicyText">ResetRepositoryPolicyText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionConfiguration` <a name="PutEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putEncryptionConfiguration"></a>

```go
func PutEncryptionConfiguration(value EcrRepositoryEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>

---

##### `PutImageScanningConfiguration` <a name="PutImageScanningConfiguration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putImageScanningConfiguration"></a>

```go
func PutImageScanningConfiguration(value EcrRepositoryImageScanningConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putImageScanningConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a>

---

##### `PutImageTagMutabilityExclusionFilters` <a name="PutImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putImageTagMutabilityExclusionFilters"></a>

```go
func PutImageTagMutabilityExclusionFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putImageTagMutabilityExclusionFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLifecyclePolicy` <a name="PutLifecyclePolicy" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putLifecyclePolicy"></a>

```go
func PutLifecyclePolicy(value EcrRepositoryLifecyclePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putLifecyclePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy">EcrRepositoryLifecyclePolicy</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEmptyOnDelete` <a name="ResetEmptyOnDelete" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetEmptyOnDelete"></a>

```go
func ResetEmptyOnDelete()
```

##### `ResetEncryptionConfiguration` <a name="ResetEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetEncryptionConfiguration"></a>

```go
func ResetEncryptionConfiguration()
```

##### `ResetImageScanningConfiguration` <a name="ResetImageScanningConfiguration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetImageScanningConfiguration"></a>

```go
func ResetImageScanningConfiguration()
```

##### `ResetImageTagMutability` <a name="ResetImageTagMutability" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetImageTagMutability"></a>

```go
func ResetImageTagMutability()
```

##### `ResetImageTagMutabilityExclusionFilters` <a name="ResetImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetImageTagMutabilityExclusionFilters"></a>

```go
func ResetImageTagMutabilityExclusionFilters()
```

##### `ResetLifecyclePolicy` <a name="ResetLifecyclePolicy" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetLifecyclePolicy"></a>

```go
func ResetLifecyclePolicy()
```

##### `ResetRepositoryName` <a name="ResetRepositoryName" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetRepositoryName"></a>

```go
func ResetRepositoryName()
```

##### `ResetRepositoryPolicyText` <a name="ResetRepositoryPolicyText" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetRepositoryPolicyText"></a>

```go
func ResetRepositoryPolicyText()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EcrRepository resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

ecrrepository.EcrRepository_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

ecrrepository.EcrRepository_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

ecrrepository.EcrRepository_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

ecrrepository.EcrRepository_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EcrRepository resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EcrRepository to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EcrRepository that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EcrRepository to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference">EcrRepositoryEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageScanningConfiguration">ImageScanningConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference">EcrRepositoryImageScanningConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutabilityExclusionFilters">ImageTagMutabilityExclusionFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList">EcrRepositoryImageTagMutabilityExclusionFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference">EcrRepositoryLifecyclePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryUri">RepositoryUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList">EcrRepositoryTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.emptyOnDeleteInput">EmptyOnDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.encryptionConfigurationInput">EncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageScanningConfigurationInput">ImageScanningConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutabilityExclusionFiltersInput">ImageTagMutabilityExclusionFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutabilityInput">ImageTagMutabilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.lifecyclePolicyInput">LifecyclePolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryNameInput">RepositoryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryPolicyTextInput">RepositoryPolicyTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.emptyOnDelete">EmptyOnDelete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutability">ImageTagMutability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryPolicyText">RepositoryPolicyText</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `EncryptionConfiguration`<sup>Required</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.encryptionConfiguration"></a>

```go
func EncryptionConfiguration() EcrRepositoryEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference">EcrRepositoryEncryptionConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageScanningConfiguration`<sup>Required</sup> <a name="ImageScanningConfiguration" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageScanningConfiguration"></a>

```go
func ImageScanningConfiguration() EcrRepositoryImageScanningConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference">EcrRepositoryImageScanningConfigurationOutputReference</a>

---

##### `ImageTagMutabilityExclusionFilters`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutabilityExclusionFilters"></a>

```go
func ImageTagMutabilityExclusionFilters() EcrRepositoryImageTagMutabilityExclusionFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList">EcrRepositoryImageTagMutabilityExclusionFiltersList</a>

---

##### `LifecyclePolicy`<sup>Required</sup> <a name="LifecyclePolicy" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.lifecyclePolicy"></a>

```go
func LifecyclePolicy() EcrRepositoryLifecyclePolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference">EcrRepositoryLifecyclePolicyOutputReference</a>

---

##### `RepositoryUri`<sup>Required</sup> <a name="RepositoryUri" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryUri"></a>

```go
func RepositoryUri() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.tags"></a>

```go
func Tags() EcrRepositoryTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList">EcrRepositoryTagsList</a>

---

##### `EmptyOnDeleteInput`<sup>Optional</sup> <a name="EmptyOnDeleteInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.emptyOnDeleteInput"></a>

```go
func EmptyOnDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `EncryptionConfigurationInput`<sup>Optional</sup> <a name="EncryptionConfigurationInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.encryptionConfigurationInput"></a>

```go
func EncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ImageScanningConfigurationInput`<sup>Optional</sup> <a name="ImageScanningConfigurationInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageScanningConfigurationInput"></a>

```go
func ImageScanningConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ImageTagMutabilityExclusionFiltersInput`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFiltersInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutabilityExclusionFiltersInput"></a>

```go
func ImageTagMutabilityExclusionFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `ImageTagMutabilityInput`<sup>Optional</sup> <a name="ImageTagMutabilityInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutabilityInput"></a>

```go
func ImageTagMutabilityInput() *string
```

- *Type:* *string

---

##### `LifecyclePolicyInput`<sup>Optional</sup> <a name="LifecyclePolicyInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.lifecyclePolicyInput"></a>

```go
func LifecyclePolicyInput() interface{}
```

- *Type:* interface{}

---

##### `RepositoryNameInput`<sup>Optional</sup> <a name="RepositoryNameInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryNameInput"></a>

```go
func RepositoryNameInput() *string
```

- *Type:* *string

---

##### `RepositoryPolicyTextInput`<sup>Optional</sup> <a name="RepositoryPolicyTextInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryPolicyTextInput"></a>

```go
func RepositoryPolicyTextInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `EmptyOnDelete`<sup>Required</sup> <a name="EmptyOnDelete" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.emptyOnDelete"></a>

```go
func EmptyOnDelete() interface{}
```

- *Type:* interface{}

---

##### `ImageTagMutability`<sup>Required</sup> <a name="ImageTagMutability" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.imageTagMutability"></a>

```go
func ImageTagMutability() *string
```

- *Type:* *string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

##### `RepositoryPolicyText`<sup>Required</sup> <a name="RepositoryPolicyText" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.repositoryPolicyText"></a>

```go
func RepositoryPolicyText() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepository.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ecrRepository.EcrRepository.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRepositoryConfig <a name="EcrRepositoryConfig" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

&ecrrepository.EcrRepositoryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EmptyOnDelete: interface{},
	EncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ecrRepository.EcrRepositoryEncryptionConfiguration,
	ImageScanningConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ecrRepository.EcrRepositoryImageScanningConfiguration,
	ImageTagMutability: *string,
	ImageTagMutabilityExclusionFilters: interface{},
	LifecyclePolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ecrRepository.EcrRepositoryLifecyclePolicy,
	RepositoryName: *string,
	RepositoryPolicyText: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.emptyOnDelete">EmptyOnDelete</a></code> | <code>interface{}</code> | If true, deleting the repository force deletes the contents of the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.encryptionConfiguration">EncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a></code> | The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.imageScanningConfiguration">ImageScanningConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a></code> | The ``imageScanningConfiguration`` parameter is being deprecated, in favor of specifying the image scanning configuration at the registry level. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.imageTagMutability">ImageTagMutability</a></code> | <code>*string</code> | The tag mutability setting for the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.imageTagMutabilityExclusionFilters">ImageTagMutabilityExclusionFilters</a></code> | <code>interface{}</code> | A list of filters that specify which image tags are excluded from the repository's image tag mutability setting. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.lifecyclePolicy">LifecyclePolicy</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy">EcrRepositoryLifecyclePolicy</a></code> | Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html). |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | The name to use for the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.repositoryPolicyText">RepositoryPolicyText</a></code> | <code>*string</code> | The JSON repository policy text to apply to the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EmptyOnDelete`<sup>Optional</sup> <a name="EmptyOnDelete" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.emptyOnDelete"></a>

```go
EmptyOnDelete interface{}
```

- *Type:* interface{}

If true, deleting the repository force deletes the contents of the repository.

If false, the repository must be empty before attempting to delete it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#empty_on_delete EcrRepository#empty_on_delete}

---

##### `EncryptionConfiguration`<sup>Optional</sup> <a name="EncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.encryptionConfiguration"></a>

```go
EncryptionConfiguration EcrRepositoryEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration">EcrRepositoryEncryptionConfiguration</a>

The encryption configuration for the repository. This determines how the contents of your repository are encrypted at rest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#encryption_configuration EcrRepository#encryption_configuration}

---

##### `ImageScanningConfiguration`<sup>Optional</sup> <a name="ImageScanningConfiguration" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.imageScanningConfiguration"></a>

```go
ImageScanningConfiguration EcrRepositoryImageScanningConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration">EcrRepositoryImageScanningConfiguration</a>

The ``imageScanningConfiguration`` parameter is being deprecated, in favor of specifying the image scanning configuration at the registry level.

For more information, see `PutRegistryScanningConfiguration`.
The image scanning configuration for the repository. This determines whether images are scanned for known vulnerabilities after being pushed to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#image_scanning_configuration EcrRepository#image_scanning_configuration}

---

##### `ImageTagMutability`<sup>Optional</sup> <a name="ImageTagMutability" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.imageTagMutability"></a>

```go
ImageTagMutability *string
```

- *Type:* *string

The tag mutability setting for the repository.

If this parameter is omitted, the default setting of `MUTABLE` will be used which will allow image tags to be overwritten. If `IMMUTABLE` is specified, all image tags within the repository will be immutable which will prevent them from being overwritten.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#image_tag_mutability EcrRepository#image_tag_mutability}

---

##### `ImageTagMutabilityExclusionFilters`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.imageTagMutabilityExclusionFilters"></a>

```go
ImageTagMutabilityExclusionFilters interface{}
```

- *Type:* interface{}

A list of filters that specify which image tags are excluded from the repository's image tag mutability setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#image_tag_mutability_exclusion_filters EcrRepository#image_tag_mutability_exclusion_filters}

---

##### `LifecyclePolicy`<sup>Optional</sup> <a name="LifecyclePolicy" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.lifecyclePolicy"></a>

```go
LifecyclePolicy EcrRepositoryLifecyclePolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy">EcrRepositoryLifecyclePolicy</a>

Creates or updates a lifecycle policy. For information about lifecycle policy syntax, see [Lifecycle policy template](https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#lifecycle_policy EcrRepository#lifecycle_policy}

---

##### `RepositoryName`<sup>Optional</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.repositoryName"></a>

```go
RepositoryName *string
```

- *Type:* *string

The name to use for the repository.

The repository name may be specified on its own (such as `nginx-web-app`) or it can be prepended with a namespace to group the repository into a category (such as `project-a/nginx-web-app`). If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the repository name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
The repository name must start with a letter and can only contain lowercase letters, numbers, hyphens, underscores, and forward slashes.
If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#repository_name EcrRepository#repository_name}

---

##### `RepositoryPolicyText`<sup>Optional</sup> <a name="RepositoryPolicyText" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.repositoryPolicyText"></a>

```go
RepositoryPolicyText *string
```

- *Type:* *string

The JSON repository policy text to apply to the repository.

For more information, see [Amazon ECR repository policies](https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policy-examples.html) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#repository_policy_text EcrRepository#repository_policy_text}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#tags EcrRepository#tags}

---

### EcrRepositoryEncryptionConfiguration <a name="EcrRepositoryEncryptionConfiguration" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

&ecrrepository.EcrRepositoryEncryptionConfiguration {
	EncryptionType: *string,
	KmsKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | The encryption type to use. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | If you use the ``KMS`` encryption type, specify the KMS key to use for encryption. |

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration.property.encryptionType"></a>

```go
EncryptionType *string
```

- *Type:* *string

The encryption type to use.

If you use the `KMS` encryption type, the contents of the repository will be encrypted using server-side encryption with KMSlong key stored in KMS. When you use KMS to encrypt your data, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you already created.
If you use the `KMS_DSSE` encryption type, the contents of the repository will be encrypted with two layers of encryption using server-side encryption with the KMS Management Service key stored in KMS. Similar to the `KMS` encryption type, you can either use the default AWS managed KMS key for Amazon ECR, or specify your own KMS key, which you've already created.
If you use the `AES256` encryption type, Amazon ECR uses server-side encryption with Amazon S3-managed encryption keys which encrypts the images in the repository using an AES256 encryption algorithm.
For more information, see [Amazon ECR encryption at rest](https://docs.aws.amazon.com/AmazonECR/latest/userguide/encryption-at-rest.html) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#encryption_type EcrRepository#encryption_type}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfiguration.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

If you use the ``KMS`` encryption type, specify the KMS key to use for encryption.

The alias, key ID, or full ARN of the KMS key can be specified. The key must exist in the same Region as the repository. If no key is specified, the default AWS managed KMS key for Amazon ECR will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#kms_key EcrRepository#kms_key}

---

### EcrRepositoryImageScanningConfiguration <a name="EcrRepositoryImageScanningConfiguration" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

&ecrrepository.EcrRepositoryImageScanningConfiguration {
	ScanOnPush: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration.property.scanOnPush">ScanOnPush</a></code> | <code>interface{}</code> | The setting that determines whether images are scanned after being pushed to a repository. |

---

##### `ScanOnPush`<sup>Optional</sup> <a name="ScanOnPush" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfiguration.property.scanOnPush"></a>

```go
ScanOnPush interface{}
```

- *Type:* interface{}

The setting that determines whether images are scanned after being pushed to a repository.

If set to `true`, images will be scanned after being pushed. If this parameter is not specified, it will default to `false` and images will not be scanned unless a scan is manually started.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#scan_on_push EcrRepository#scan_on_push}

---

### EcrRepositoryImageTagMutabilityExclusionFilters <a name="EcrRepositoryImageTagMutabilityExclusionFilters" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

&ecrrepository.EcrRepositoryImageTagMutabilityExclusionFilters {
	ImageTagMutabilityExclusionFilterType: *string,
	ImageTagMutabilityExclusionFilterValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterType">ImageTagMutabilityExclusionFilterType</a></code> | <code>*string</code> | Specifies the type of filter to use for excluding image tags from the repository's mutability setting. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterValue">ImageTagMutabilityExclusionFilterValue</a></code> | <code>*string</code> | The value to use when filtering image tags. |

---

##### `ImageTagMutabilityExclusionFilterType`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterType"></a>

```go
ImageTagMutabilityExclusionFilterType *string
```

- *Type:* *string

Specifies the type of filter to use for excluding image tags from the repository's mutability setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#image_tag_mutability_exclusion_filter_type EcrRepository#image_tag_mutability_exclusion_filter_type}

---

##### `ImageTagMutabilityExclusionFilterValue`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFilters.property.imageTagMutabilityExclusionFilterValue"></a>

```go
ImageTagMutabilityExclusionFilterValue *string
```

- *Type:* *string

The value to use when filtering image tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#image_tag_mutability_exclusion_filter_value EcrRepository#image_tag_mutability_exclusion_filter_value}

---

### EcrRepositoryLifecyclePolicy <a name="EcrRepositoryLifecyclePolicy" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

&ecrrepository.EcrRepositoryLifecyclePolicy {
	LifecyclePolicyText: *string,
	RegistryId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy.property.lifecyclePolicyText">LifecyclePolicyText</a></code> | <code>*string</code> | The JSON repository policy text to apply to the repository. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy.property.registryId">RegistryId</a></code> | <code>*string</code> | The AWS account ID associated with the registry that contains the repository. |

---

##### `LifecyclePolicyText`<sup>Optional</sup> <a name="LifecyclePolicyText" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy.property.lifecyclePolicyText"></a>

```go
LifecyclePolicyText *string
```

- *Type:* *string

The JSON repository policy text to apply to the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#lifecycle_policy_text EcrRepository#lifecycle_policy_text}

---

##### `RegistryId`<sup>Optional</sup> <a name="RegistryId" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicy.property.registryId"></a>

```go
RegistryId *string
```

- *Type:* *string

The AWS account ID associated with the registry that contains the repository.

If you do? not specify a registry, the default registry is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#registry_id EcrRepository#registry_id}

---

### EcrRepositoryTags <a name="EcrRepositoryTags" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

&ecrrepository.EcrRepositoryTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags.property.key">Key</a></code> | <code>*string</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags.property.value">Value</a></code> | <code>*string</code> | A ``value`` acts as a descriptor within a tag category (key). |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

One part of a key-value pair that make up a tag.

A `key` is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#key EcrRepository#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

A ``value`` acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ecr_repository#value EcrRepository#value}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRepositoryEncryptionConfigurationOutputReference <a name="EcrRepositoryEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

ecrrepository.NewEcrRepositoryEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcrRepositoryEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resetKmsKey">ResetKmsKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resetEncryptionType"></a>

```go
func ResetEncryptionType()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.resetKmsKey"></a>

```go
func ResetKmsKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.encryptionTypeInput"></a>

```go
func EncryptionTypeInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcrRepositoryImageScanningConfigurationOutputReference <a name="EcrRepositoryImageScanningConfigurationOutputReference" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

ecrrepository.NewEcrRepositoryImageScanningConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcrRepositoryImageScanningConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.resetScanOnPush">ResetScanOnPush</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScanOnPush` <a name="ResetScanOnPush" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.resetScanOnPush"></a>

```go
func ResetScanOnPush()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.scanOnPushInput">ScanOnPushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.scanOnPush">ScanOnPush</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScanOnPushInput`<sup>Optional</sup> <a name="ScanOnPushInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.scanOnPushInput"></a>

```go
func ScanOnPushInput() interface{}
```

- *Type:* interface{}

---

##### `ScanOnPush`<sup>Required</sup> <a name="ScanOnPush" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.scanOnPush"></a>

```go
func ScanOnPush() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageScanningConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcrRepositoryImageTagMutabilityExclusionFiltersList <a name="EcrRepositoryImageTagMutabilityExclusionFiltersList" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

ecrrepository.NewEcrRepositoryImageTagMutabilityExclusionFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcrRepositoryImageTagMutabilityExclusionFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.get"></a>

```go
func Get(index *f64) EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference <a name="EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

ecrrepository.NewEcrRepositoryImageTagMutabilityExclusionFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterType">ResetImageTagMutabilityExclusionFilterType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterValue">ResetImageTagMutabilityExclusionFilterValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetImageTagMutabilityExclusionFilterType` <a name="ResetImageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterType"></a>

```go
func ResetImageTagMutabilityExclusionFilterType()
```

##### `ResetImageTagMutabilityExclusionFilterValue` <a name="ResetImageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.resetImageTagMutabilityExclusionFilterValue"></a>

```go
func ResetImageTagMutabilityExclusionFilterValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterTypeInput">ImageTagMutabilityExclusionFilterTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValueInput">ImageTagMutabilityExclusionFilterValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType">ImageTagMutabilityExclusionFilterType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue">ImageTagMutabilityExclusionFilterValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageTagMutabilityExclusionFilterTypeInput`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilterTypeInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterTypeInput"></a>

```go
func ImageTagMutabilityExclusionFilterTypeInput() *string
```

- *Type:* *string

---

##### `ImageTagMutabilityExclusionFilterValueInput`<sup>Optional</sup> <a name="ImageTagMutabilityExclusionFilterValueInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValueInput"></a>

```go
func ImageTagMutabilityExclusionFilterValueInput() *string
```

- *Type:* *string

---

##### `ImageTagMutabilityExclusionFilterType`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilterType" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterType"></a>

```go
func ImageTagMutabilityExclusionFilterType() *string
```

- *Type:* *string

---

##### `ImageTagMutabilityExclusionFilterValue`<sup>Required</sup> <a name="ImageTagMutabilityExclusionFilterValue" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.imageTagMutabilityExclusionFilterValue"></a>

```go
func ImageTagMutabilityExclusionFilterValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryImageTagMutabilityExclusionFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcrRepositoryLifecyclePolicyOutputReference <a name="EcrRepositoryLifecyclePolicyOutputReference" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

ecrrepository.NewEcrRepositoryLifecyclePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EcrRepositoryLifecyclePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resetLifecyclePolicyText">ResetLifecyclePolicyText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resetRegistryId">ResetRegistryId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLifecyclePolicyText` <a name="ResetLifecyclePolicyText" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resetLifecyclePolicyText"></a>

```go
func ResetLifecyclePolicyText()
```

##### `ResetRegistryId` <a name="ResetRegistryId" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.resetRegistryId"></a>

```go
func ResetRegistryId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.lifecyclePolicyTextInput">LifecyclePolicyTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.registryIdInput">RegistryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.lifecyclePolicyText">LifecyclePolicyText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.registryId">RegistryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LifecyclePolicyTextInput`<sup>Optional</sup> <a name="LifecyclePolicyTextInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.lifecyclePolicyTextInput"></a>

```go
func LifecyclePolicyTextInput() *string
```

- *Type:* *string

---

##### `RegistryIdInput`<sup>Optional</sup> <a name="RegistryIdInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.registryIdInput"></a>

```go
func RegistryIdInput() *string
```

- *Type:* *string

---

##### `LifecyclePolicyText`<sup>Required</sup> <a name="LifecyclePolicyText" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.lifecyclePolicyText"></a>

```go
func LifecyclePolicyText() *string
```

- *Type:* *string

---

##### `RegistryId`<sup>Required</sup> <a name="RegistryId" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.registryId"></a>

```go
func RegistryId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryLifecyclePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcrRepositoryTagsList <a name="EcrRepositoryTagsList" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

ecrrepository.NewEcrRepositoryTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EcrRepositoryTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.get"></a>

```go
func Get(index *f64) EcrRepositoryTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EcrRepositoryTagsOutputReference <a name="EcrRepositoryTagsOutputReference" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ecrrepository"

ecrrepository.NewEcrRepositoryTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EcrRepositoryTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ecrRepository.EcrRepositoryTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



