# `dataAwsccGlueIntegrationResourceProperty` Submodule <a name="`dataAwsccGlueIntegrationResourceProperty` Submodule" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlueIntegrationResourceProperty <a name="DataAwsccGlueIntegrationResourceProperty" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/glue_integration_resource_property awscc_glue_integration_resource_property}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglueintegrationresourceproperty"

dataawsccglueintegrationresourceproperty.NewDataAwsccGlueIntegrationResourceProperty(scope Construct, id *string, config DataAwsccGlueIntegrationResourcePropertyConfig) DataAwsccGlueIntegrationResourceProperty
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig">DataAwsccGlueIntegrationResourcePropertyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig">DataAwsccGlueIntegrationResourcePropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccGlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglueintegrationresourceproperty"

dataawsccglueintegrationresourceproperty.DataAwsccGlueIntegrationResourceProperty_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglueintegrationresourceproperty"

dataawsccglueintegrationresourceproperty.DataAwsccGlueIntegrationResourceProperty_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglueintegrationresourceproperty"

dataawsccglueintegrationresourceproperty.DataAwsccGlueIntegrationResourceProperty_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglueintegrationresourceproperty"

dataawsccglueintegrationresourceproperty.DataAwsccGlueIntegrationResourceProperty_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccGlueIntegrationResourceProperty resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccGlueIntegrationResourceProperty to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccGlueIntegrationResourceProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/glue_integration_resource_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlueIntegrationResourceProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.resourcePropertyArn">ResourcePropertyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.sourceProcessingProperties">SourceProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList">DataAwsccGlueIntegrationResourcePropertyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.targetProcessingProperties">TargetProcessingProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `ResourcePropertyArn`<sup>Required</sup> <a name="ResourcePropertyArn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.resourcePropertyArn"></a>

```go
func ResourcePropertyArn() *string
```

- *Type:* *string

---

##### `SourceProcessingProperties`<sup>Required</sup> <a name="SourceProcessingProperties" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.sourceProcessingProperties"></a>

```go
func SourceProcessingProperties() DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference">DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.tags"></a>

```go
func Tags() DataAwsccGlueIntegrationResourcePropertyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList">DataAwsccGlueIntegrationResourcePropertyTagsList</a>

---

##### `TargetProcessingProperties`<sup>Required</sup> <a name="TargetProcessingProperties" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.targetProcessingProperties"></a>

```go
func TargetProcessingProperties() DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference">DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourceProperty.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlueIntegrationResourcePropertyConfig <a name="DataAwsccGlueIntegrationResourcePropertyConfig" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglueintegrationresourceproperty"

&dataawsccglueintegrationresourceproperty.DataAwsccGlueIntegrationResourcePropertyConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/glue_integration_resource_property#id DataAwsccGlueIntegrationResourceProperty#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties <a name="DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglueintegrationresourceproperty"

&dataawsccglueintegrationresourceproperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties {

}
```


### DataAwsccGlueIntegrationResourcePropertyTags <a name="DataAwsccGlueIntegrationResourcePropertyTags" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglueintegrationresourceproperty"

&dataawsccglueintegrationresourceproperty.DataAwsccGlueIntegrationResourcePropertyTags {

}
```


### DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties <a name="DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglueintegrationresourceproperty"

&dataawsccglueintegrationresourceproperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference <a name="DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglueintegrationresourceproperty"

dataawsccglueintegrationresourceproperty.NewDataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties">DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties">DataAwsccGlueIntegrationResourcePropertySourceProcessingProperties</a>

---


### DataAwsccGlueIntegrationResourcePropertyTagsList <a name="DataAwsccGlueIntegrationResourcePropertyTagsList" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglueintegrationresourceproperty"

dataawsccglueintegrationresourceproperty.NewDataAwsccGlueIntegrationResourcePropertyTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccGlueIntegrationResourcePropertyTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.get"></a>

```go
func Get(index *f64) DataAwsccGlueIntegrationResourcePropertyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccGlueIntegrationResourcePropertyTagsOutputReference <a name="DataAwsccGlueIntegrationResourcePropertyTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglueintegrationresourceproperty"

dataawsccglueintegrationresourceproperty.NewDataAwsccGlueIntegrationResourcePropertyTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccGlueIntegrationResourcePropertyTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags">DataAwsccGlueIntegrationResourcePropertyTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueIntegrationResourcePropertyTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTags">DataAwsccGlueIntegrationResourcePropertyTags</a>

---


### DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference <a name="DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccglueintegrationresourceproperty"

dataawsccglueintegrationresourceproperty.NewDataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn">EventBusArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn">KmsArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties">DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `EventBusArn`<sup>Required</sup> <a name="EventBusArn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.eventBusArn"></a>

```go
func EventBusArn() *string
```

- *Type:* *string

---

##### `KmsArn`<sup>Required</sup> <a name="KmsArn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.kmsArn"></a>

```go
func KmsArn() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlueIntegrationResourceProperty.DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties">DataAwsccGlueIntegrationResourcePropertyTargetProcessingProperties</a>

---



