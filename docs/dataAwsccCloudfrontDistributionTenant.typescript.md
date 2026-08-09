# `dataAwsccCloudfrontDistributionTenant` Submodule <a name="`dataAwsccCloudfrontDistributionTenant` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudfrontDistributionTenant <a name="DataAwsccCloudfrontDistributionTenant" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_distribution_tenant awscc_cloudfront_distribution_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant(scope: Construct, id: string, config: DataAwsccCloudfrontDistributionTenantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig">DataAwsccCloudfrontDistributionTenantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig">DataAwsccCloudfrontDistributionTenantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCloudfrontDistributionTenant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isConstruct"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformElement"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformDataSource"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.generateConfigForImport"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsccCloudfrontDistributionTenant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCloudfrontDistributionTenant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCloudfrontDistributionTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_distribution_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudfrontDistributionTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.connectionGroupId">connectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.customizations">customizations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.distributionId">distributionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.distributionTenantId">distributionTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.domainResults">domainResults</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList">DataAwsccCloudfrontDistributionTenantDomainResultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.eTag">eTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.managedCertificateRequest">managedCertificateRequest</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference">DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList">DataAwsccCloudfrontDistributionTenantParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList">DataAwsccCloudfrontDistributionTenantTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `connectionGroupId`<sup>Required</sup> <a name="connectionGroupId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.connectionGroupId"></a>

```typescript
public readonly connectionGroupId: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `customizations`<sup>Required</sup> <a name="customizations" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.customizations"></a>

```typescript
public readonly customizations: DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference</a>

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.distributionId"></a>

```typescript
public readonly distributionId: string;
```

- *Type:* string

---

##### `distributionTenantId`<sup>Required</sup> <a name="distributionTenantId" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.distributionTenantId"></a>

```typescript
public readonly distributionTenantId: string;
```

- *Type:* string

---

##### `domainResults`<sup>Required</sup> <a name="domainResults" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.domainResults"></a>

```typescript
public readonly domainResults: DataAwsccCloudfrontDistributionTenantDomainResultsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList">DataAwsccCloudfrontDistributionTenantDomainResultsList</a>

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `eTag`<sup>Required</sup> <a name="eTag" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.eTag"></a>

```typescript
public readonly eTag: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `managedCertificateRequest`<sup>Required</sup> <a name="managedCertificateRequest" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.managedCertificateRequest"></a>

```typescript
public readonly managedCertificateRequest: DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference">DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.parameters"></a>

```typescript
public readonly parameters: DataAwsccCloudfrontDistributionTenantParametersList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList">DataAwsccCloudfrontDistributionTenantParametersList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.tags"></a>

```typescript
public readonly tags: DataAwsccCloudfrontDistributionTenantTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList">DataAwsccCloudfrontDistributionTenantTagsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudfrontDistributionTenantConfig <a name="DataAwsccCloudfrontDistributionTenantConfig" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontDistributionTenantConfig: dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.id">id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/cloudfront_distribution_tenant#id DataAwsccCloudfrontDistributionTenant#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudfrontDistributionTenantCustomizations <a name="DataAwsccCloudfrontDistributionTenantCustomizations" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizations.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontDistributionTenantCustomizations: dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizations = { ... }
```


### DataAwsccCloudfrontDistributionTenantCustomizationsCertificate <a name="DataAwsccCloudfrontDistributionTenantCustomizationsCertificate" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificate.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontDistributionTenantCustomizationsCertificate: dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificate = { ... }
```


### DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions <a name="DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions: dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions = { ... }
```


### DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl <a name="DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontDistributionTenantCustomizationsWebAcl: dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl = { ... }
```


### DataAwsccCloudfrontDistributionTenantDomainResults <a name="DataAwsccCloudfrontDistributionTenantDomainResults" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResults.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontDistributionTenantDomainResults: dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResults = { ... }
```


### DataAwsccCloudfrontDistributionTenantManagedCertificateRequest <a name="DataAwsccCloudfrontDistributionTenantManagedCertificateRequest" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequest.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontDistributionTenantManagedCertificateRequest: dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequest = { ... }
```


### DataAwsccCloudfrontDistributionTenantParameters <a name="DataAwsccCloudfrontDistributionTenantParameters" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParameters.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontDistributionTenantParameters: dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParameters = { ... }
```


### DataAwsccCloudfrontDistributionTenantTags <a name="DataAwsccCloudfrontDistributionTenantTags" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTags.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

const dataAwsccCloudfrontDistributionTenantTags: dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTags = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference <a name="DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificate">DataAwsccCloudfrontDistributionTenantCustomizationsCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontDistributionTenantCustomizationsCertificate;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificate">DataAwsccCloudfrontDistributionTenantCustomizationsCertificate</a>

---


### DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference <a name="DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.restrictionType">restrictionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions">DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `restrictionType`<sup>Required</sup> <a name="restrictionType" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.restrictionType"></a>

```typescript
public readonly restrictionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions">DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictions</a>

---


### DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference <a name="DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictions">geoRestrictions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl">webAcl</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizations">DataAwsccCloudfrontDistributionTenantCustomizations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.certificate"></a>

```typescript
public readonly certificate: DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsCertificateOutputReference</a>

---

##### `geoRestrictions`<sup>Required</sup> <a name="geoRestrictions" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictions"></a>

```typescript
public readonly geoRestrictions: DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsGeoRestrictionsOutputReference</a>

---

##### `webAcl`<sup>Required</sup> <a name="webAcl" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl"></a>

```typescript
public readonly webAcl: DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference">DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontDistributionTenantCustomizations;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizations">DataAwsccCloudfrontDistributionTenantCustomizations</a>

---


### DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference <a name="DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl">DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl">DataAwsccCloudfrontDistributionTenantCustomizationsWebAcl</a>

---


### DataAwsccCloudfrontDistributionTenantDomainResultsList <a name="DataAwsccCloudfrontDistributionTenantDomainResultsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference <a name="DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResults">DataAwsccCloudfrontDistributionTenantDomainResults</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResultsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontDistributionTenantDomainResults;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantDomainResults">DataAwsccCloudfrontDistributionTenantDomainResults</a>

---


### DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference <a name="DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference">certificateTransparencyLoggingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName">primaryDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost">validationTokenHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequest">DataAwsccCloudfrontDistributionTenantManagedCertificateRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateTransparencyLoggingPreference`<sup>Required</sup> <a name="certificateTransparencyLoggingPreference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference"></a>

```typescript
public readonly certificateTransparencyLoggingPreference: string;
```

- *Type:* string

---

##### `primaryDomainName`<sup>Required</sup> <a name="primaryDomainName" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName"></a>

```typescript
public readonly primaryDomainName: string;
```

- *Type:* string

---

##### `validationTokenHost`<sup>Required</sup> <a name="validationTokenHost" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost"></a>

```typescript
public readonly validationTokenHost: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontDistributionTenantManagedCertificateRequest;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantManagedCertificateRequest">DataAwsccCloudfrontDistributionTenantManagedCertificateRequest</a>

---


### DataAwsccCloudfrontDistributionTenantParametersList <a name="DataAwsccCloudfrontDistributionTenantParametersList" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.get"></a>

```typescript
public get(index: number): DataAwsccCloudfrontDistributionTenantParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudfrontDistributionTenantParametersOutputReference <a name="DataAwsccCloudfrontDistributionTenantParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParameters">DataAwsccCloudfrontDistributionTenantParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontDistributionTenantParameters;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantParameters">DataAwsccCloudfrontDistributionTenantParameters</a>

---


### DataAwsccCloudfrontDistributionTenantTagsList <a name="DataAwsccCloudfrontDistributionTenantTagsList" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.get"></a>

```typescript
public get(index: number): DataAwsccCloudfrontDistributionTenantTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsccCloudfrontDistributionTenantTagsOutputReference <a name="DataAwsccCloudfrontDistributionTenantTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer"></a>

```typescript
import { dataAwsccCloudfrontDistributionTenant } from '@cdktn/provider-awscc'

new dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTags">DataAwsccCloudfrontDistributionTenantTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsccCloudfrontDistributionTenantTags;
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudfrontDistributionTenant.DataAwsccCloudfrontDistributionTenantTags">DataAwsccCloudfrontDistributionTenantTags</a>

---



