# `dataAwsccObservabilityadminS3TableIntegration` Submodule <a name="`dataAwsccObservabilityadminS3TableIntegration` Submodule" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccObservabilityadminS3TableIntegration <a name="DataAwsccObservabilityadminS3TableIntegration" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/observabilityadmin_s3_table_integration awscc_observabilityadmin_s3_table_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

dataawsccobservabilityadmins3tableintegration.NewDataAwsccObservabilityadminS3TableIntegration(scope Construct, id *string, config DataAwsccObservabilityadminS3TableIntegrationConfig) DataAwsccObservabilityadminS3TableIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig">DataAwsccObservabilityadminS3TableIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig">DataAwsccObservabilityadminS3TableIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccObservabilityadminS3TableIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

dataawsccobservabilityadmins3tableintegration.DataAwsccObservabilityadminS3TableIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

dataawsccobservabilityadmins3tableintegration.DataAwsccObservabilityadminS3TableIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

dataawsccobservabilityadmins3tableintegration.DataAwsccObservabilityadminS3TableIntegration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

dataawsccobservabilityadmins3tableintegration.DataAwsccObservabilityadminS3TableIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccObservabilityadminS3TableIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccObservabilityadminS3TableIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccObservabilityadminS3TableIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/observabilityadmin_s3_table_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccObservabilityadminS3TableIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference">DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.logSources">LogSources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList">DataAwsccObservabilityadminS3TableIntegrationLogSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList">DataAwsccObservabilityadminS3TableIntegrationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.encryption"></a>

```go
func Encryption() DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference">DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference</a>

---

##### `LogSources`<sup>Required</sup> <a name="LogSources" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.logSources"></a>

```go
func LogSources() DataAwsccObservabilityadminS3TableIntegrationLogSourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList">DataAwsccObservabilityadminS3TableIntegrationLogSourcesList</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.tags"></a>

```go
func Tags() DataAwsccObservabilityadminS3TableIntegrationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList">DataAwsccObservabilityadminS3TableIntegrationTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccObservabilityadminS3TableIntegrationConfig <a name="DataAwsccObservabilityadminS3TableIntegrationConfig" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

&dataawsccobservabilityadmins3tableintegration.DataAwsccObservabilityadminS3TableIntegrationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/observabilityadmin_s3_table_integration#id DataAwsccObservabilityadminS3TableIntegration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccObservabilityadminS3TableIntegrationEncryption <a name="DataAwsccObservabilityadminS3TableIntegrationEncryption" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

&dataawsccobservabilityadmins3tableintegration.DataAwsccObservabilityadminS3TableIntegrationEncryption {

}
```


### DataAwsccObservabilityadminS3TableIntegrationLogSources <a name="DataAwsccObservabilityadminS3TableIntegrationLogSources" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

&dataawsccobservabilityadmins3tableintegration.DataAwsccObservabilityadminS3TableIntegrationLogSources {

}
```


### DataAwsccObservabilityadminS3TableIntegrationTags <a name="DataAwsccObservabilityadminS3TableIntegrationTags" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

&dataawsccobservabilityadmins3tableintegration.DataAwsccObservabilityadminS3TableIntegrationTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference <a name="DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

dataawsccobservabilityadmins3tableintegration.NewDataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithm">SseAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryption">DataAwsccObservabilityadminS3TableIntegrationEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `SseAlgorithm`<sup>Required</sup> <a name="SseAlgorithm" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.sseAlgorithm"></a>

```go
func SseAlgorithm() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminS3TableIntegrationEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationEncryption">DataAwsccObservabilityadminS3TableIntegrationEncryption</a>

---


### DataAwsccObservabilityadminS3TableIntegrationLogSourcesList <a name="DataAwsccObservabilityadminS3TableIntegrationLogSourcesList" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

dataawsccobservabilityadmins3tableintegration.NewDataAwsccObservabilityadminS3TableIntegrationLogSourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccObservabilityadminS3TableIntegrationLogSourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.get"></a>

```go
func Get(index *f64) DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference <a name="DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

dataawsccobservabilityadmins3tableintegration.NewDataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSources">DataAwsccObservabilityadminS3TableIntegrationLogSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminS3TableIntegrationLogSources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationLogSources">DataAwsccObservabilityadminS3TableIntegrationLogSources</a>

---


### DataAwsccObservabilityadminS3TableIntegrationTagsList <a name="DataAwsccObservabilityadminS3TableIntegrationTagsList" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

dataawsccobservabilityadmins3tableintegration.NewDataAwsccObservabilityadminS3TableIntegrationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccObservabilityadminS3TableIntegrationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.get"></a>

```go
func Get(index *f64) DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference <a name="DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccobservabilityadmins3tableintegration"

dataawsccobservabilityadmins3tableintegration.NewDataAwsccObservabilityadminS3TableIntegrationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTags">DataAwsccObservabilityadminS3TableIntegrationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccObservabilityadminS3TableIntegrationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccObservabilityadminS3TableIntegration.DataAwsccObservabilityadminS3TableIntegrationTags">DataAwsccObservabilityadminS3TableIntegrationTags</a>

---



