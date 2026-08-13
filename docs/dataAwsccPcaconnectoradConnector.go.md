# `dataAwsccPcaconnectoradConnector` Submodule <a name="`dataAwsccPcaconnectoradConnector` Submodule" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccPcaconnectoradConnector <a name="DataAwsccPcaconnectoradConnector" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/pcaconnectorad_connector awscc_pcaconnectorad_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradconnector"

dataawsccpcaconnectoradconnector.NewDataAwsccPcaconnectoradConnector(scope Construct, id *string, config DataAwsccPcaconnectoradConnectorConfig) DataAwsccPcaconnectoradConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig">DataAwsccPcaconnectoradConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig">DataAwsccPcaconnectoradConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccPcaconnectoradConnector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradconnector"

dataawsccpcaconnectoradconnector.DataAwsccPcaconnectoradConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradconnector"

dataawsccpcaconnectoradconnector.DataAwsccPcaconnectoradConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradconnector"

dataawsccpcaconnectoradconnector.DataAwsccPcaconnectoradConnector_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradconnector"

dataawsccpcaconnectoradconnector.DataAwsccPcaconnectoradConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccPcaconnectoradConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccPcaconnectoradConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccPcaconnectoradConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/pcaconnectorad_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccPcaconnectoradConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.certificateAuthorityArn">CertificateAuthorityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.connectorArn">ConnectorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.directoryId">DirectoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.vpcInformation">VpcInformation</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference">DataAwsccPcaconnectoradConnectorVpcInformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CertificateAuthorityArn`<sup>Required</sup> <a name="CertificateAuthorityArn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.certificateAuthorityArn"></a>

```go
func CertificateAuthorityArn() *string
```

- *Type:* *string

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.connectorArn"></a>

```go
func ConnectorArn() *string
```

- *Type:* *string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.directoryId"></a>

```go
func DirectoryId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `VpcInformation`<sup>Required</sup> <a name="VpcInformation" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.vpcInformation"></a>

```go
func VpcInformation() DataAwsccPcaconnectoradConnectorVpcInformationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference">DataAwsccPcaconnectoradConnectorVpcInformationOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccPcaconnectoradConnectorConfig <a name="DataAwsccPcaconnectoradConnectorConfig" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradconnector"

&dataawsccpcaconnectoradconnector.DataAwsccPcaconnectoradConnectorConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/pcaconnectorad_connector#id DataAwsccPcaconnectoradConnector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccPcaconnectoradConnectorVpcInformation <a name="DataAwsccPcaconnectoradConnectorVpcInformation" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradconnector"

&dataawsccpcaconnectoradconnector.DataAwsccPcaconnectoradConnectorVpcInformation {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccPcaconnectoradConnectorVpcInformationOutputReference <a name="DataAwsccPcaconnectoradConnectorVpcInformationOutputReference" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccpcaconnectoradconnector"

dataawsccpcaconnectoradconnector.NewDataAwsccPcaconnectoradConnectorVpcInformationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccPcaconnectoradConnectorVpcInformationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformation">DataAwsccPcaconnectoradConnectorVpcInformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccPcaconnectoradConnectorVpcInformation
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccPcaconnectoradConnector.DataAwsccPcaconnectoradConnectorVpcInformation">DataAwsccPcaconnectoradConnectorVpcInformation</a>

---



