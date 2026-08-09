# `dataAwsccIotsitewiseAsset` Submodule <a name="`dataAwsccIotsitewiseAsset` Submodule" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotsitewiseAsset <a name="DataAwsccIotsitewiseAsset" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotsitewise_asset awscc_iotsitewise_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

dataawscciotsitewiseasset.NewDataAwsccIotsitewiseAsset(scope Construct, id *string, config DataAwsccIotsitewiseAssetConfig) DataAwsccIotsitewiseAsset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig">DataAwsccIotsitewiseAssetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig">DataAwsccIotsitewiseAssetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotsitewiseAsset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

dataawscciotsitewiseasset.DataAwsccIotsitewiseAsset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

dataawscciotsitewiseasset.DataAwsccIotsitewiseAsset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

dataawscciotsitewiseasset.DataAwsccIotsitewiseAsset_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

dataawscciotsitewiseasset.DataAwsccIotsitewiseAsset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccIotsitewiseAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccIotsitewiseAsset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccIotsitewiseAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotsitewise_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotsitewiseAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetArn">AssetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetDescription">AssetDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetExternalId">AssetExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetHierarchies">AssetHierarchies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList">DataAwsccIotsitewiseAssetAssetHierarchiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetId">AssetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetModelId">AssetModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetName">AssetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetProperties">AssetProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList">DataAwsccIotsitewiseAssetAssetPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList">DataAwsccIotsitewiseAssetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `AssetArn`<sup>Required</sup> <a name="AssetArn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetArn"></a>

```go
func AssetArn() *string
```

- *Type:* *string

---

##### `AssetDescription`<sup>Required</sup> <a name="AssetDescription" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetDescription"></a>

```go
func AssetDescription() *string
```

- *Type:* *string

---

##### `AssetExternalId`<sup>Required</sup> <a name="AssetExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetExternalId"></a>

```go
func AssetExternalId() *string
```

- *Type:* *string

---

##### `AssetHierarchies`<sup>Required</sup> <a name="AssetHierarchies" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetHierarchies"></a>

```go
func AssetHierarchies() DataAwsccIotsitewiseAssetAssetHierarchiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList">DataAwsccIotsitewiseAssetAssetHierarchiesList</a>

---

##### `AssetId`<sup>Required</sup> <a name="AssetId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetId"></a>

```go
func AssetId() *string
```

- *Type:* *string

---

##### `AssetModelId`<sup>Required</sup> <a name="AssetModelId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetModelId"></a>

```go
func AssetModelId() *string
```

- *Type:* *string

---

##### `AssetName`<sup>Required</sup> <a name="AssetName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetName"></a>

```go
func AssetName() *string
```

- *Type:* *string

---

##### `AssetProperties`<sup>Required</sup> <a name="AssetProperties" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetProperties"></a>

```go
func AssetProperties() DataAwsccIotsitewiseAssetAssetPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList">DataAwsccIotsitewiseAssetAssetPropertiesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.tags"></a>

```go
func Tags() DataAwsccIotsitewiseAssetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList">DataAwsccIotsitewiseAssetTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotsitewiseAssetAssetHierarchies <a name="DataAwsccIotsitewiseAssetAssetHierarchies" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchies.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

&dataawscciotsitewiseasset.DataAwsccIotsitewiseAssetAssetHierarchies {

}
```


### DataAwsccIotsitewiseAssetAssetProperties <a name="DataAwsccIotsitewiseAssetAssetProperties" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

&dataawscciotsitewiseasset.DataAwsccIotsitewiseAssetAssetProperties {

}
```


### DataAwsccIotsitewiseAssetConfig <a name="DataAwsccIotsitewiseAssetConfig" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

&dataawscciotsitewiseasset.DataAwsccIotsitewiseAssetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/iotsitewise_asset#id DataAwsccIotsitewiseAsset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotsitewiseAssetTags <a name="DataAwsccIotsitewiseAssetTags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

&dataawscciotsitewiseasset.DataAwsccIotsitewiseAssetTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotsitewiseAssetAssetHierarchiesList <a name="DataAwsccIotsitewiseAssetAssetHierarchiesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

dataawscciotsitewiseasset.NewDataAwsccIotsitewiseAssetAssetHierarchiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotsitewiseAssetAssetHierarchiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.get"></a>

```go
func Get(index *f64) DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference <a name="DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

dataawscciotsitewiseasset.NewDataAwsccIotsitewiseAssetAssetHierarchiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetId">ChildAssetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.logicalId">LogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchies">DataAwsccIotsitewiseAssetAssetHierarchies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChildAssetId`<sup>Required</sup> <a name="ChildAssetId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetId"></a>

```go
func ChildAssetId() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogicalId`<sup>Required</sup> <a name="LogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.logicalId"></a>

```go
func LogicalId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotsitewiseAssetAssetHierarchies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchies">DataAwsccIotsitewiseAssetAssetHierarchies</a>

---


### DataAwsccIotsitewiseAssetAssetPropertiesList <a name="DataAwsccIotsitewiseAssetAssetPropertiesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

dataawscciotsitewiseasset.NewDataAwsccIotsitewiseAssetAssetPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotsitewiseAssetAssetPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.get"></a>

```go
func Get(index *f64) DataAwsccIotsitewiseAssetAssetPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotsitewiseAssetAssetPropertiesOutputReference <a name="DataAwsccIotsitewiseAssetAssetPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

dataawscciotsitewiseasset.NewDataAwsccIotsitewiseAssetAssetPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotsitewiseAssetAssetPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.externalId">ExternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.logicalId">LogicalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.notificationState">NotificationState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetProperties">DataAwsccIotsitewiseAssetAssetProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.externalId"></a>

```go
func ExternalId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogicalId`<sup>Required</sup> <a name="LogicalId" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.logicalId"></a>

```go
func LogicalId() *string
```

- *Type:* *string

---

##### `NotificationState`<sup>Required</sup> <a name="NotificationState" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.notificationState"></a>

```go
func NotificationState() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotsitewiseAssetAssetProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetProperties">DataAwsccIotsitewiseAssetAssetProperties</a>

---


### DataAwsccIotsitewiseAssetTagsList <a name="DataAwsccIotsitewiseAssetTagsList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

dataawscciotsitewiseasset.NewDataAwsccIotsitewiseAssetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccIotsitewiseAssetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.get"></a>

```go
func Get(index *f64) DataAwsccIotsitewiseAssetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccIotsitewiseAssetTagsOutputReference <a name="DataAwsccIotsitewiseAssetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscciotsitewiseasset"

dataawscciotsitewiseasset.NewDataAwsccIotsitewiseAssetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccIotsitewiseAssetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTags">DataAwsccIotsitewiseAssetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccIotsitewiseAssetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTags">DataAwsccIotsitewiseAssetTags</a>

---



