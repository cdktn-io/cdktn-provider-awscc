# `securitylakeAwsLogSource` Submodule <a name="`securitylakeAwsLogSource` Submodule" id="@cdktn/provider-awscc.securitylakeAwsLogSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeAwsLogSource <a name="SecuritylakeAwsLogSource" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_aws_log_source awscc_securitylake_aws_log_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakeawslogsource"

securitylakeawslogsource.NewSecuritylakeAwsLogSource(scope Construct, id *string, config SecuritylakeAwsLogSourceConfig) SecuritylakeAwsLogSource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig">SecuritylakeAwsLogSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig">SecuritylakeAwsLogSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetAccounts">ResetAccounts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAccounts` <a name="ResetAccounts" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.resetAccounts"></a>

```go
func ResetAccounts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecuritylakeAwsLogSource resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakeawslogsource"

securitylakeawslogsource.SecuritylakeAwsLogSource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakeawslogsource"

securitylakeawslogsource.SecuritylakeAwsLogSource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakeawslogsource"

securitylakeawslogsource.SecuritylakeAwsLogSource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakeawslogsource"

securitylakeawslogsource.SecuritylakeAwsLogSource_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecuritylakeAwsLogSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecuritylakeAwsLogSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecuritylakeAwsLogSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_aws_log_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecuritylakeAwsLogSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.accountsInput">AccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dataLakeArnInput">DataLakeArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceNameInput">SourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceVersionInput">SourceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.accounts">Accounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dataLakeArn">DataLakeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccountsInput`<sup>Optional</sup> <a name="AccountsInput" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.accountsInput"></a>

```go
func AccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataLakeArnInput`<sup>Optional</sup> <a name="DataLakeArnInput" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dataLakeArnInput"></a>

```go
func DataLakeArnInput() *string
```

- *Type:* *string

---

##### `SourceNameInput`<sup>Optional</sup> <a name="SourceNameInput" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceNameInput"></a>

```go
func SourceNameInput() *string
```

- *Type:* *string

---

##### `SourceVersionInput`<sup>Optional</sup> <a name="SourceVersionInput" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceVersionInput"></a>

```go
func SourceVersionInput() *string
```

- *Type:* *string

---

##### `Accounts`<sup>Required</sup> <a name="Accounts" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.accounts"></a>

```go
func Accounts() *[]*string
```

- *Type:* *[]*string

---

##### `DataLakeArn`<sup>Required</sup> <a name="DataLakeArn" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.dataLakeArn"></a>

```go
func DataLakeArn() *string
```

- *Type:* *string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.sourceVersion"></a>

```go
func SourceVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeAwsLogSourceConfig <a name="SecuritylakeAwsLogSourceConfig" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakeawslogsource"

&securitylakeawslogsource.SecuritylakeAwsLogSourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataLakeArn: *string,
	SourceName: *string,
	SourceVersion: *string,
	Accounts: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dataLakeArn">DataLakeArn</a></code> | <code>*string</code> | The ARN for the data lake. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.sourceName">SourceName</a></code> | <code>*string</code> | The name for a AWS source. This must be a Regionally unique value. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.sourceVersion">SourceVersion</a></code> | <code>*string</code> | The version for a AWS source. This must be a Regionally unique value. |
| <code><a href="#@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.accounts">Accounts</a></code> | <code>*[]*string</code> | AWS account where you want to collect logs from. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataLakeArn`<sup>Required</sup> <a name="DataLakeArn" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.dataLakeArn"></a>

```go
DataLakeArn *string
```

- *Type:* *string

The ARN for the data lake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_aws_log_source#data_lake_arn SecuritylakeAwsLogSource#data_lake_arn}

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.sourceName"></a>

```go
SourceName *string
```

- *Type:* *string

The name for a AWS source. This must be a Regionally unique value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_aws_log_source#source_name SecuritylakeAwsLogSource#source_name}

---

##### `SourceVersion`<sup>Required</sup> <a name="SourceVersion" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.sourceVersion"></a>

```go
SourceVersion *string
```

- *Type:* *string

The version for a AWS source. This must be a Regionally unique value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_aws_log_source#source_version SecuritylakeAwsLogSource#source_version}

---

##### `Accounts`<sup>Optional</sup> <a name="Accounts" id="@cdktn/provider-awscc.securitylakeAwsLogSource.SecuritylakeAwsLogSourceConfig.property.accounts"></a>

```go
Accounts *[]*string
```

- *Type:* *[]*string

AWS account where you want to collect logs from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/securitylake_aws_log_source#accounts SecuritylakeAwsLogSource#accounts}

---



