# `dataAwsccSesConfigurationSet` Submodule <a name="`dataAwsccSesConfigurationSet` Submodule" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSesConfigurationSet <a name="DataAwsccSesConfigurationSet" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_configuration_set awscc_ses_configuration_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSet(scope Construct, id *string, config DataAwsccSesConfigurationSetConfig) DataAwsccSesConfigurationSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig">DataAwsccSesConfigurationSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig">DataAwsccSesConfigurationSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSesConfigurationSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.DataAwsccSesConfigurationSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.DataAwsccSesConfigurationSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.DataAwsccSesConfigurationSet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.DataAwsccSesConfigurationSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSesConfigurationSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSesConfigurationSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSesConfigurationSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_configuration_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSesConfigurationSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.archivingOptions">ArchivingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference">DataAwsccSesConfigurationSetArchivingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.deliveryOptions">DeliveryOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference">DataAwsccSesConfigurationSetDeliveryOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.reputationOptions">ReputationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference">DataAwsccSesConfigurationSetReputationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.sendingOptions">SendingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference">DataAwsccSesConfigurationSetSendingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.suppressionOptions">SuppressionOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference">DataAwsccSesConfigurationSetSuppressionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList">DataAwsccSesConfigurationSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.trackingOptions">TrackingOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference">DataAwsccSesConfigurationSetTrackingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.vdmOptions">VdmOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference">DataAwsccSesConfigurationSetVdmOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ArchivingOptions`<sup>Required</sup> <a name="ArchivingOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.archivingOptions"></a>

```go
func ArchivingOptions() DataAwsccSesConfigurationSetArchivingOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference">DataAwsccSesConfigurationSetArchivingOptionsOutputReference</a>

---

##### `DeliveryOptions`<sup>Required</sup> <a name="DeliveryOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.deliveryOptions"></a>

```go
func DeliveryOptions() DataAwsccSesConfigurationSetDeliveryOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference">DataAwsccSesConfigurationSetDeliveryOptionsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReputationOptions`<sup>Required</sup> <a name="ReputationOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.reputationOptions"></a>

```go
func ReputationOptions() DataAwsccSesConfigurationSetReputationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference">DataAwsccSesConfigurationSetReputationOptionsOutputReference</a>

---

##### `SendingOptions`<sup>Required</sup> <a name="SendingOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.sendingOptions"></a>

```go
func SendingOptions() DataAwsccSesConfigurationSetSendingOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference">DataAwsccSesConfigurationSetSendingOptionsOutputReference</a>

---

##### `SuppressionOptions`<sup>Required</sup> <a name="SuppressionOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.suppressionOptions"></a>

```go
func SuppressionOptions() DataAwsccSesConfigurationSetSuppressionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference">DataAwsccSesConfigurationSetSuppressionOptionsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.tags"></a>

```go
func Tags() DataAwsccSesConfigurationSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList">DataAwsccSesConfigurationSetTagsList</a>

---

##### `TrackingOptions`<sup>Required</sup> <a name="TrackingOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.trackingOptions"></a>

```go
func TrackingOptions() DataAwsccSesConfigurationSetTrackingOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference">DataAwsccSesConfigurationSetTrackingOptionsOutputReference</a>

---

##### `VdmOptions`<sup>Required</sup> <a name="VdmOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.vdmOptions"></a>

```go
func VdmOptions() DataAwsccSesConfigurationSetVdmOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference">DataAwsccSesConfigurationSetVdmOptionsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSesConfigurationSetArchivingOptions <a name="DataAwsccSesConfigurationSetArchivingOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetArchivingOptions {

}
```


### DataAwsccSesConfigurationSetConfig <a name="DataAwsccSesConfigurationSetConfig" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ses_configuration_set#id DataAwsccSesConfigurationSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSesConfigurationSetDeliveryOptions <a name="DataAwsccSesConfigurationSetDeliveryOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetDeliveryOptions {

}
```


### DataAwsccSesConfigurationSetReputationOptions <a name="DataAwsccSesConfigurationSetReputationOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetReputationOptions {

}
```


### DataAwsccSesConfigurationSetSendingOptions <a name="DataAwsccSesConfigurationSetSendingOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetSendingOptions {

}
```


### DataAwsccSesConfigurationSetSuppressionOptions <a name="DataAwsccSesConfigurationSetSuppressionOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetSuppressionOptions {

}
```


### DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions <a name="DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions {

}
```


### DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold <a name="DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold {

}
```


### DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold <a name="DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold {

}
```


### DataAwsccSesConfigurationSetTags <a name="DataAwsccSesConfigurationSetTags" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetTags {

}
```


### DataAwsccSesConfigurationSetTrackingOptions <a name="DataAwsccSesConfigurationSetTrackingOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetTrackingOptions {

}
```


### DataAwsccSesConfigurationSetVdmOptions <a name="DataAwsccSesConfigurationSetVdmOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetVdmOptions {

}
```


### DataAwsccSesConfigurationSetVdmOptionsDashboardOptions <a name="DataAwsccSesConfigurationSetVdmOptionsDashboardOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetVdmOptionsDashboardOptions {

}
```


### DataAwsccSesConfigurationSetVdmOptionsGuardianOptions <a name="DataAwsccSesConfigurationSetVdmOptionsGuardianOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

&dataawsccsesconfigurationset.DataAwsccSesConfigurationSetVdmOptionsGuardianOptions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSesConfigurationSetArchivingOptionsOutputReference <a name="DataAwsccSesConfigurationSetArchivingOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetArchivingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesConfigurationSetArchivingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.property.archiveArn">ArchiveArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptions">DataAwsccSesConfigurationSetArchivingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchiveArn`<sup>Required</sup> <a name="ArchiveArn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.property.archiveArn"></a>

```go
func ArchiveArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesConfigurationSetArchivingOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetArchivingOptions">DataAwsccSesConfigurationSetArchivingOptions</a>

---


### DataAwsccSesConfigurationSetDeliveryOptionsOutputReference <a name="DataAwsccSesConfigurationSetDeliveryOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetDeliveryOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesConfigurationSetDeliveryOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySeconds">MaxDeliverySeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName">SendingPoolName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy">TlsPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptions">DataAwsccSesConfigurationSetDeliveryOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxDeliverySeconds`<sup>Required</sup> <a name="MaxDeliverySeconds" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.property.maxDeliverySeconds"></a>

```go
func MaxDeliverySeconds() *f64
```

- *Type:* *f64

---

##### `SendingPoolName`<sup>Required</sup> <a name="SendingPoolName" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.property.sendingPoolName"></a>

```go
func SendingPoolName() *string
```

- *Type:* *string

---

##### `TlsPolicy`<sup>Required</sup> <a name="TlsPolicy" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.property.tlsPolicy"></a>

```go
func TlsPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesConfigurationSetDeliveryOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetDeliveryOptions">DataAwsccSesConfigurationSetDeliveryOptions</a>

---


### DataAwsccSesConfigurationSetReputationOptionsOutputReference <a name="DataAwsccSesConfigurationSetReputationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetReputationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesConfigurationSetReputationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled">ReputationMetricsEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptions">DataAwsccSesConfigurationSetReputationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReputationMetricsEnabled`<sup>Required</sup> <a name="ReputationMetricsEnabled" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.property.reputationMetricsEnabled"></a>

```go
func ReputationMetricsEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesConfigurationSetReputationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetReputationOptions">DataAwsccSesConfigurationSetReputationOptions</a>

---


### DataAwsccSesConfigurationSetSendingOptionsOutputReference <a name="DataAwsccSesConfigurationSetSendingOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetSendingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesConfigurationSetSendingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.property.sendingEnabled">SendingEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptions">DataAwsccSesConfigurationSetSendingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SendingEnabled`<sup>Required</sup> <a name="SendingEnabled" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.property.sendingEnabled"></a>

```go
func SendingEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesConfigurationSetSendingOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSendingOptions">DataAwsccSesConfigurationSetSendingOptions</a>

---


### DataAwsccSesConfigurationSetSuppressionOptionsOutputReference <a name="DataAwsccSesConfigurationSetSuppressionOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetSuppressionOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesConfigurationSetSuppressionOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons">SuppressedReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.property.validationOptions">ValidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference">DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptions">DataAwsccSesConfigurationSetSuppressionOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SuppressedReasons`<sup>Required</sup> <a name="SuppressedReasons" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.property.suppressedReasons"></a>

```go
func SuppressedReasons() *[]*string
```

- *Type:* *[]*string

---

##### `ValidationOptions`<sup>Required</sup> <a name="ValidationOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.property.validationOptions"></a>

```go
func ValidationOptions() DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference">DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesConfigurationSetSuppressionOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptions">DataAwsccSesConfigurationSetSuppressionOptions</a>

---


### DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference <a name="DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabled">ConditionThresholdEnabled</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThreshold">OverallConfidenceThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference">DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionThresholdEnabled`<sup>Required</sup> <a name="ConditionThresholdEnabled" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.conditionThresholdEnabled"></a>

```go
func ConditionThresholdEnabled() *string
```

- *Type:* *string

---

##### `OverallConfidenceThreshold`<sup>Required</sup> <a name="OverallConfidenceThreshold" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.overallConfidenceThreshold"></a>

```go
func OverallConfidenceThreshold() DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference">DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold">DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThreshold</a>

---


### DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference <a name="DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThreshold">ConfidenceVerdictThreshold</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfidenceVerdictThreshold`<sup>Required</sup> <a name="ConfidenceVerdictThreshold" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.confidenceVerdictThreshold"></a>

```go
func ConfidenceVerdictThreshold() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold">DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOverallConfidenceThreshold</a>

---


### DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference <a name="DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThreshold">ConditionThreshold</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference">DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions">DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionThreshold`<sup>Required</sup> <a name="ConditionThreshold" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.conditionThreshold"></a>

```go
func ConditionThreshold() DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference">DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsConditionThresholdOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions">DataAwsccSesConfigurationSetSuppressionOptionsValidationOptions</a>

---


### DataAwsccSesConfigurationSetTagsList <a name="DataAwsccSesConfigurationSetTagsList" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSesConfigurationSetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSesConfigurationSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSesConfigurationSetTagsOutputReference <a name="DataAwsccSesConfigurationSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSesConfigurationSetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTags">DataAwsccSesConfigurationSetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesConfigurationSetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTags">DataAwsccSesConfigurationSetTags</a>

---


### DataAwsccSesConfigurationSetTrackingOptionsOutputReference <a name="DataAwsccSesConfigurationSetTrackingOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetTrackingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesConfigurationSetTrackingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain">CustomRedirectDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicy">HttpsPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptions">DataAwsccSesConfigurationSetTrackingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomRedirectDomain`<sup>Required</sup> <a name="CustomRedirectDomain" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.property.customRedirectDomain"></a>

```go
func CustomRedirectDomain() *string
```

- *Type:* *string

---

##### `HttpsPolicy`<sup>Required</sup> <a name="HttpsPolicy" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.property.httpsPolicy"></a>

```go
func HttpsPolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesConfigurationSetTrackingOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetTrackingOptions">DataAwsccSesConfigurationSetTrackingOptions</a>

---


### DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference <a name="DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics">EngagementMetrics</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptions">DataAwsccSesConfigurationSetVdmOptionsDashboardOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EngagementMetrics`<sup>Required</sup> <a name="EngagementMetrics" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.engagementMetrics"></a>

```go
func EngagementMetrics() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesConfigurationSetVdmOptionsDashboardOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptions">DataAwsccSesConfigurationSetVdmOptionsDashboardOptions</a>

---


### DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference <a name="DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery">OptimizedSharedDelivery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptions">DataAwsccSesConfigurationSetVdmOptionsGuardianOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OptimizedSharedDelivery`<sup>Required</sup> <a name="OptimizedSharedDelivery" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.optimizedSharedDelivery"></a>

```go
func OptimizedSharedDelivery() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesConfigurationSetVdmOptionsGuardianOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptions">DataAwsccSesConfigurationSetVdmOptionsGuardianOptions</a>

---


### DataAwsccSesConfigurationSetVdmOptionsOutputReference <a name="DataAwsccSesConfigurationSetVdmOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsesconfigurationset"

dataawsccsesconfigurationset.NewDataAwsccSesConfigurationSetVdmOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSesConfigurationSetVdmOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.property.dashboardOptions">DashboardOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference">DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.property.guardianOptions">GuardianOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference">DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptions">DataAwsccSesConfigurationSetVdmOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DashboardOptions`<sup>Required</sup> <a name="DashboardOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.property.dashboardOptions"></a>

```go
func DashboardOptions() DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference">DataAwsccSesConfigurationSetVdmOptionsDashboardOptionsOutputReference</a>

---

##### `GuardianOptions`<sup>Required</sup> <a name="GuardianOptions" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.property.guardianOptions"></a>

```go
func GuardianOptions() DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference">DataAwsccSesConfigurationSetVdmOptionsGuardianOptionsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSesConfigurationSetVdmOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSesConfigurationSet.DataAwsccSesConfigurationSetVdmOptions">DataAwsccSesConfigurationSetVdmOptions</a>

---



