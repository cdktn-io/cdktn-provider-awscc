# `dataAwsccInspectorv2Connector` Submodule <a name="`dataAwsccInspectorv2Connector` Submodule" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInspectorv2Connector <a name="DataAwsccInspectorv2Connector" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/inspectorv2_connector awscc_inspectorv2_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.NewDataAwsccInspectorv2Connector(scope Construct, id *string, config DataAwsccInspectorv2ConnectorConfig) DataAwsccInspectorv2Connector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig">DataAwsccInspectorv2ConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig">DataAwsccInspectorv2ConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInspectorv2Connector resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.DataAwsccInspectorv2Connector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.DataAwsccInspectorv2Connector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.DataAwsccInspectorv2Connector_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.DataAwsccInspectorv2Connector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccInspectorv2Connector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccInspectorv2Connector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccInspectorv2Connector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/inspectorv2_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInspectorv2Connector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.connectorArn">ConnectorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.enablementStatus">EnablementStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.enablementStatusReason">EnablementStatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.health">Health</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference">DataAwsccInspectorv2ConnectorHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.providerConfiguration">ProviderConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.providerName">ProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList">DataAwsccInspectorv2ConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.connectorArn"></a>

```go
func ConnectorArn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnablementStatus`<sup>Required</sup> <a name="EnablementStatus" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.enablementStatus"></a>

```go
func EnablementStatus() *string
```

- *Type:* *string

---

##### `EnablementStatusReason`<sup>Required</sup> <a name="EnablementStatusReason" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.enablementStatusReason"></a>

```go
func EnablementStatusReason() *string
```

- *Type:* *string

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.health"></a>

```go
func Health() DataAwsccInspectorv2ConnectorHealthOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference">DataAwsccInspectorv2ConnectorHealthOutputReference</a>

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderConfiguration`<sup>Required</sup> <a name="ProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.providerConfiguration"></a>

```go
func ProviderConfiguration() DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference</a>

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.providerName"></a>

```go
func ProviderName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.tags"></a>

```go
func Tags() DataAwsccInspectorv2ConnectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList">DataAwsccInspectorv2ConnectorTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2Connector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInspectorv2ConnectorConfig <a name="DataAwsccInspectorv2ConnectorConfig" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

&dataawsccinspectorv2connector.DataAwsccInspectorv2ConnectorConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/inspectorv2_connector#id DataAwsccInspectorv2Connector#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInspectorv2ConnectorHealth <a name="DataAwsccInspectorv2ConnectorHealth" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealth.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

&dataawsccinspectorv2connector.DataAwsccInspectorv2ConnectorHealth {

}
```


### DataAwsccInspectorv2ConnectorProviderConfiguration <a name="DataAwsccInspectorv2ConnectorProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

&dataawsccinspectorv2connector.DataAwsccInspectorv2ConnectorProviderConfiguration {

}
```


### DataAwsccInspectorv2ConnectorProviderConfigurationAzure <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzure" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

&dataawsccinspectorv2connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzure {

}
```


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

&dataawsccinspectorv2connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration {

}
```


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

&dataawsccinspectorv2connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning {

}
```


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

&dataawsccinspectorv2connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning {

}
```


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

&dataawsccinspectorv2connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning {

}
```


### DataAwsccInspectorv2ConnectorTags <a name="DataAwsccInspectorv2ConnectorTags" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

&dataawsccinspectorv2connector.DataAwsccInspectorv2ConnectorTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInspectorv2ConnectorHealthOutputReference <a name="DataAwsccInspectorv2ConnectorHealthOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.NewDataAwsccInspectorv2ConnectorHealthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2ConnectorHealthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.connectorStatus">ConnectorStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.lastCheckedAt">LastCheckedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealth">DataAwsccInspectorv2ConnectorHealth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorStatus`<sup>Required</sup> <a name="ConnectorStatus" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.connectorStatus"></a>

```go
func ConnectorStatus() *string
```

- *Type:* *string

---

##### `LastCheckedAt`<sup>Required</sup> <a name="LastCheckedAt" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.lastCheckedAt"></a>

```go
func LastCheckedAt() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealthOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2ConnectorHealth
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorHealth">DataAwsccInspectorv2ConnectorHealth</a>

---


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.NewDataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.autoInstallVmScanner">AutoInstallVmScanner</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.awsConfigConnectorArn">AwsConfigConnectorArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.azureRegions">AzureRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.scopeConfiguration">ScopeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzure">DataAwsccInspectorv2ConnectorProviderConfigurationAzure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoInstallVmScanner`<sup>Required</sup> <a name="AutoInstallVmScanner" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.autoInstallVmScanner"></a>

```go
func AutoInstallVmScanner() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `AwsConfigConnectorArn`<sup>Required</sup> <a name="AwsConfigConnectorArn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.awsConfigConnectorArn"></a>

```go
func AwsConfigConnectorArn() *string
```

- *Type:* *string

---

##### `AzureRegions`<sup>Required</sup> <a name="AzureRegions" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.azureRegions"></a>

```go
func AzureRegions() *[]*string
```

- *Type:* *[]*string

---

##### `ScopeConfiguration`<sup>Required</sup> <a name="ScopeConfiguration" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.scopeConfiguration"></a>

```go
func ScopeConfiguration() DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2ConnectorProviderConfigurationAzure
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzure">DataAwsccInspectorv2ConnectorProviderConfigurationAzure</a>

---


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.NewDataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.scopeType">ScopeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.scopeValues">ScopeValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.stateReason">StateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeType`<sup>Required</sup> <a name="ScopeType" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.scopeType"></a>

```go
func ScopeType() *string
```

- *Type:* *string

---

##### `ScopeValues`<sup>Required</sup> <a name="ScopeValues" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.scopeValues"></a>

```go
func ScopeValues() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.stateReason"></a>

```go
func StateReason() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanning</a>

---


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.NewDataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.containerImageScanning">ContainerImageScanning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.serverlessScanning">ServerlessScanning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.vmScanning">VmScanning</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContainerImageScanning`<sup>Required</sup> <a name="ContainerImageScanning" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.containerImageScanning"></a>

```go
func ContainerImageScanning() DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationContainerImageScanningOutputReference</a>

---

##### `ServerlessScanning`<sup>Required</sup> <a name="ServerlessScanning" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.serverlessScanning"></a>

```go
func ServerlessScanning() DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference</a>

---

##### `VmScanning`<sup>Required</sup> <a name="VmScanning" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.vmScanning"></a>

```go
func VmScanning() DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfiguration</a>

---


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.NewDataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.scopeType">ScopeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.scopeValues">ScopeValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.stateReason">StateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeType`<sup>Required</sup> <a name="ScopeType" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.scopeType"></a>

```go
func ScopeType() *string
```

- *Type:* *string

---

##### `ScopeValues`<sup>Required</sup> <a name="ScopeValues" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.scopeValues"></a>

```go
func ScopeValues() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.stateReason"></a>

```go
func StateReason() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanningOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationServerlessScanning</a>

---


### DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference <a name="DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.NewDataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.scopeType">ScopeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.scopeValues">ScopeValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.stateReason">StateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScopeType`<sup>Required</sup> <a name="ScopeType" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.scopeType"></a>

```go
func ScopeType() *string
```

- *Type:* *string

---

##### `ScopeValues`<sup>Required</sup> <a name="ScopeValues" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.scopeValues"></a>

```go
func ScopeValues() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateReason`<sup>Required</sup> <a name="StateReason" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.stateReason"></a>

```go
func StateReason() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanningOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning">DataAwsccInspectorv2ConnectorProviderConfigurationAzureScopeConfigurationVmScanning</a>

---


### DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference <a name="DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.NewDataAwsccInspectorv2ConnectorProviderConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfiguration">DataAwsccInspectorv2ConnectorProviderConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.azure"></a>

```go
func Azure() DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference">DataAwsccInspectorv2ConnectorProviderConfigurationAzureOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2ConnectorProviderConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorProviderConfiguration">DataAwsccInspectorv2ConnectorProviderConfiguration</a>

---


### DataAwsccInspectorv2ConnectorTagsList <a name="DataAwsccInspectorv2ConnectorTagsList" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.NewDataAwsccInspectorv2ConnectorTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccInspectorv2ConnectorTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.get"></a>

```go
func Get(index *f64) DataAwsccInspectorv2ConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccInspectorv2ConnectorTagsOutputReference <a name="DataAwsccInspectorv2ConnectorTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2connector"

dataawsccinspectorv2connector.NewDataAwsccInspectorv2ConnectorTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccInspectorv2ConnectorTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTags">DataAwsccInspectorv2ConnectorTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2ConnectorTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2Connector.DataAwsccInspectorv2ConnectorTags">DataAwsccInspectorv2ConnectorTags</a>

---



