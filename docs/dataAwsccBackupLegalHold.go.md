# `dataAwsccBackupLegalHold` Submodule <a name="`dataAwsccBackupLegalHold` Submodule" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccBackupLegalHold <a name="DataAwsccBackupLegalHold" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_legal_hold awscc_backup_legal_hold}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplegalhold"

dataawsccbackuplegalhold.NewDataAwsccBackupLegalHold(scope Construct, id *string, config DataAwsccBackupLegalHoldConfig) DataAwsccBackupLegalHold
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig">DataAwsccBackupLegalHoldConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig">DataAwsccBackupLegalHoldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccBackupLegalHold resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplegalhold"

dataawsccbackuplegalhold.DataAwsccBackupLegalHold_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplegalhold"

dataawsccbackuplegalhold.DataAwsccBackupLegalHold_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplegalhold"

dataawsccbackuplegalhold.DataAwsccBackupLegalHold_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplegalhold"

dataawsccbackuplegalhold.DataAwsccBackupLegalHold_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccBackupLegalHold resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccBackupLegalHold to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccBackupLegalHold that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_legal_hold#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccBackupLegalHold to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.creationDate">CreationDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.legalHoldId">LegalHoldId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.recoveryPointSelection">RecoveryPointSelection</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference">DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList">DataAwsccBackupLegalHoldTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationDate`<sup>Required</sup> <a name="CreationDate" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.creationDate"></a>

```go
func CreationDate() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `LegalHoldId`<sup>Required</sup> <a name="LegalHoldId" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.legalHoldId"></a>

```go
func LegalHoldId() *string
```

- *Type:* *string

---

##### `RecoveryPointSelection`<sup>Required</sup> <a name="RecoveryPointSelection" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.recoveryPointSelection"></a>

```go
func RecoveryPointSelection() DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference">DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.tags"></a>

```go
func Tags() DataAwsccBackupLegalHoldTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList">DataAwsccBackupLegalHoldTagsList</a>

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHold.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccBackupLegalHoldConfig <a name="DataAwsccBackupLegalHoldConfig" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplegalhold"

&dataawsccbackuplegalhold.DataAwsccBackupLegalHoldConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/backup_legal_hold#id DataAwsccBackupLegalHold#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccBackupLegalHoldRecoveryPointSelection <a name="DataAwsccBackupLegalHoldRecoveryPointSelection" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplegalhold"

&dataawsccbackuplegalhold.DataAwsccBackupLegalHoldRecoveryPointSelection {

}
```


### DataAwsccBackupLegalHoldRecoveryPointSelectionDateRange <a name="DataAwsccBackupLegalHoldRecoveryPointSelectionDateRange" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRange.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplegalhold"

&dataawsccbackuplegalhold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRange {

}
```


### DataAwsccBackupLegalHoldTags <a name="DataAwsccBackupLegalHoldTags" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplegalhold"

&dataawsccbackuplegalhold.DataAwsccBackupLegalHoldTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference <a name="DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplegalhold"

dataawsccbackuplegalhold.NewDataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDate">FromDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDate">ToDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRange">DataAwsccBackupLegalHoldRecoveryPointSelectionDateRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FromDate`<sup>Required</sup> <a name="FromDate" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.fromDate"></a>

```go
func FromDate() *string
```

- *Type:* *string

---

##### `ToDate`<sup>Required</sup> <a name="ToDate" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.toDate"></a>

```go
func ToDate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupLegalHoldRecoveryPointSelectionDateRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRange">DataAwsccBackupLegalHoldRecoveryPointSelectionDateRange</a>

---


### DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference <a name="DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplegalhold"

dataawsccbackuplegalhold.NewDataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRange">DateRange</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference">DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiers">ResourceIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNames">VaultNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelection">DataAwsccBackupLegalHoldRecoveryPointSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DateRange`<sup>Required</sup> <a name="DateRange" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.property.dateRange"></a>

```go
func DateRange() DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference">DataAwsccBackupLegalHoldRecoveryPointSelectionDateRangeOutputReference</a>

---

##### `ResourceIdentifiers`<sup>Required</sup> <a name="ResourceIdentifiers" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.property.resourceIdentifiers"></a>

```go
func ResourceIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `VaultNames`<sup>Required</sup> <a name="VaultNames" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.property.vaultNames"></a>

```go
func VaultNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupLegalHoldRecoveryPointSelection
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldRecoveryPointSelection">DataAwsccBackupLegalHoldRecoveryPointSelection</a>

---


### DataAwsccBackupLegalHoldTagsList <a name="DataAwsccBackupLegalHoldTagsList" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplegalhold"

dataawsccbackuplegalhold.NewDataAwsccBackupLegalHoldTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccBackupLegalHoldTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.get"></a>

```go
func Get(index *f64) DataAwsccBackupLegalHoldTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccBackupLegalHoldTagsOutputReference <a name="DataAwsccBackupLegalHoldTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccbackuplegalhold"

dataawsccbackuplegalhold.NewDataAwsccBackupLegalHoldTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccBackupLegalHoldTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTags">DataAwsccBackupLegalHoldTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccBackupLegalHoldTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccBackupLegalHold.DataAwsccBackupLegalHoldTags">DataAwsccBackupLegalHoldTags</a>

---



