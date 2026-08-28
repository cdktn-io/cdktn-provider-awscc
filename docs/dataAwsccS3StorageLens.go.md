# `dataAwsccS3StorageLens` Submodule <a name="`dataAwsccS3StorageLens` Submodule" id="@cdktn/provider-awscc.dataAwsccS3StorageLens"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccS3StorageLens <a name="DataAwsccS3StorageLens" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/s3_storage_lens awscc_s3_storage_lens}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLens(scope Construct, id *string, config DataAwsccS3StorageLensConfig) DataAwsccS3StorageLens
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig">DataAwsccS3StorageLensConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig">DataAwsccS3StorageLensConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccS3StorageLens resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.DataAwsccS3StorageLens_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.DataAwsccS3StorageLens_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.DataAwsccS3StorageLens_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.DataAwsccS3StorageLens_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccS3StorageLens resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccS3StorageLens to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccS3StorageLens that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/s3_storage_lens#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccS3StorageLens to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.storageLensConfiguration">StorageLensConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList">DataAwsccS3StorageLensTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `StorageLensConfiguration`<sup>Required</sup> <a name="StorageLensConfiguration" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.storageLensConfiguration"></a>

```go
func StorageLensConfiguration() DataAwsccS3StorageLensStorageLensConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.tags"></a>

```go
func Tags() DataAwsccS3StorageLensTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList">DataAwsccS3StorageLensTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLens.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccS3StorageLensConfig <a name="DataAwsccS3StorageLensConfig" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/s3_storage_lens#id DataAwsccS3StorageLens#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccS3StorageLensStorageLensConfiguration <a name="DataAwsccS3StorageLensStorageLensConfiguration" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfiguration {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevel <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevel {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationAwsOrg <a name="DataAwsccS3StorageLensStorageLensConfigurationAwsOrg" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrg"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrg.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrg {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExport <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExport" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExport.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationDataExport {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationExclude <a name="DataAwsccS3StorageLensStorageLensConfigurationExclude" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExclude.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationExclude {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms {

}
```


### DataAwsccS3StorageLensStorageLensConfigurationInclude <a name="DataAwsccS3StorageLensStorageLensConfigurationInclude" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationInclude.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensStorageLensConfigurationInclude {

}
```


### DataAwsccS3StorageLensTags <a name="DataAwsccS3StorageLensTags" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

&dataawsccs3storagelens.DataAwsccS3StorageLensTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetrics">ActivityMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetrics">AdvancedCostOptimizationMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetrics">AdvancedDataProtectionMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetrics">AdvancedPerformanceMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetrics">DetailedStatusCodesMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevel">PrefixLevel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActivityMetrics`<sup>Required</sup> <a name="ActivityMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.activityMetrics"></a>

```go
func ActivityMetrics() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelActivityMetricsOutputReference</a>

---

##### `AdvancedCostOptimizationMetrics`<sup>Required</sup> <a name="AdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedCostOptimizationMetrics"></a>

```go
func AdvancedCostOptimizationMetrics() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedCostOptimizationMetricsOutputReference</a>

---

##### `AdvancedDataProtectionMetrics`<sup>Required</sup> <a name="AdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedDataProtectionMetrics"></a>

```go
func AdvancedDataProtectionMetrics() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedDataProtectionMetricsOutputReference</a>

---

##### `AdvancedPerformanceMetrics`<sup>Required</sup> <a name="AdvancedPerformanceMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.advancedPerformanceMetrics"></a>

```go
func AdvancedPerformanceMetrics() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelAdvancedPerformanceMetricsOutputReference</a>

---

##### `DetailedStatusCodesMetrics`<sup>Required</sup> <a name="DetailedStatusCodesMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.detailedStatusCodesMetrics"></a>

```go
func DetailedStatusCodesMetrics() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelDetailedStatusCodesMetricsOutputReference</a>

---

##### `PrefixLevel`<sup>Required</sup> <a name="PrefixLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.prefixLevel"></a>

```go
func PrefixLevel() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevel</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetrics">StorageMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageMetrics`<sup>Required</sup> <a name="StorageMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.storageMetrics"></a>

```go
func StorageMetrics() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevel</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteria">SelectionCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `SelectionCriteria`<sup>Required</sup> <a name="SelectionCriteria" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.selectionCriteria"></a>

```go
func SelectionCriteria() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepth">MaxDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentage">MinStorageBytesPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `MaxDepth`<sup>Required</sup> <a name="MaxDepth" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.maxDepth"></a>

```go
func MaxDepth() *f64
```

- *Type:* *f64

---

##### `MinStorageBytesPercentage`<sup>Required</sup> <a name="MinStorageBytesPercentage" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.minStorageBytesPercentage"></a>

```go
func MinStorageBytesPercentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelPrefixLevelStorageMetricsSelectionCriteria</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetrics">ActivityMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetrics">AdvancedCostOptimizationMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetrics">AdvancedDataProtectionMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetrics">AdvancedPerformanceMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevel">BucketLevel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetrics">DetailedStatusCodesMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevel">StorageLensGroupLevel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActivityMetrics`<sup>Required</sup> <a name="ActivityMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.activityMetrics"></a>

```go
func ActivityMetrics() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelActivityMetricsOutputReference</a>

---

##### `AdvancedCostOptimizationMetrics`<sup>Required</sup> <a name="AdvancedCostOptimizationMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedCostOptimizationMetrics"></a>

```go
func AdvancedCostOptimizationMetrics() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedCostOptimizationMetricsOutputReference</a>

---

##### `AdvancedDataProtectionMetrics`<sup>Required</sup> <a name="AdvancedDataProtectionMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedDataProtectionMetrics"></a>

```go
func AdvancedDataProtectionMetrics() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedDataProtectionMetricsOutputReference</a>

---

##### `AdvancedPerformanceMetrics`<sup>Required</sup> <a name="AdvancedPerformanceMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.advancedPerformanceMetrics"></a>

```go
func AdvancedPerformanceMetrics() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelAdvancedPerformanceMetricsOutputReference</a>

---

##### `BucketLevel`<sup>Required</sup> <a name="BucketLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.bucketLevel"></a>

```go
func BucketLevel() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelBucketLevelOutputReference</a>

---

##### `DetailedStatusCodesMetrics`<sup>Required</sup> <a name="DetailedStatusCodesMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.detailedStatusCodesMetrics"></a>

```go
func DetailedStatusCodesMetrics() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelDetailedStatusCodesMetricsOutputReference</a>

---

##### `StorageLensGroupLevel`<sup>Required</sup> <a name="StorageLensGroupLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.storageLensGroupLevel"></a>

```go
func StorageLensGroupLevel() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevel</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteria">StorageLensGroupSelectionCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StorageLensGroupSelectionCriteria`<sup>Required</sup> <a name="StorageLensGroupSelectionCriteria" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.storageLensGroupSelectionCriteria"></a>

```go
func StorageLensGroupSelectionCriteria() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevel</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.exclude">Exclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.include">Include</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.exclude"></a>

```go
func Exclude() *[]*string
```

- *Type:* *[]*string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.include"></a>

```go
func Include() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelStorageLensGroupLevelStorageLensGroupSelectionCriteria</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrg">DataAwsccS3StorageLensStorageLensConfigurationAwsOrg</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationAwsOrg
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrg">DataAwsccS3StorageLensStorageLensConfigurationAwsOrg</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics">DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetrics</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetrics">CloudwatchMetrics</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestination">S3BucketDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestination">StorageLensTableDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExport">DataAwsccS3StorageLensStorageLensConfigurationDataExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchMetrics`<sup>Required</sup> <a name="CloudwatchMetrics" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.cloudwatchMetrics"></a>

```go
func CloudwatchMetrics() DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportCloudwatchMetricsOutputReference</a>

---

##### `S3BucketDestination`<sup>Required</sup> <a name="S3BucketDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.s3BucketDestination"></a>

```go
func S3BucketDestination() DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference</a>

---

##### `StorageLensTableDestination`<sup>Required</sup> <a name="StorageLensTableDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.storageLensTableDestination"></a>

```go
func StorageLensTableDestination() DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationDataExport
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExport">DataAwsccS3StorageLensStorageLensConfigurationDataExport</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms">Ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3">Sses3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ssekms`<sup>Required</sup> <a name="Ssekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms"></a>

```go
func Ssekms() DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a>

---

##### `Sses3`<sup>Required</sup> <a name="Sses3" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.sses3"></a>

```go
func Sses3() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryption</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionSsekms</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion">OutputSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.encryption"></a>

```go
func Encryption() DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationEncryptionOutputReference</a>

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `OutputSchemaVersion`<sup>Required</sup> <a name="OutputSchemaVersion" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion"></a>

```go
func OutputSchemaVersion() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination">DataAwsccS3StorageLensStorageLensConfigurationDataExportS3BucketDestination</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms">Ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3">Sses3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ssekms`<sup>Required</sup> <a name="Ssekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms"></a>

```go
func Ssekms() DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a>

---

##### `Sses3`<sup>Required</sup> <a name="Sses3" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3"></a>

```go
func Sses3() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryption</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionSsekms</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.encryption"></a>

```go
func Encryption() DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationEncryptionOutputReference</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination">DataAwsccS3StorageLensStorageLensConfigurationDataExportStorageLensTableDestination</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.buckets">Buckets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExclude">DataAwsccS3StorageLensStorageLensConfigurationExclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Buckets`<sup>Required</sup> <a name="Buckets" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.buckets"></a>

```go
func Buckets() *[]*string
```

- *Type:* *[]*string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationExclude
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExclude">DataAwsccS3StorageLensStorageLensConfigurationExclude</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestination">S3BucketDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestination">StorageLensTableDestination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3BucketDestination`<sup>Required</sup> <a name="S3BucketDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.s3BucketDestination"></a>

```go
func S3BucketDestination() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference</a>

---

##### `StorageLensTableDestination`<sup>Required</sup> <a name="StorageLensTableDestination" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.storageLensTableDestination"></a>

```go
func StorageLensTableDestination() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExport</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms">Ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3">Sses3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ssekms`<sup>Required</sup> <a name="Ssekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.ssekms"></a>

```go
func Ssekms() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference</a>

---

##### `Sses3`<sup>Required</sup> <a name="Sses3" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.sses3"></a>

```go
func Sses3() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryption</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionSsekms</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion">OutputSchemaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.encryption"></a>

```go
func Encryption() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationEncryptionOutputReference</a>

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `OutputSchemaVersion`<sup>Required</sup> <a name="OutputSchemaVersion" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.outputSchemaVersion"></a>

```go
func OutputSchemaVersion() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportS3BucketDestination</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms">Ssekms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3">Sses3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ssekms`<sup>Required</sup> <a name="Ssekms" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.ssekms"></a>

```go
func Ssekms() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference</a>

---

##### `Sses3`<sup>Required</sup> <a name="Sses3" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.sses3"></a>

```go
func Sses3() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryption</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekmsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionSsekms</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.encryption"></a>

```go
func Encryption() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationEncryptionOutputReference</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportStorageLensTableDestination</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.buckets">Buckets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationInclude">DataAwsccS3StorageLensStorageLensConfigurationInclude</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Buckets`<sup>Required</sup> <a name="Buckets" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.buckets"></a>

```go
func Buckets() *[]*string
```

- *Type:* *[]*string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfigurationInclude
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationInclude">DataAwsccS3StorageLensStorageLensConfigurationInclude</a>

---


### DataAwsccS3StorageLensStorageLensConfigurationOutputReference <a name="DataAwsccS3StorageLensStorageLensConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensStorageLensConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccS3StorageLensStorageLensConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.accountLevel">AccountLevel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.awsOrg">AwsOrg</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.dataExport">DataExport</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.exclude">Exclude</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExport">ExpandedPrefixesDataExport</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.include">Include</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference">DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiter">PrefixDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.storageLensArn">StorageLensArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfiguration">DataAwsccS3StorageLensStorageLensConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountLevel`<sup>Required</sup> <a name="AccountLevel" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.accountLevel"></a>

```go
func AccountLevel() DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAccountLevelOutputReference</a>

---

##### `AwsOrg`<sup>Required</sup> <a name="AwsOrg" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.awsOrg"></a>

```go
func AwsOrg() DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference">DataAwsccS3StorageLensStorageLensConfigurationAwsOrgOutputReference</a>

---

##### `DataExport`<sup>Required</sup> <a name="DataExport" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.dataExport"></a>

```go
func DataExport() DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference">DataAwsccS3StorageLensStorageLensConfigurationDataExportOutputReference</a>

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.exclude"></a>

```go
func Exclude() DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExcludeOutputReference</a>

---

##### `ExpandedPrefixesDataExport`<sup>Required</sup> <a name="ExpandedPrefixesDataExport" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.expandedPrefixesDataExport"></a>

```go
func ExpandedPrefixesDataExport() DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference">DataAwsccS3StorageLensStorageLensConfigurationExpandedPrefixesDataExportOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.include"></a>

```go
func Include() DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference">DataAwsccS3StorageLensStorageLensConfigurationIncludeOutputReference</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `PrefixDelimiter`<sup>Required</sup> <a name="PrefixDelimiter" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.prefixDelimiter"></a>

```go
func PrefixDelimiter() *string
```

- *Type:* *string

---

##### `StorageLensArn`<sup>Required</sup> <a name="StorageLensArn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.storageLensArn"></a>

```go
func StorageLensArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensStorageLensConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensStorageLensConfiguration">DataAwsccS3StorageLensStorageLensConfiguration</a>

---


### DataAwsccS3StorageLensTagsList <a name="DataAwsccS3StorageLensTagsList" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccS3StorageLensTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.get"></a>

```go
func Get(index *f64) DataAwsccS3StorageLensTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccS3StorageLensTagsOutputReference <a name="DataAwsccS3StorageLensTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccs3storagelens"

dataawsccs3storagelens.NewDataAwsccS3StorageLensTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccS3StorageLensTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTags">DataAwsccS3StorageLensTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccS3StorageLensTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccS3StorageLens.DataAwsccS3StorageLensTags">DataAwsccS3StorageLensTags</a>

---



