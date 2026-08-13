# `dataAwsccEc2VerifiedAccessTrustProvider` Submodule <a name="`dataAwsccEc2VerifiedAccessTrustProvider` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2VerifiedAccessTrustProvider <a name="DataAwsccEc2VerifiedAccessTrustProvider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_verified_access_trust_provider awscc_ec2_verified_access_trust_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

dataawsccec2verifiedaccesstrustprovider.NewDataAwsccEc2VerifiedAccessTrustProvider(scope Construct, id *string, config DataAwsccEc2VerifiedAccessTrustProviderConfig) DataAwsccEc2VerifiedAccessTrustProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig">DataAwsccEc2VerifiedAccessTrustProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig">DataAwsccEc2VerifiedAccessTrustProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessTrustProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

dataawsccec2verifiedaccesstrustprovider.DataAwsccEc2VerifiedAccessTrustProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

dataawsccec2verifiedaccesstrustprovider.DataAwsccEc2VerifiedAccessTrustProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

dataawsccec2verifiedaccesstrustprovider.DataAwsccEc2VerifiedAccessTrustProvider_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

dataawsccec2verifiedaccesstrustprovider.DataAwsccEc2VerifiedAccessTrustProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccEc2VerifiedAccessTrustProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccEc2VerifiedAccessTrustProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccEc2VerifiedAccessTrustProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_verified_access_trust_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2VerifiedAccessTrustProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.deviceOptions">DeviceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.deviceTrustProviderType">DeviceTrustProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptions">NativeApplicationOidcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.oidcOptions">OidcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.policyReferenceName">PolicyReferenceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList">DataAwsccEc2VerifiedAccessTrustProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.trustProviderType">TrustProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.userTrustProviderType">UserTrustProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.verifiedAccessTrustProviderId">VerifiedAccessTrustProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceOptions`<sup>Required</sup> <a name="DeviceOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.deviceOptions"></a>

```go
func DeviceOptions() DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference</a>

---

##### `DeviceTrustProviderType`<sup>Required</sup> <a name="DeviceTrustProviderType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.deviceTrustProviderType"></a>

```go
func DeviceTrustProviderType() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `NativeApplicationOidcOptions`<sup>Required</sup> <a name="NativeApplicationOidcOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptions"></a>

```go
func NativeApplicationOidcOptions() DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference</a>

---

##### `OidcOptions`<sup>Required</sup> <a name="OidcOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.oidcOptions"></a>

```go
func OidcOptions() DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference">DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference</a>

---

##### `PolicyReferenceName`<sup>Required</sup> <a name="PolicyReferenceName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.policyReferenceName"></a>

```go
func PolicyReferenceName() *string
```

- *Type:* *string

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.sseSpecification"></a>

```go
func SseSpecification() DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference">DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.tags"></a>

```go
func Tags() DataAwsccEc2VerifiedAccessTrustProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList">DataAwsccEc2VerifiedAccessTrustProviderTagsList</a>

---

##### `TrustProviderType`<sup>Required</sup> <a name="TrustProviderType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.trustProviderType"></a>

```go
func TrustProviderType() *string
```

- *Type:* *string

---

##### `UserTrustProviderType`<sup>Required</sup> <a name="UserTrustProviderType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.userTrustProviderType"></a>

```go
func UserTrustProviderType() *string
```

- *Type:* *string

---

##### `VerifiedAccessTrustProviderId`<sup>Required</sup> <a name="VerifiedAccessTrustProviderId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.verifiedAccessTrustProviderId"></a>

```go
func VerifiedAccessTrustProviderId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2VerifiedAccessTrustProviderConfig <a name="DataAwsccEc2VerifiedAccessTrustProviderConfig" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

&dataawsccec2verifiedaccesstrustprovider.DataAwsccEc2VerifiedAccessTrustProviderConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/ec2_verified_access_trust_provider#id DataAwsccEc2VerifiedAccessTrustProvider#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions <a name="DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

&dataawsccec2verifiedaccesstrustprovider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions {

}
```


### DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions <a name="DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

&dataawsccec2verifiedaccesstrustprovider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions {

}
```


### DataAwsccEc2VerifiedAccessTrustProviderOidcOptions <a name="DataAwsccEc2VerifiedAccessTrustProviderOidcOptions" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

&dataawsccec2verifiedaccesstrustprovider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions {

}
```


### DataAwsccEc2VerifiedAccessTrustProviderSseSpecification <a name="DataAwsccEc2VerifiedAccessTrustProviderSseSpecification" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

&dataawsccec2verifiedaccesstrustprovider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification {

}
```


### DataAwsccEc2VerifiedAccessTrustProviderTags <a name="DataAwsccEc2VerifiedAccessTrustProviderTags" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

&dataawsccec2verifiedaccesstrustprovider.DataAwsccEc2VerifiedAccessTrustProviderTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

dataawsccec2verifiedaccesstrustprovider.NewDataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrl">PublicSigningKeyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions">DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicSigningKeyUrl`<sup>Required</sup> <a name="PublicSigningKeyUrl" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrl"></a>

```go
func PublicSigningKeyUrl() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions">DataAwsccEc2VerifiedAccessTrustProviderDeviceOptions</a>

---


### DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

dataawsccec2verifiedaccesstrustprovider.NewDataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpoint">PublicSigningKeyEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions">DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `PublicSigningKeyEndpoint`<sup>Required</sup> <a name="PublicSigningKeyEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpoint"></a>

```go
func PublicSigningKeyEndpoint() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```go
func UserInfoEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions">DataAwsccEc2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a>

---


### DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

dataawsccec2verifiedaccesstrustprovider.NewDataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions">DataAwsccEc2VerifiedAccessTrustProviderOidcOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```go
func UserInfoEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessTrustProviderOidcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderOidcOptions">DataAwsccEc2VerifiedAccessTrustProviderOidcOptions</a>

---


### DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

dataawsccec2verifiedaccesstrustprovider.NewDataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification">DataAwsccEc2VerifiedAccessTrustProviderSseSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyEnabled`<sup>Required</sup> <a name="CustomerManagedKeyEnabled" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```go
func CustomerManagedKeyEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessTrustProviderSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderSseSpecification">DataAwsccEc2VerifiedAccessTrustProviderSseSpecification</a>

---


### DataAwsccEc2VerifiedAccessTrustProviderTagsList <a name="DataAwsccEc2VerifiedAccessTrustProviderTagsList" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

dataawsccec2verifiedaccesstrustprovider.NewDataAwsccEc2VerifiedAccessTrustProviderTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccEc2VerifiedAccessTrustProviderTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.get"></a>

```go
func Get(index *f64) DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference <a name="DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccec2verifiedaccesstrustprovider"

dataawsccec2verifiedaccesstrustprovider.NewDataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTags">DataAwsccEc2VerifiedAccessTrustProviderTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccEc2VerifiedAccessTrustProviderTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2VerifiedAccessTrustProvider.DataAwsccEc2VerifiedAccessTrustProviderTags">DataAwsccEc2VerifiedAccessTrustProviderTags</a>

---



