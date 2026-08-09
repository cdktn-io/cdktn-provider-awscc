# `dataAwsccInspectorv2CodeSecurityIntegration` Submodule <a name="`dataAwsccInspectorv2CodeSecurityIntegration` Submodule" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccInspectorv2CodeSecurityIntegration <a name="DataAwsccInspectorv2CodeSecurityIntegration" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/inspectorv2_code_security_integration awscc_inspectorv2_code_security_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

dataawsccinspectorv2codesecurityintegration.NewDataAwsccInspectorv2CodeSecurityIntegration(scope Construct, id *string, config DataAwsccInspectorv2CodeSecurityIntegrationConfig) DataAwsccInspectorv2CodeSecurityIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig">DataAwsccInspectorv2CodeSecurityIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig">DataAwsccInspectorv2CodeSecurityIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccInspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

dataawsccinspectorv2codesecurityintegration.DataAwsccInspectorv2CodeSecurityIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

dataawsccinspectorv2codesecurityintegration.DataAwsccInspectorv2CodeSecurityIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

dataawsccinspectorv2codesecurityintegration.DataAwsccInspectorv2CodeSecurityIntegration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

dataawsccinspectorv2codesecurityintegration.DataAwsccInspectorv2CodeSecurityIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccInspectorv2CodeSecurityIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccInspectorv2CodeSecurityIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccInspectorv2CodeSecurityIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/inspectorv2_code_security_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccInspectorv2CodeSecurityIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.createIntegrationDetails">CreateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.statusReason">StatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.tags">Tags</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.updateIntegrationDetails">UpdateIntegrationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.authorizationUrl"></a>

```go
func AuthorizationUrl() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreateIntegrationDetails`<sup>Required</sup> <a name="CreateIntegrationDetails" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.createIntegrationDetails"></a>

```go
func CreateIntegrationDetails() DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference</a>

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.lastUpdatedAt"></a>

```go
func LastUpdatedAt() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.statusReason"></a>

```go
func StatusReason() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateIntegrationDetails`<sup>Required</sup> <a name="UpdateIntegrationDetails" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.updateIntegrationDetails"></a>

```go
func UpdateIntegrationDetails() DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccInspectorv2CodeSecurityIntegrationConfig <a name="DataAwsccInspectorv2CodeSecurityIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

&dataawsccinspectorv2codesecurityintegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/inspectorv2_code_security_integration#id DataAwsccInspectorv2CodeSecurityIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails <a name="DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

&dataawsccinspectorv2codesecurityintegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails {

}
```


### DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged <a name="DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

&dataawsccinspectorv2codesecurityintegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged {

}
```


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

&dataawsccinspectorv2codesecurityintegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails {

}
```


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

&dataawsccinspectorv2codesecurityintegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub {

}
```


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

&dataawsccinspectorv2codesecurityintegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

dataawsccinspectorv2codesecurityintegration.NewDataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl">InstanceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `InstanceUrl`<sup>Required</sup> <a name="InstanceUrl" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.instanceUrl"></a>

```go
func InstanceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManaged</a>

---


### DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

dataawsccinspectorv2codesecurityintegration.NewDataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged">GitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GitlabSelfManaged`<sup>Required</sup> <a name="GitlabSelfManaged" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```go
func GitlabSelfManaged() DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails">DataAwsccInspectorv2CodeSecurityIntegrationCreateIntegrationDetails</a>

---


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

dataawsccinspectorv2codesecurityintegration.NewDataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId">InstallationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.installationId"></a>

```go
func InstallationId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithub</a>

---


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

dataawsccinspectorv2codesecurityintegration.NewDataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode">AuthCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthCode`<sup>Required</sup> <a name="AuthCode" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.authCode"></a>

```go
func AuthCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManaged</a>

---


### DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference <a name="DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccinspectorv2codesecurityintegration"

dataawsccinspectorv2codesecurityintegration.NewDataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github">Github</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged">GitlabSelfManaged</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.github"></a>

```go
func Github() DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGithubOutputReference</a>

---

##### `GitlabSelfManaged`<sup>Required</sup> <a name="GitlabSelfManaged" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.gitlabSelfManaged"></a>

```go
func GitlabSelfManaged() DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsGitlabSelfManagedOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccInspectorv2CodeSecurityIntegration.DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails">DataAwsccInspectorv2CodeSecurityIntegrationUpdateIntegrationDetails</a>

---



