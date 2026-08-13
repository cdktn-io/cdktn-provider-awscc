# `dataAwsccCloudfrontDistributionTenant` Submodule <a name="`dataAwsccCloudfrontDistributionTenant` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontDistributionTenant <a name="DataAwsccCloudfrontDistributionTenant" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_distribution_tenant awscc_cloudfront_distribution_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.NewDataAwsccCloudfrontDistributionTenant(scope Construct, id *string, config DataAwsccCloudfrontDistributionTenantConfig) DataAwsccCloudfrontDistributionTenant
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig">DataAwsccCloudfrontDistributionTenantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig">DataAwsccCloudfrontDistributionTenantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontDistributionTenant resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.DataAwsccCloudfrontDistributionTenant_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.DataAwsccCloudfrontDistributionTenant_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.DataAwsccCloudfrontDistributionTenant_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.DataAwsccCloudfrontDistributionTenant_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccCloudfrontDistributionTenant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccCloudfrontDistributionTenant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccCloudfrontDistributionTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_distribution_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontDistributionTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.connectionGroupId">ConnectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.createdTime">CreatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.customizations">Customizations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.distributionId">DistributionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.distributionTenantId">DistributionTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.domainResults">DomainResults</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList">DataAwsccCloudfrontDistributionTenantDomainResultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.domains">Domains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.enabled">Enabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.eTag">ETag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.lastModifiedTime">LastModifiedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.managedCertificateRequest">ManagedCertificateRequest</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference">DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList">DataAwsccCloudfrontDistributionTenantParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList">DataAwsccCloudfrontDistributionTenantTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConnectionGroupId`<sup>Required</sup> <a name="ConnectionGroupId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.connectionGroupId"></a>

```go
func ConnectionGroupId() *string
```

- *Type:* *string

---

##### `CreatedTime`<sup>Required</sup> <a name="CreatedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.createdTime"></a>

```go
func CreatedTime() *string
```

- *Type:* *string

---

##### `Customizations`<sup>Required</sup> <a name="Customizations" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.customizations"></a>

```go
func Customizations() DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference</a>

---

##### `DistributionId`<sup>Required</sup> <a name="DistributionId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.distributionId"></a>

```go
func DistributionId() *string
```

- *Type:* *string

---

##### `DistributionTenantId`<sup>Required</sup> <a name="DistributionTenantId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.distributionTenantId"></a>

```go
func DistributionTenantId() *string
```

- *Type:* *string

---

##### `DomainResults`<sup>Required</sup> <a name="DomainResults" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.domainResults"></a>

```go
func DomainResults() DataAwsccCloudfrontDistributionTenantDomainResultsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList">DataAwsccCloudfrontDistributionTenantDomainResultsList</a>

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.domains"></a>

```go
func Domains() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ETag`<sup>Required</sup> <a name="ETag" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.eTag"></a>

```go
func ETag() *string
```

- *Type:* *string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.lastModifiedTime"></a>

```go
func LastModifiedTime() *string
```

- *Type:* *string

---

##### `ManagedCertificateRequest`<sup>Required</sup> <a name="ManagedCertificateRequest" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.managedCertificateRequest"></a>

```go
func ManagedCertificateRequest() DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference">DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.parameters"></a>

```go
func Parameters() DataAwsccCloudfrontDistributionTenantParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList">DataAwsccCloudfrontDistributionTenantParametersList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.tags"></a>

```go
func Tags() DataAwsccCloudfrontDistributionTenantTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList">DataAwsccCloudfrontDistributionTenantTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontDistributionTenantConfig <a name="DataAwsccCloudfrontDistributionTenantConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

&dataawscccloudfrontdistributiontenant.DataAwsccCloudfrontDistributionTenantConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudfront_distribution_tenant#id DataAwsccCloudfrontDistributionTenant#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontDistributionTenantCustomizations <a name="DataAwsccCloudfrontDistributionTenantCustomizations" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

&dataawscccloudfrontdistributiontenant.DataAwsccCloudfrontDistributionTenantCustomizations {

}
```


### DataAwsccCloudfrontDistributionTenantCustomizationsCertificate <a name="DataAwsccCloudfrontDistributionTenantCustomizationsCertificate" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

&dataawscccloudfrontdistributiontenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificate {

}
```


### DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions <a name="DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

&dataawscccloudfrontdistributiontenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions {

}
```


### DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl <a name="DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

&dataawscccloudfrontdistributiontenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl {

}
```


### DataAwsccCloudfrontDistributionTenantDomainResults <a name="DataAwsccCloudfrontDistributionTenantDomainResults" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResults.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

&dataawscccloudfrontdistributiontenant.DataAwsccCloudfrontDistributionTenantDomainResults {

}
```


### DataAwsccCloudfrontDistributionTenantManagedCertificateRequest <a name="DataAwsccCloudfrontDistributionTenantManagedCertificateRequest" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequest.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

&dataawscccloudfrontdistributiontenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequest {

}
```


### DataAwsccCloudfrontDistributionTenantParameters <a name="DataAwsccCloudfrontDistributionTenantParameters" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

&dataawscccloudfrontdistributiontenant.DataAwsccCloudfrontDistributionTenantParameters {

}
```


### DataAwsccCloudfrontDistributionTenantTags <a name="DataAwsccCloudfrontDistributionTenantTags" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

&dataawscccloudfrontdistributiontenant.DataAwsccCloudfrontDistributionTenantTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference <a name="DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.NewDataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificate">DataAwsccCloudfrontDistributionTenantCustomizationsCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontDistributionTenantCustomizationsCertificate
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificate">DataAwsccCloudfrontDistributionTenantCustomizationsCertificate</a>

---


### DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference <a name="DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.NewDataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.restrictionType">RestrictionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions">DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `RestrictionType`<sup>Required</sup> <a name="RestrictionType" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.restrictionType"></a>

```go
func RestrictionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions">DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions</a>

---


### DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference <a name="DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.NewDataAwsccCloudfrontDistributionTenantCustomizationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.certificate">Certificate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictions">GeoRestrictions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl">WebAcl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizations">DataAwsccCloudfrontDistributionTenantCustomizations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.certificate"></a>

```go
func Certificate() DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference</a>

---

##### `GeoRestrictions`<sup>Required</sup> <a name="GeoRestrictions" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictions"></a>

```go
func GeoRestrictions() DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference</a>

---

##### `WebAcl`<sup>Required</sup> <a name="WebAcl" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl"></a>

```go
func WebAcl() DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontDistributionTenantCustomizations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizations">DataAwsccCloudfrontDistributionTenantCustomizations</a>

---


### DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference <a name="DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.NewDataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl">DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl">DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl</a>

---


### DataAwsccCloudfrontDistributionTenantDomainResultsList <a name="DataAwsccCloudfrontDistributionTenantDomainResultsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.NewDataAwsccCloudfrontDistributionTenantDomainResultsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudfrontDistributionTenantDomainResultsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference <a name="DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.NewDataAwsccCloudfrontDistributionTenantDomainResultsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResults">DataAwsccCloudfrontDistributionTenantDomainResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontDistributionTenantDomainResults
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResults">DataAwsccCloudfrontDistributionTenantDomainResults</a>

---


### DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference <a name="DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.NewDataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference">CertificateTransparencyLoggingPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName">PrimaryDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost">ValidationTokenHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequest">DataAwsccCloudfrontDistributionTenantManagedCertificateRequest</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateTransparencyLoggingPreference`<sup>Required</sup> <a name="CertificateTransparencyLoggingPreference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference"></a>

```go
func CertificateTransparencyLoggingPreference() *string
```

- *Type:* *string

---

##### `PrimaryDomainName`<sup>Required</sup> <a name="PrimaryDomainName" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName"></a>

```go
func PrimaryDomainName() *string
```

- *Type:* *string

---

##### `ValidationTokenHost`<sup>Required</sup> <a name="ValidationTokenHost" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost"></a>

```go
func ValidationTokenHost() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontDistributionTenantManagedCertificateRequest
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequest">DataAwsccCloudfrontDistributionTenantManagedCertificateRequest</a>

---


### DataAwsccCloudfrontDistributionTenantParametersList <a name="DataAwsccCloudfrontDistributionTenantParametersList" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.NewDataAwsccCloudfrontDistributionTenantParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudfrontDistributionTenantParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.get"></a>

```go
func Get(index *f64) DataAwsccCloudfrontDistributionTenantParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudfrontDistributionTenantParametersOutputReference <a name="DataAwsccCloudfrontDistributionTenantParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.NewDataAwsccCloudfrontDistributionTenantParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudfrontDistributionTenantParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParameters">DataAwsccCloudfrontDistributionTenantParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontDistributionTenantParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParameters">DataAwsccCloudfrontDistributionTenantParameters</a>

---


### DataAwsccCloudfrontDistributionTenantTagsList <a name="DataAwsccCloudfrontDistributionTenantTagsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.NewDataAwsccCloudfrontDistributionTenantTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccCloudfrontDistributionTenantTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.get"></a>

```go
func Get(index *f64) DataAwsccCloudfrontDistributionTenantTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccCloudfrontDistributionTenantTagsOutputReference <a name="DataAwsccCloudfrontDistributionTenantTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawscccloudfrontdistributiontenant"

dataawscccloudfrontdistributiontenant.NewDataAwsccCloudfrontDistributionTenantTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccCloudfrontDistributionTenantTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTags">DataAwsccCloudfrontDistributionTenantTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccCloudfrontDistributionTenantTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTags">DataAwsccCloudfrontDistributionTenantTags</a>

---



