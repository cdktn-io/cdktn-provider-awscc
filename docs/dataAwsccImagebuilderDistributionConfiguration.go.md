# `dataAwsccImagebuilderDistributionConfiguration` Submodule <a name="`dataAwsccImagebuilderDistributionConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccImagebuilderDistributionConfiguration <a name="DataAwsccImagebuilderDistributionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/imagebuilder_distribution_configuration awscc_imagebuilder_distribution_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfiguration(scope Construct, id *string, config DataAwsccImagebuilderDistributionConfigurationConfig) DataAwsccImagebuilderDistributionConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig">DataAwsccImagebuilderDistributionConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig">DataAwsccImagebuilderDistributionConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccImagebuilderDistributionConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccImagebuilderDistributionConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccImagebuilderDistributionConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccImagebuilderDistributionConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/imagebuilder_distribution_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccImagebuilderDistributionConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.distributions">Distributions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList">DataAwsccImagebuilderDistributionConfigurationDistributionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Distributions`<sup>Required</sup> <a name="Distributions" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.distributions"></a>

```go
func Distributions() DataAwsccImagebuilderDistributionConfigurationDistributionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList">DataAwsccImagebuilderDistributionConfigurationDistributionsList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccImagebuilderDistributionConfigurationConfig <a name="DataAwsccImagebuilderDistributionConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

&dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/imagebuilder_distribution_configuration#id DataAwsccImagebuilderDistributionConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccImagebuilderDistributionConfigurationDistributions <a name="DataAwsccImagebuilderDistributionConfigurationDistributions" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

&dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfigurationDistributions {

}
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

&dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration {

}
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

&dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration {

}
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

&dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration {

}
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

&dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository {

}
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

&dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations {

}
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

&dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate {

}
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

&dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration {

}
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

&dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations {

}
```


### DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

&dataawsccimagebuilderdistributionconfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationalUnitArns">OrganizationalUnitArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationArns">OrganizationArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userGroups">UserGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userIds">UserIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OrganizationalUnitArns`<sup>Required</sup> <a name="OrganizationalUnitArns" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationalUnitArns"></a>

```go
func OrganizationalUnitArns() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationArns`<sup>Required</sup> <a name="OrganizationArns" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.organizationArns"></a>

```go
func OrganizationArns() *[]*string
```

- *Type:* *[]*string

---

##### `UserGroups`<sup>Required</sup> <a name="UserGroups" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userGroups"></a>

```go
func UserGroups() *[]*string
```

- *Type:* *[]*string

---

##### `UserIds`<sup>Required</sup> <a name="UserIds" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.userIds"></a>

```go
func UserIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfiguration</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.amiTags">AmiTags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.launchPermissionConfiguration">LaunchPermissionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.targetAccountIds">TargetAccountIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmiTags`<sup>Required</sup> <a name="AmiTags" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.amiTags"></a>

```go
func AmiTags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `LaunchPermissionConfiguration`<sup>Required</sup> <a name="LaunchPermissionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.launchPermissionConfiguration"></a>

```go
func LaunchPermissionConfiguration() DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationLaunchPermissionConfigurationOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TargetAccountIds`<sup>Required</sup> <a name="TargetAccountIds" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.targetAccountIds"></a>

```go
func TargetAccountIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfiguration</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.containerTags">ContainerTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.targetRepository">TargetRepository</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerTags`<sup>Required</sup> <a name="ContainerTags" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.containerTags"></a>

```go
func ContainerTags() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `TargetRepository`<sup>Required</sup> <a name="TargetRepository" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.targetRepository"></a>

```go
func TargetRepository() DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfiguration</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName">RepositoryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryName`<sup>Required</sup> <a name="RepositoryName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName"></a>

```go
func RepositoryName() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationTargetRepository</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateName">LaunchTemplateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateVersion">LaunchTemplateVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateId"></a>

```go
func LaunchTemplateId() *string
```

- *Type:* *string

---

##### `LaunchTemplateName`<sup>Required</sup> <a name="LaunchTemplateName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateName"></a>

```go
func LaunchTemplateName() *string
```

- *Type:* *string

---

##### `LaunchTemplateVersion`<sup>Required</sup> <a name="LaunchTemplateVersion" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.launchTemplateVersion"></a>

```go
func LaunchTemplateVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplate</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.launchTemplate">LaunchTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.maxParallelLaunches">MaxParallelLaunches</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.snapshotConfiguration">SnapshotConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `LaunchTemplate`<sup>Required</sup> <a name="LaunchTemplate" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.launchTemplate"></a>

```go
func LaunchTemplate() DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsLaunchTemplateOutputReference</a>

---

##### `MaxParallelLaunches`<sup>Required</sup> <a name="MaxParallelLaunches" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.maxParallelLaunches"></a>

```go
func MaxParallelLaunches() *f64
```

- *Type:* *f64

---

##### `SnapshotConfiguration`<sup>Required</sup> <a name="SnapshotConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.snapshotConfiguration"></a>

```go
func SnapshotConfiguration() DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurations</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.targetResourceCount">TargetResourceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetResourceCount`<sup>Required</sup> <a name="TargetResourceCount" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.targetResourceCount"></a>

```go
func TargetResourceCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsSnapshotConfiguration</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.launchTemplateId">LaunchTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.setDefaultVersion">SetDefaultVersion</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `LaunchTemplateId`<sup>Required</sup> <a name="LaunchTemplateId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.launchTemplateId"></a>

```go
func LaunchTemplateId() *string
```

- *Type:* *string

---

##### `SetDefaultVersion`<sup>Required</sup> <a name="SetDefaultVersion" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.setDefaultVersion"></a>

```go
func SetDefaultVersion() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations">DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurations</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsList <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccImagebuilderDistributionConfigurationDistributionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.get"></a>

```go
func Get(index *f64) DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.amiDistributionConfiguration">AmiDistributionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.containerDistributionConfiguration">ContainerDistributionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.fastLaunchConfigurations">FastLaunchConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.launchTemplateConfigurations">LaunchTemplateConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList">DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.licenseConfigurationArns">LicenseConfigurationArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.ssmParameterConfigurations">SsmParameterConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList">DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributions">DataAwsccImagebuilderDistributionConfigurationDistributions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmiDistributionConfiguration`<sup>Required</sup> <a name="AmiDistributionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.amiDistributionConfiguration"></a>

```go
func AmiDistributionConfiguration() DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsAmiDistributionConfigurationOutputReference</a>

---

##### `ContainerDistributionConfiguration`<sup>Required</sup> <a name="ContainerDistributionConfiguration" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.containerDistributionConfiguration"></a>

```go
func ContainerDistributionConfiguration() DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference">DataAwsccImagebuilderDistributionConfigurationDistributionsContainerDistributionConfigurationOutputReference</a>

---

##### `FastLaunchConfigurations`<sup>Required</sup> <a name="FastLaunchConfigurations" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.fastLaunchConfigurations"></a>

```go
func FastLaunchConfigurations() DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList">DataAwsccImagebuilderDistributionConfigurationDistributionsFastLaunchConfigurationsList</a>

---

##### `LaunchTemplateConfigurations`<sup>Required</sup> <a name="LaunchTemplateConfigurations" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.launchTemplateConfigurations"></a>

```go
func LaunchTemplateConfigurations() DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList">DataAwsccImagebuilderDistributionConfigurationDistributionsLaunchTemplateConfigurationsList</a>

---

##### `LicenseConfigurationArns`<sup>Required</sup> <a name="LicenseConfigurationArns" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.licenseConfigurationArns"></a>

```go
func LicenseConfigurationArns() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SsmParameterConfigurations`<sup>Required</sup> <a name="SsmParameterConfigurations" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.ssmParameterConfigurations"></a>

```go
func SsmParameterConfigurations() DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList">DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccImagebuilderDistributionConfigurationDistributions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributions">DataAwsccImagebuilderDistributionConfigurationDistributions</a>

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.get"></a>

```go
func Get(index *f64) DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference <a name="DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccimagebuilderdistributionconfiguration"

dataawsccimagebuilderdistributionconfiguration.NewDataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.amiAccountId">AmiAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.parameterName">ParameterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AmiAccountId`<sup>Required</sup> <a name="AmiAccountId" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.amiAccountId"></a>

```go
func AmiAccountId() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `ParameterName`<sup>Required</sup> <a name="ParameterName" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.parameterName"></a>

```go
func ParameterName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccImagebuilderDistributionConfiguration.DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations">DataAwsccImagebuilderDistributionConfigurationDistributionsSsmParameterConfigurations</a>

---



