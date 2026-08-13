# `datazoneDomain` Submodule <a name="`datazoneDomain` Submodule" id="@cdktn/provider-awscc.datazoneDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneDomain <a name="DatazoneDomain" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain awscc_datazone_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedomain"

datazonedomain.NewDatazoneDomain(scope Construct, id *string, config DatazoneDomainConfig) DatazoneDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig">DatazoneDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig">DatazoneDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.putSingleSignOn">PutSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetDomainExecutionRole">ResetDomainExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetDomainVersion">ResetDomainVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetKmsKeyIdentifier">ResetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetServiceRole">ResetServiceRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetSingleSignOn">ResetSingleSignOn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSingleSignOn` <a name="PutSingleSignOn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.putSingleSignOn"></a>

```go
func PutSingleSignOn(value DatazoneDomainSingleSignOn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.putSingleSignOn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDomainExecutionRole` <a name="ResetDomainExecutionRole" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetDomainExecutionRole"></a>

```go
func ResetDomainExecutionRole()
```

##### `ResetDomainVersion` <a name="ResetDomainVersion" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetDomainVersion"></a>

```go
func ResetDomainVersion()
```

##### `ResetKmsKeyIdentifier` <a name="ResetKmsKeyIdentifier" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetKmsKeyIdentifier"></a>

```go
func ResetKmsKeyIdentifier()
```

##### `ResetServiceRole` <a name="ResetServiceRole" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetServiceRole"></a>

```go
func ResetServiceRole()
```

##### `ResetSingleSignOn` <a name="ResetSingleSignOn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetSingleSignOn"></a>

```go
func ResetSingleSignOn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedomain"

datazonedomain.DatazoneDomain_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedomain"

datazonedomain.DatazoneDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedomain"

datazonedomain.DatazoneDomain_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedomain"

datazonedomain.DatazoneDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatazoneDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatazoneDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatazoneDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.managedAccountId">ManagedAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.portalUrl">PortalUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.rootDomainUnitId">RootDomainUnitId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.singleSignOn">SingleSignOn</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference">DatazoneDomainSingleSignOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList">DatazoneDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.domainExecutionRoleInput">DomainExecutionRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.domainVersionInput">DomainVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifierInput">KmsKeyIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.serviceRoleInput">ServiceRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.singleSignOnInput">SingleSignOnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.domainExecutionRole">DomainExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.domainVersion">DomainVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `ManagedAccountId`<sup>Required</sup> <a name="ManagedAccountId" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.managedAccountId"></a>

```go
func ManagedAccountId() *string
```

- *Type:* *string

---

##### `PortalUrl`<sup>Required</sup> <a name="PortalUrl" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.portalUrl"></a>

```go
func PortalUrl() *string
```

- *Type:* *string

---

##### `RootDomainUnitId`<sup>Required</sup> <a name="RootDomainUnitId" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.rootDomainUnitId"></a>

```go
func RootDomainUnitId() *string
```

- *Type:* *string

---

##### `SingleSignOn`<sup>Required</sup> <a name="SingleSignOn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.singleSignOn"></a>

```go
func SingleSignOn() DatazoneDomainSingleSignOnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference">DatazoneDomainSingleSignOnOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.tags"></a>

```go
func Tags() DatazoneDomainTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList">DatazoneDomainTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainExecutionRoleInput`<sup>Optional</sup> <a name="DomainExecutionRoleInput" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.domainExecutionRoleInput"></a>

```go
func DomainExecutionRoleInput() *string
```

- *Type:* *string

---

##### `DomainVersionInput`<sup>Optional</sup> <a name="DomainVersionInput" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.domainVersionInput"></a>

```go
func DomainVersionInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdentifierInput`<sup>Optional</sup> <a name="KmsKeyIdentifierInput" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifierInput"></a>

```go
func KmsKeyIdentifierInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceRoleInput`<sup>Optional</sup> <a name="ServiceRoleInput" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.serviceRoleInput"></a>

```go
func ServiceRoleInput() *string
```

- *Type:* *string

---

##### `SingleSignOnInput`<sup>Optional</sup> <a name="SingleSignOnInput" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.singleSignOnInput"></a>

```go
func SingleSignOnInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainExecutionRole`<sup>Required</sup> <a name="DomainExecutionRole" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.domainExecutionRole"></a>

```go
func DomainExecutionRole() *string
```

- *Type:* *string

---

##### `DomainVersion`<sup>Required</sup> <a name="DomainVersion" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.domainVersion"></a>

```go
func DomainVersion() *string
```

- *Type:* *string

---

##### `KmsKeyIdentifier`<sup>Required</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.kmsKeyIdentifier"></a>

```go
func KmsKeyIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceRole`<sup>Required</sup> <a name="ServiceRole" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.serviceRole"></a>

```go
func ServiceRole() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneDomainConfig <a name="DatazoneDomainConfig" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedomain"

&datazonedomain.DatazoneDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	DomainExecutionRole: *string,
	DomainVersion: *string,
	KmsKeyIdentifier: *string,
	ServiceRole: *string,
	SingleSignOn: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datazoneDomain.DatazoneDomainSingleSignOn,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.name">Name</a></code> | <code>*string</code> | The name of the Amazon DataZone domain. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.description">Description</a></code> | <code>*string</code> | The description of the Amazon DataZone domain. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.domainExecutionRole">DomainExecutionRole</a></code> | <code>*string</code> | The domain execution role that is created when an Amazon DataZone domain is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.domainVersion">DomainVersion</a></code> | <code>*string</code> | The version of the domain. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | The identifier of the AWS Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.serviceRole">ServiceRole</a></code> | <code>*string</code> | The service role of the domain that is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.singleSignOn">SingleSignOn</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a></code> | The single-sign on configuration of the Amazon DataZone domain. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags specified for the Amazon DataZone domain. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the Amazon DataZone domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#name DatazoneDomain#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the Amazon DataZone domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#description DatazoneDomain#description}

---

##### `DomainExecutionRole`<sup>Optional</sup> <a name="DomainExecutionRole" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.domainExecutionRole"></a>

```go
DomainExecutionRole *string
```

- *Type:* *string

The domain execution role that is created when an Amazon DataZone domain is created.

The domain execution role is created in the AWS account that houses the Amazon DataZone domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#domain_execution_role DatazoneDomain#domain_execution_role}

---

##### `DomainVersion`<sup>Optional</sup> <a name="DomainVersion" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.domainVersion"></a>

```go
DomainVersion *string
```

- *Type:* *string

The version of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#domain_version DatazoneDomain#domain_version}

---

##### `KmsKeyIdentifier`<sup>Optional</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.kmsKeyIdentifier"></a>

```go
KmsKeyIdentifier *string
```

- *Type:* *string

The identifier of the AWS Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#kms_key_identifier DatazoneDomain#kms_key_identifier}

---

##### `ServiceRole`<sup>Optional</sup> <a name="ServiceRole" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.serviceRole"></a>

```go
ServiceRole *string
```

- *Type:* *string

The service role of the domain that is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#service_role DatazoneDomain#service_role}

---

##### `SingleSignOn`<sup>Optional</sup> <a name="SingleSignOn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.singleSignOn"></a>

```go
SingleSignOn DatazoneDomainSingleSignOn
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOn">DatazoneDomainSingleSignOn</a>

The single-sign on configuration of the Amazon DataZone domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#single_sign_on DatazoneDomain#single_sign_on}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags specified for the Amazon DataZone domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#tags DatazoneDomain#tags}

---

### DatazoneDomainSingleSignOn <a name="DatazoneDomainSingleSignOn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedomain"

&datazonedomain.DatazoneDomainSingleSignOn {
	IdcInstanceArn: *string,
	Type: *string,
	UserAssignment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOn.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>*string</code> | The ARN of the AWS Identity Center instance. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOn.property.type">Type</a></code> | <code>*string</code> | The type of single sign-on in Amazon DataZone. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOn.property.userAssignment">UserAssignment</a></code> | <code>*string</code> | The single sign-on user assignment in Amazon DataZone. |

---

##### `IdcInstanceArn`<sup>Optional</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOn.property.idcInstanceArn"></a>

```go
IdcInstanceArn *string
```

- *Type:* *string

The ARN of the AWS Identity Center instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#idc_instance_arn DatazoneDomain#idc_instance_arn}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOn.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of single sign-on in Amazon DataZone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#type DatazoneDomain#type}

---

##### `UserAssignment`<sup>Optional</sup> <a name="UserAssignment" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOn.property.userAssignment"></a>

```go
UserAssignment *string
```

- *Type:* *string

The single sign-on user assignment in Amazon DataZone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#user_assignment DatazoneDomain#user_assignment}

---

### DatazoneDomainTags <a name="DatazoneDomainTags" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedomain"

&datazonedomain.DatazoneDomainTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#key DatazoneDomain#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/datazone_domain#value DatazoneDomain#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneDomainSingleSignOnOutputReference <a name="DatazoneDomainSingleSignOnOutputReference" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedomain"

datazonedomain.NewDatazoneDomainSingleSignOnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatazoneDomainSingleSignOnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetIdcInstanceArn">ResetIdcInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetUserAssignment">ResetUserAssignment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdcInstanceArn` <a name="ResetIdcInstanceArn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetIdcInstanceArn"></a>

```go
func ResetIdcInstanceArn()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUserAssignment` <a name="ResetUserAssignment" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.resetUserAssignment"></a>

```go
func ResetUserAssignment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.idcInstanceArnInput">IdcInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignmentInput">UserAssignmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.idcInstanceArn">IdcInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignment">UserAssignment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdcInstanceArnInput`<sup>Optional</sup> <a name="IdcInstanceArnInput" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.idcInstanceArnInput"></a>

```go
func IdcInstanceArnInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserAssignmentInput`<sup>Optional</sup> <a name="UserAssignmentInput" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignmentInput"></a>

```go
func UserAssignmentInput() *string
```

- *Type:* *string

---

##### `IdcInstanceArn`<sup>Required</sup> <a name="IdcInstanceArn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.idcInstanceArn"></a>

```go
func IdcInstanceArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserAssignment`<sup>Required</sup> <a name="UserAssignment" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.userAssignment"></a>

```go
func UserAssignment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainSingleSignOnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDomainTagsList <a name="DatazoneDomainTagsList" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedomain"

datazonedomain.NewDatazoneDomainTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatazoneDomainTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.get"></a>

```go
func Get(index *f64) DatazoneDomainTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatazoneDomainTagsOutputReference <a name="DatazoneDomainTagsOutputReference" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datazonedomain"

datazonedomain.NewDatazoneDomainTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatazoneDomainTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datazoneDomain.DatazoneDomainTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



