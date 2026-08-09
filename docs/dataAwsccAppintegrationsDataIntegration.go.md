# `dataAwsccAppintegrationsDataIntegration` Submodule <a name="`dataAwsccAppintegrationsDataIntegration` Submodule" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppintegrationsDataIntegration <a name="DataAwsccAppintegrationsDataIntegration" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appintegrations_data_integration awscc_appintegrations_data_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappintegrationsdataintegration"

dataawsccappintegrationsdataintegration.NewDataAwsccAppintegrationsDataIntegration(scope Construct, id *string, config DataAwsccAppintegrationsDataIntegrationConfig) DataAwsccAppintegrationsDataIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig">DataAwsccAppintegrationsDataIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig">DataAwsccAppintegrationsDataIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppintegrationsDataIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappintegrationsdataintegration"

dataawsccappintegrationsdataintegration.DataAwsccAppintegrationsDataIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappintegrationsdataintegration"

dataawsccappintegrationsdataintegration.DataAwsccAppintegrationsDataIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappintegrationsdataintegration"

dataawsccappintegrationsdataintegration.DataAwsccAppintegrationsDataIntegration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappintegrationsdataintegration"

dataawsccappintegrationsdataintegration.DataAwsccAppintegrationsDataIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccAppintegrationsDataIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccAppintegrationsDataIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccAppintegrationsDataIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appintegrations_data_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppintegrationsDataIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dataIntegrationArn">DataIntegrationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dataIntegrationId">DataIntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.fileConfiguration">FileConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference">DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.objectConfiguration">ObjectConfiguration</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.AnyMapMap</code> | Terraform type: `map(map(list(string)))`. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.scheduleConfig">ScheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference">DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.sourceUri">SourceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList">DataAwsccAppintegrationsDataIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `DataIntegrationArn`<sup>Required</sup> <a name="DataIntegrationArn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dataIntegrationArn"></a>

```go
func DataIntegrationArn() *string
```

- *Type:* *string

---

##### `DataIntegrationId`<sup>Required</sup> <a name="DataIntegrationId" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.dataIntegrationId"></a>

```go
func DataIntegrationId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FileConfiguration`<sup>Required</sup> <a name="FileConfiguration" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.fileConfiguration"></a>

```go
func FileConfiguration() DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference">DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference</a>

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectConfiguration`<sup>Required</sup> <a name="ObjectConfiguration" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.objectConfiguration"></a>

```go
func ObjectConfiguration() AnyMapMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.AnyMapMap

Terraform type: `map(map(list(string)))`.

This nesting is deeper than the typed wrapper classes in the core cdktn package; it is exposed as `AnyMapMap` and values below that boundary are untyped tokens.

---

##### `ScheduleConfig`<sup>Required</sup> <a name="ScheduleConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.scheduleConfig"></a>

```go
func ScheduleConfig() DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference">DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference</a>

---

##### `SourceUri`<sup>Required</sup> <a name="SourceUri" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.sourceUri"></a>

```go
func SourceUri() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.tags"></a>

```go
func Tags() DataAwsccAppintegrationsDataIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList">DataAwsccAppintegrationsDataIntegrationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppintegrationsDataIntegrationConfig <a name="DataAwsccAppintegrationsDataIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappintegrationsdataintegration"

&dataawsccappintegrationsdataintegration.DataAwsccAppintegrationsDataIntegrationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/appintegrations_data_integration#id DataAwsccAppintegrationsDataIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppintegrationsDataIntegrationFileConfiguration <a name="DataAwsccAppintegrationsDataIntegrationFileConfiguration" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappintegrationsdataintegration"

&dataawsccappintegrationsdataintegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration {

}
```


### DataAwsccAppintegrationsDataIntegrationScheduleConfig <a name="DataAwsccAppintegrationsDataIntegrationScheduleConfig" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappintegrationsdataintegration"

&dataawsccappintegrationsdataintegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig {

}
```


### DataAwsccAppintegrationsDataIntegrationTags <a name="DataAwsccAppintegrationsDataIntegrationTags" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappintegrationsdataintegration"

&dataawsccappintegrationsdataintegration.DataAwsccAppintegrationsDataIntegrationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference <a name="DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappintegrationsdataintegration"

dataawsccappintegrationsdataintegration.NewDataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.filters">Filters</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringListMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.folders">Folders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration">DataAwsccAppintegrationsDataIntegrationFileConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.filters"></a>

```go
func Filters() StringListMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringListMap

---

##### `Folders`<sup>Required</sup> <a name="Folders" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.folders"></a>

```go
func Folders() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppintegrationsDataIntegrationFileConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationFileConfiguration">DataAwsccAppintegrationsDataIntegrationFileConfiguration</a>

---


### DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference <a name="DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappintegrationsdataintegration"

dataawsccappintegrationsdataintegration.NewDataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom">FirstExecutionFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig">DataAwsccAppintegrationsDataIntegrationScheduleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirstExecutionFrom`<sup>Required</sup> <a name="FirstExecutionFrom" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.firstExecutionFrom"></a>

```go
func FirstExecutionFrom() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.scheduleExpression"></a>

```go
func ScheduleExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppintegrationsDataIntegrationScheduleConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationScheduleConfig">DataAwsccAppintegrationsDataIntegrationScheduleConfig</a>

---


### DataAwsccAppintegrationsDataIntegrationTagsList <a name="DataAwsccAppintegrationsDataIntegrationTagsList" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappintegrationsdataintegration"

dataawsccappintegrationsdataintegration.NewDataAwsccAppintegrationsDataIntegrationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccAppintegrationsDataIntegrationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccAppintegrationsDataIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccAppintegrationsDataIntegrationTagsOutputReference <a name="DataAwsccAppintegrationsDataIntegrationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccappintegrationsdataintegration"

dataawsccappintegrationsdataintegration.NewDataAwsccAppintegrationsDataIntegrationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccAppintegrationsDataIntegrationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags">DataAwsccAppintegrationsDataIntegrationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccAppintegrationsDataIntegrationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppintegrationsDataIntegration.DataAwsccAppintegrationsDataIntegrationTags">DataAwsccAppintegrationsDataIntegrationTags</a>

---



